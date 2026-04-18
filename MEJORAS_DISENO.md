# 🎨 Sistema de Diseño y Experiencia: FLISoL UTP 2026

Este documento define la identidad visual y estratégica de la landing page, elevada a un estándar **"Professional-Grade / Digital Editorial"**.

---

## 🚀 1. Concepto Creativo: "Dark Tech Freedom"
La web abandona la estética de "plantilla de evento" para adoptar un look de **Ingeniería de Alta Gama**. Se inspira en interfaces de herramientas como Linear, Vercel y Stripe, mezclado con un estilo editorial de revista tecnológica moderna.

---

## 💎 2. Fundamentos Visuales (Foundations)

### A. Tipografía (Jerarquía Técnica)
*   **Display (`Bricolage Grotesque`)**: Usada para títulos masivos. Su peso *Black* y *Extrabold* proyecta autoridad y modernidad técnica.
*   **Sans (`Outfit`)**: Usada para el cuerpo y datos. Es una fuente geométrica que ofrece legibilidad premium y un aire sofisticado.
*   **Utility (`Monospace/Tabular Numbers`)**: Las horas y timestamps usan números tabulares para mantener la alineación perfecta en la agenda.

### B. Paleta de Colores (Depth Palette)
*   **Fondo Primario**: `#0A0A0A` (Black Deep).
*   **Fondo Secundario**: `#111827` (Slate Dark) para diferenciar secciones.
*   **Acción (Core)**: `#F97316` (Orange Flisol).
*   **Acentos**: Gradiente LEAD (Rojo a Púrpura) para efectos de profundidad y badges VIP.

### C. Texturas y Atmósfera
*   **Grain Effect (Ruido SVG)**: Una capa invisible de 4% de opacidad que elimina el "píxel plano", dando una sensación de material orgánico y premium.
*   **Atmospheric Glows**: Luces ambientales de 500px-600px con desenfoque de 120px+ que "viven" detrás del contenido para dar tridimensionalidad.

---

## 🛠️ 3. Patrones de UI (UI Patterns)

### A. Títulos "Editorial Masivo"
*   **Dúo Dinámico**: Uso de texto sólido combinado con `outline-text` (contorno semitransparente). Esto permite títulos gigantes que no saturan el espacio visual.
*   **Líneas de Guía**: Elementos de 1px que conectan títulos con el contenido, reforzando la idea de "plano de ingeniería".

### B. Arquitectura de Módulos (Bento & Cards)
*   **Bento Grids**: Organización asimétrica en la sección de actividades para jerarquizar la importancia.
*   **VIP Modal**: Diseño de "Magazine" para speakers. La foto se trata como una credencial física y la charla como el contenido estrella.
*   **Technical Roadmap**: La agenda no es una lista, es un flujo de datos con nodos pulsantes y badges de cristal esmerilado.

---

## 🧠 4. Estrategia de UX y Conversión

### A. Optimización del Flujo
*   **Navegación de Acción Única**: Se eliminó la redundancia en la Navbar. El menú lleva a información ("Patrocinadores"), mientras que el botón flotante se reserva exclusivamente para la conversión crítica ("Inscribirme").
*   **Reducción de Carga Cognitiva**: Compresión vertical de la agenda para evitar la fatiga del scroll. Uso de `line-clamp` para mantener las descripciones breves y potentes.

### B. Accesibilidad y Lectura
*   **Safe Areas**: Implementación de paddings de seguridad en modales y secciones para que ningún elemento interactivo se pegue a los bordes del dispositivo.
*   **Viewport Awareness**: Ajuste de posiciones de badges (como el tiempo en la agenda) para que nunca se salgan del viewport en dispositivos móviles.

---

## 🎬 5. Movimiento y Respuesta (Motion)

*   **Orquestación Staggered**: Los elementos no "aparecen", se "revelan" secuencialmente usando `framer-motion`.
*   **Interactive Glows**: Las tarjetas de patrocinadores y speakers emiten luz o escalan sutilmente al interactuar, devolviendo un feedback táctil digital al usuario.
*   **Smart Autoplay**: Carruseles que avanzan solos pero "respetan" al usuario pausándose durante la lectura o interacción.

---

### 🎯 Meta Final
Convertir la landing de **FLISoL UTP 2026** en el referente visual de eventos tecnológicos en la región, proyectando **profesionalismo, innovación y excelencia técnica**.
