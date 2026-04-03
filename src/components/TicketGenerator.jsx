import { useState, useRef, useCallback, useEffect } from 'react'

const TEMPLATE_SRC = '/images/plantilla-pase.jpg'
// Template original: 3375 x 4219  →  canvas scaled down keeping ratio
const CANVAS_W = 540
const CANVAS_H = Math.round(540 * (4219 / 3375)) // ≈ 675

function TicketGenerator() {
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [photo, setPhoto] = useState(null)
  const [photoPreview, setPhotoPreview] = useState(null)
  const [templateImg, setTemplateImg] = useState(null)
  const fileInputRef = useRef(null)
  const canvasRef = useRef(null)

  // Pre-load the template image once
  useEffect(() => {
    const img = new Image()
    img.onload = () => setTemplateImg(img)
    img.src = TEMPLATE_SRC
  }, [])

  const handlePhotoChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setPhoto(file)
      const reader = new FileReader()
      reader.onload = (ev) => setPhotoPreview(ev.target.result)
      reader.readAsDataURL(file)
    }
  }

  const drawTicket = useCallback(
    (ctx, canvas, forDownload = false) => {
      const w = canvas.width
      const h = canvas.height

      ctx.clearRect(0, 0, w, h)

      // Draw template as full background
      if (templateImg) {
        ctx.drawImage(templateImg, 0, 0, w, h)
      } else {
        ctx.fillStyle = '#1a1030'
        ctx.fillRect(0, 0, w, h)
      }

      // --- Photo circle ---
      // The empty area in the template spans roughly from 38% to 72% of height
      const circleX = w / 2
      const circleY = h * 0.52  // center of the empty area
      const circleR = w * 0.18  // radius proportional to width

      if (photoPreview) {
        const img = new Image()
        img.onload = () => {
          // White/light circle border
          ctx.beginPath()
          ctx.arc(circleX, circleY, circleR + 4, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
          ctx.fill()

          ctx.save()
          ctx.beginPath()
          ctx.arc(circleX, circleY, circleR, 0, Math.PI * 2)
          ctx.clip()
          // Cover crop
          const aspect = img.width / img.height
          let sw, sh, sx, sy
          if (aspect > 1) {
            sh = img.height
            sw = sh
            sx = (img.width - sw) / 2
            sy = 0
          } else {
            sw = img.width
            sh = sw
            sx = 0
            sy = (img.height - sh) / 2
          }
          ctx.drawImage(img, sx, sy, sw, sh, circleX - circleR, circleY - circleR, circleR * 2, circleR * 2)
          ctx.restore()
          drawTicketText(ctx, w, h)
        }
        img.src = photoPreview
      } else {
        // Placeholder circle
        ctx.beginPath()
        ctx.arc(circleX, circleY, circleR + 4, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)'
        ctx.fill()

        ctx.beginPath()
        ctx.arc(circleX, circleY, circleR, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(26, 16, 48, 0.6)'
        ctx.fill()

        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
        ctx.font = '48px Inter, system-ui, sans-serif'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText('?', circleX, circleY)
        ctx.textBaseline = 'alphabetic'

        drawTicketText(ctx, w, h)
      }

      function drawTicketText(ctx, w, h) {
        // Position name below photo circle
        const nameY = h * 0.52 + w * 0.18 + 45 // circleY + circleR + spacing

        // Name pill
        const displayName = name || 'NOMBRE Y APELLIDO'
        ctx.font = 'bold 18px Inter, system-ui, sans-serif'
        ctx.textAlign = 'center'
        const nameWidth = ctx.measureText(displayName.toUpperCase()).width + 36
        const pillX = (w - nameWidth) / 2
        const pillH = 34
        const pillY = nameY - pillH / 2 - 4

        // Orange pill background
        ctx.fillStyle = '#f97316'
        ctx.beginPath()
        ctx.roundRect(pillX, pillY, nameWidth, pillH, 17)
        ctx.fill()

        ctx.fillStyle = '#ffffff'
        ctx.fillText(displayName.toUpperCase(), w / 2, nameY)

        // Role
        const displayRole = role || 'TU ROL'
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'
        ctx.font = '16px Inter, system-ui, sans-serif'
        ctx.fillText(displayRole, w / 2, nameY + 30)
      }
    },
    [name, role, photoPreview, templateImg],
  )

  // Draw canvas whenever data changes
  const canvasCallback = useCallback(
    (node) => {
      if (node) {
        canvasRef.current = node
        const ctx = node.getContext('2d')
        drawTicket(ctx, node)
      }
    },
    [drawTicket],
  )

  const handleDownload = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    drawTicket(ctx, canvas, true)

    setTimeout(() => {
      const link = document.createElement('a')
      link.download = `pase-flisol-utp-2026.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    }, 300)
  }

  const handleShare = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Re-draw to ensure latest state
    const ctx = canvas.getContext('2d')
    drawTicket(ctx, canvas, true)

    setTimeout(() => {
      // 1. Download the image
      const link = document.createElement('a')
      link.download = 'pase-flisol-utp-2026.png'
      link.href = canvas.toDataURL('image/png')
      link.click()

      // 2. Show popup
      setTimeout(() => {
        alert('¡Imagen descargada! En LinkedIn, adjunta tu imagen.')

        // 3. Redirect to LinkedIn with pre-filled text
        const text = encodeURIComponent(
          'Este 25 de abril seré parte de FLISoL UTP 2026, un espacio para aprender, compartir y conectar alrededor del software libre.\n¡Nos vemos en las charlas!\n#FlisolUTP #LeadUTP'
        )
        window.open(`https://www.linkedin.com/feed/?shareActive=true&text=${text}`, '_blank')
      }, 500)
    }, 300)
  }

  return (
    <div className="text-center">
      <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
        Genera tu pase a{' '}
        <span className="text-flisol-orange">FLISoL UTP</span>
      </h2>
      <p className="mx-auto mt-2 max-w-2xl text-sm text-flisol-muted sm:text-base">
        Sube tu foto, personaliza tu entrada y compártela en tus redes sociales
        para que todos sepan que serás parte del evento.
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:gap-8 text-left">
        {/* Form */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-sm">
          <h3 className="text-lg font-bold text-white mb-4">Tus Datos</h3>

          {/* Photo upload */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Tu Foto <span className="text-flisol-orange">*</span>
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handlePhotoChange}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-200 transition duration-300 hover:border-flisol-orange/50 hover:bg-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {photo ? 'Cambiar imagen' : 'Subir Imagen'}
            </button>
            {photo && (
              <span className="ml-3 text-xs text-flisol-muted">{photo.name}</span>
            )}
          </div>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Nombre Completo <span className="text-flisol-orange">*</span>
            </label>
            <input
              type="text"
              placeholder="NOMBRE Y APELLIDO"
              maxLength={28}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 outline-none transition duration-300 focus:border-flisol-orange/50 focus:ring-1 focus:ring-flisol-orange/30"
            />
          </div>

          {/* Role */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Rol o Profesión <span className="text-flisol-orange">*</span>
            </label>
            <input
              type="text"
              placeholder="TU ROL"
              maxLength={28}
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-500 outline-none transition duration-300 focus:border-flisol-orange/50 focus:ring-1 focus:ring-flisol-orange/30"
            />
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={handleDownload}
              disabled={!name}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-flisol-orange px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:bg-orange-500 disabled:opacity-40 disabled:hover:scale-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Descargar Imagen
            </button>
            <button
              onClick={handleShare}
              disabled={!name}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-flisol-orange/60 bg-white/5 px-6 py-3 text-sm font-semibold text-flisol-orange transition duration-300 hover:scale-105 hover:bg-flisol-orange hover:text-white disabled:opacity-40 disabled:hover:scale-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Compartir
            </button>
          </div>
        </div>

        {/* Preview */}
        <div className="flex items-center justify-center">
          <canvas
            ref={canvasCallback}
            width={CANVAS_W}
            height={CANVAS_H}
            className="w-full max-w-xs rounded-2xl shadow-glow"
          />
        </div>
      </div>
    </div>
  )
}

export default TicketGenerator
