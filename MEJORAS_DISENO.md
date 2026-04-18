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

#### Escala Tipográfica Unificada (5 pasos)
El sistema usa exactamente **5 tamaños**, ninguno más. No añadir tamaños intermedios fuera de esta tabla.

| Paso | Tamaño | Uso | Token / clase |
|---|---|---|---|
| 1 | `text-4xl sm:text-6xl` | Títulos de sección | `typography.sectionTitle` |
| 2 | `text-xl sm:text-2xl` | Títulos de card / ítem | `typography.cardTitle` |
| 3 | `text-base` | Cuerpo, descripciones de sección | (inline) |
| 4 | `text-sm` | Metadata, nombres, roles | (inline) |
| 5 | `text-[10px]` | Micro-etiquetas, badges, eyebrow | `typography.sectionLabel` |

> **Regla de oro:** ningún badge o etiqueta usa `text-[9px]` o `text-[8px]`. Si es micro, va en `text-[10px]`.

#### Tokens de sección (Design Tokens)
Los tokens están en `src/constants/designTokens.js`. **No repetir clases manualmente** — importar el token.

| Token | Clases | Secciones que lo usan |
|---|---|---|
| `typography.sectionTitle` | `text-4xl font-bold sm:text-6xl leading-[0.85] tracking-tighter` | Estándar. Sponsors, Activities, SpeakersCarousel, Schedule, TicketGenerator. |
| `typography.sectionTitleLarge` | `text-6xl font-black md:text-8xl leading-[0.8] tracking-tighter` | Alto impacto: AboutFlisol, Register. |
| `typography.sectionTitleMassive` | `text-7xl font-black md:text-9xl leading-[0.8] tracking-tighter` | Hero-level: Footer. |
| `typography.cardTitle` | `text-xl sm:text-2xl font-bold font-display` | Cards: Activities, SpeakersCarousel, Schedule. |
| `typography.sectionLabel` | `text-[10px] font-bold uppercase tracking-[0.4em]` | Eyebrow labels y badges micro (todas las secciones). |

#### Jerarquía dentro de cada sección
Para que haya armonía visual entre los elementos del header de una sección:
*   **Eyebrow (Paso 5)**: `typography.sectionLabel` (`text-[10px]`) — contraste intencional extremo pequeño→grande.
*   **Título (Paso 1)**: token correspondiente — el salto brusco desde el eyebrow es parte del estilo editorial.
*   **Descripción (Paso 3)**: `text-base` (nunca `text-sm`) — actúa como puente entre el título masivo y el contenido.
*   **Títulos de cards (Paso 2)**: `typography.cardTitle` (`text-xl sm:text-2xl`) — escala intermedia.
*   **Roles / metadatos (Paso 4)**: `text-sm` — mínimo legible sin romper la proporción.

#### Padding horizontal estándar (Mobile-first)
Todas las secciones siguen el mismo patrón de espaciado interno. **No usar `px-4 sm:px-0`** — ese patrón cancela el padding en pantallas medianas y rompe la consistencia.

```
px-4 sm:px-6 lg:px-8
```

Este padding se aplica tanto en el wrapper de `App.jsx` como internamente en el componente (igual que `TicketGenerator`), dando un aire generoso en mobile sin saturar el contenido.

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
