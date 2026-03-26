# FLISoL UTP 2026 - Landing Oficial

Landing web del evento FLISoL UTP 2026, organizada por LEAD UTP.

El objetivo del proyecto es comunicar de forma clara:
- Qué es FLISoL
- Actividades del evento
- Convocatoria de ponentes
- Información práctica para asistentes

Esta documentación está pensada para que nuevos voluntarios puedan continuar el proyecto sin depender de contexto previo.

## 1. Stack Tecnológico

- React 19
- Vite 8
- Tailwind CSS 3
- ESLint 9

## 2. Estructura del Proyecto

```text
flisol-utp/
	public/
		images/
			flisol-logo.png
			lead-utp-logo.png
	src/
		components/
			Navbar.jsx
			Hero.jsx
			AboutFlisol.jsx
			Activities.jsx
			CallForSpeakers.jsx
			PracticalInfo.jsx
			Footer.jsx
		App.jsx
		index.css
		main.jsx
	index.html
	tailwind.config.js
	eslint.config.js
	vite.config.js
```

## 3. Cómo Ejecutar el Proyecto

### Requisitos
- Node.js 20+
- npm 10+

### Instalación
```bash
npm install
```

### Entorno de desarrollo
```bash
npm run dev
```

### Build de producción
```bash
npm run build
```

### Previsualizar build
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

## 4. Guía Rápida para Editar Contenido

La página es de una sola vista (one-page) con secciones.

- `Navbar.jsx`: enlaces de navegación y botón principal "Sé ponente".
- `Hero.jsx`: portada, fecha principal y contador regresivo.
- `AboutFlisol.jsx`: descripción institucional de FLISoL.
- `Activities.jsx`: bloque de actividades destacadas.
- `CallForSpeakers.jsx`: texto del llamado a ponencias.
- `PracticalInfo.jsx`: fecha, hora, lugar y costo.
- `Footer.jsx`: enlaces finales, contacto y logos.

### Datos que suelen cambiar (antes de cada edición anual)
- Año del evento
- Fecha del evento
- Fecha de cierre de convocatoria
- URL de Sessionize
- Lugar y hora
- Correo de contacto

Recomendación: hacer estos cambios en una sola rama y validar visualmente todos los componentes, porque varios textos se repiten en más de una sección.

## 5. Guía de Estilo del Proyecto

- Se usa Tailwind para casi todos los estilos.
- Los estilos globales viven en `src/index.css`.
- Mantener nombres de clases legibles y agrupados por intención (layout, tipografía, color, interacción).
- Evitar CSS suelto en archivos nuevos, salvo estilos globales realmente necesarios.

## 6. Convenciones para Voluntarios

### Flujo de trabajo recomendado
1. Crear rama desde `main`.
2. Hacer cambios pequeños y enfocados.
3. Ejecutar `npm run lint` y `npm run build` antes de enviar PR.
4. Adjuntar capturas (desktop y mobile) en el PR si se tocó UI.

### Mensajes de commit sugeridos
- `feat: actualiza contenido del hero para FLISoL 2027`
- `fix: corrige enlace de convocatoria de speakers`
- `style: mejora contraste en tarjetas de actividades`
- `docs: actualiza guia de onboarding`

## 7. Checklist Antes de Publicar Cambios

- El proyecto levanta con `npm run dev`.
- Build exitoso con `npm run build`.
- Sin errores de lint.
- Enlaces externos funcionando.
- Navegación de secciones funcionando.
- Vista mobile y desktop revisadas.
- Textos sin faltas ortográficas.

## 8. Mejoras Pendientes Recomendadas

- Agregar menú móvil (hamburguesa o drawer) para navegación completa en pantallas pequeñas.
- Centralizar contenido editable en un solo archivo de constantes para evitar duplicación.
- Mejorar SEO base (`lang="es"`, `title`, `meta description`, Open Graph).
- Limpiar archivos heredados no usados (por ejemplo, estilos de plantilla inicial).

## 9. Contacto del Equipo

Si tienes dudas para continuar el proyecto:
- Correo actual de referencia: `leadutp@gmail.com`
- Coordinar cambios de contenido con el equipo organizador de FLISoL UTP.

## 10. Resumen para Nuevos Integrantes

Si eres voluntario nuevo, tu ruta mínima es:
1. Ejecutar proyecto localmente.
2. Leer y ubicar cada sección en `src/components/`.
3. Hacer un cambio pequeño de prueba.
4. Validar lint/build.
5. Abrir PR con descripción clara.

Con eso ya puedes contribuir de forma segura y ordenada.
