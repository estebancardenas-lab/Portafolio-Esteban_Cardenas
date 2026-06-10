# PRD – Portafolio web de Esteban Cárdenas

## 1. Contexto y objetivo

El objetivo de este producto es crear un portafolio web profesional para Esteban Cárdenas que sirva como "single source of truth" de su trabajo como Product / UX UI Designer, reemplazando a Behance como pieza principal y dejándolo como canal secundario.

### 1.1. Objetivos de negocio

- Aumentar la tasa de respuestas/entrevistas provenientes de postulaciones (LinkedIn, portales de empleo, referidos) al ofrecer un portafolio más claro y profesional.
- Posicionar a Esteban como perfil híbrido: UX/UI Designer con enfoque en producto, sectores complejos (salud, financiero) y uso de IA en el proceso de diseño.
- Reducir la fricción para reclutadores y hiring managers al presentar 3–4 casos sólidos, fáciles de escanear y profundizar.

### 1.2. Objetivos de usuario (reclutadores / hiring managers)

- Entender en menos de 30 segundos quién es Esteban, qué hace y en qué tipo de problemas es fuerte.
- Evaluar rápidamente si su experiencia encaja con el rol (tipo de producto, industria, nivel de seniority, habilidades clave).
- Profundizar en 1–2 casos de estudio que muestren pensamiento de producto, proceso UX y calidad UI.
- Tener un canal sencillo para contactarlo (email, LinkedIn).

### 1.3. Métricas de éxito (cualitativas)

- Feedback positivo en entrevistas sobre la claridad y estructura del portafolio.
- Mayor frecuencia de preguntas sobre casos específicos (señal de que los proyectos están siendo leídos).
- Uso consistente del link del portafolio en CV, LinkedIn y postulaciones.

---

## 2. Público objetivo

### 2.1. Primario

- Reclutadores de UX/UI y Product Design (in-house, agencias, headhunters).
- Hiring managers (líderes de producto, jefes de experiencia, heads of design, CTO/PM de startups).

### 2.2. Secundario

- Diseñadores de producto/UX/UI que puedan referirlo o evaluarlo como par.
- Clientes potenciales para proyectos freelance puntuales (no es el foco principal, pero se contempla).

---

## 3. Alcance (MVP)

### 3.1. Incluido en el MVP

- Sitio web de portafolio con las siguientes secciones/páginas:
  - Home.
  - Work / Projects (listado).
  - Project detail (plantilla reusable para cada caso).
  - About.
  - Contact (puede ser sección dentro de Home).
- Estructura y contenido base en español.
- Versión responsive (desktop y mobile).

### 3.2. Excluido (futuro backlog)

- Blog o sección de artículos.
- Cambio de idioma (versión completa en inglés).
- CMS complejo para autoedición avanzada (MVP puede ser estático o con CMS simple).
- Animaciones avanzadas o microinteracciones complejas (no bloquean la primera versión).

---

## 4. Arquitectura de información

### 4.1. Sitemap

- Home
- Work / Projects
  - Project detail (plantilla; 3–4 instancias reales en MVP)
- About
- Contact (puede vivir como sección final de Home)

### 4.2. Navegación global

- Logo / nombre (Esteban Cárdenas).
- Enlaces: Home, Work, About, Contact.
- CTA secundario (opcional): "Ver CV" (link a PDF o LinkedIn).

---

## 5. Contenido por página

### 5.1. Home

**Objetivo:** Presentar rápidamente quién es Esteban, qué hace y guiar a los visitantes hacia los proyectos clave y el contacto.

#### 5.1.1. Sección Hero

- Elementos:
  - Título principal (ejemplo de intención):
    - "Product / UX UI Designer enfocado en productos financieros y salud digital".
  - Subtítulo con 2–3 ideas clave:
    - Años de experiencia en diseño digital.
    - Especialización en UX/UI y Product Design.
    - Uso de IA (vibe coding) para acelerar el proceso de diseño.
  - CTA principales:
    - Botón: "Ver proyectos" → Work.
    - Botón secundario: "Ver CV" o "Ver LinkedIn".

#### 5.1.2. Proyectos destacados

- Bloque con 3 tarjetas de proyectos (los más importantes del portafolio).
- Cada tarjeta incluye:
  - Nombre del proyecto o producto.
  - Empresa / contexto (ej. Skandia, Seguros Bolívar, etc.).
  - Rol (UX UI Designer, Product Designer).
  - Una frase corta de impacto (qué mejoró o qué problema atacó).
  - Enlace a Project detail.

#### 5.1.3. Cómo trabajo / enfoque

- Breve texto + lista de 3–4 bullets.
- Contenidos clave:
  - Diseño centrado en el usuario para productos complejos (salud, finanzas, servicios).
  - Trabajo conjunto con producto, tecnología, negocio y legal.
  - Enfoque en simplificar flujos complejos y generar claridad.
  - Uso de IA (Claude, Antigravity, etc.) para ideación, prototipado y documentación.

#### 5.1.4. Tooling & IA

- Sección pequeña con logos/lista de herramientas clave.
- Agrupación sugerida:
  - UX/UI: Figma, Design Systems.
  - IA: Claude Code, Perplexity, herramientas de vibe coding.
  - Tech: HTML/CSS (nivel colaboración con devs).

#### 5.1.5. CTA final / Contact

- Texto breve invitando a contacto para roles de Product / UX UI Designer.
- Email.
- Enlace a LinkedIn.
- Enlace opcional a Behance como apoyo (no principal).

---

### 5.2. Work / Projects (listado)

**Objetivo:** Mostrar una vista curada de 3–4 proyectos que reflejen amplitud (sectores) y profundidad (rol, proceso, complejidad).

#### 5.2.1. Intro

- Título: "Proyectos seleccionados" o similar.
- Párrafo corto explicando que se escogieron pocos proyectos para mostrar profundidad.

#### 5.2.2. Cards de proyectos

Para cada proyecto:

- Nombre del proyecto/producto.
- Empresa / contexto.
- Rol de Esteban.
- 1–2 etiquetas (tags):
  - "Fintech", "HealthTech", "Design System", "IA / Vibe coding", etc.
- Resumen de 1–2 líneas del reto y el impacto.
- Enlace a la página de detalle (Project detail).

---

### 5.3. Project detail (plantilla por caso)

**Objetivo:** Profundizar en cada caso de estudio con un storytelling centrado en producto, proceso UX y resultados.

Esta plantilla se reutiliza para cada proyecto. Estructura recomendada:

#### 5.3.1. Overview

- Bloque inicial visible arriba de todo.
- Contenido:
  - Tipo de producto (ej.: "Portal empresarial para clientes institucionales de fiduciaria").
  - Empresa.
  - Rol de Esteban.
  - Año / duración aproximada.
  - 2–3 bullets de resultados clave (métricas si existen, o resultados cualitativos claros).

#### 5.3.2. Contexto y rol

- Párrafo donde se explica:
  - Breve contexto de la empresa y el tipo de usuarios.
  - Cómo encajaba el proyecto en la estrategia del producto o del negocio.
  - Qué hizo concretamente Esteban (UX, UI, workshops, coordinación con stakeholders, etc.).

#### 5.3.3. Problema y objetivos

- Sección que responde:
  - ¿Qué problema de negocio y/o usuario se estaba resolviendo?
  - ¿Por qué era importante?
  - ¿Qué objetivos se definieron (ej. mejorar tasa de finalización, reducir errores, aumentar adopción)?

#### 5.3.4. Restricciones

- Lista de restricciones relevantes:
  - Regulatorias o de cumplimiento (en proyectos financieros o de salud).
  - Limitaciones técnicas (legado, stack, tiempos, recursos).
  - Limitaciones de investigación (ej. acceso a usuarios, tiempos de campo).

#### 5.3.5. Proceso (Research → Ideación → Diseño/Validación)

- Sub-secciones breves:

  **Research**
  - Qué métodos se usaron (entrevistas, análisis de data, revisión de procesos internos, workshops con negocio/legal, etc.).
  - Hallazgos clave (en bullets, sin revelar info sensible).

  **Ideación y definición**
  - Cómo se priorizaron problemas y oportunidades.
  - Exploraciones clave (wireframes, flujos alternativos).
  - Decisiones importantes y por qué se tomaron.

  **Diseño y validación**
  - Tipos de prototipos creados (baja/alta fidelidad).
  - Test con usuarios o con stakeholders.
  - Cómo se iteró a partir del feedback.

#### 5.3.6. Solución

- Galería/secuencia de pantallas clave del flujo (antes/después cuando aplique).
- Anotaciones breves en las imágenes para explicar decisiones de diseño (jerarquía, estados vacíos, manejo de errores, feedback, etc.).
- Mención explícita de cómo se utilizó IA cuando aplique:
  - Ejemplos: generar variantes de copy, explorar layouts, automatizar documentación, etc.

#### 5.3.7. Resultados e impacto

- Métricas cuantitativas (si existen y se pueden compartir):
  - Ej. mejoras en finalización de flujo, reducción de tiempos, disminución de tickets, etc.
- En ausencia de métricas duras, indicadores cualitativos:
  - Feedback positivo de usuarios/stakeholders.
  - Mayor claridad en procesos.
  - Adopción o despliegue exitoso.

#### 5.3.8. Aprendizajes y próximos pasos

- 3–5 bullets con:
  - Lo que funcionó bien.
  - Lo que haría diferente.
  - Próximas mejoras que le gustaría explorar.

---

### 5.4. About

**Objetivo:** Presentar a Esteban como profesional, conectar su trayectoria con el tipo de problemas que resuelve hoy y reforzar su posicionamiento como Product / UX UI Designer.

#### 5.4.1. Resumen profesional

- 2–3 párrafos que incluyan:
  - Años de experiencia total en diseño y en UX/UI.
  - Sectores clave: salud digital y servicios financieros/fiduciarios.
  - Tipo de problemas en los que se especializa (flujos complejos, portales, sistemas de autoservicio, etc.).

#### 5.4.2. Formación

- Listado breve (no duplicar el CV completo):
  - Especialización en Product Design.
  - Formación en diseño gráfico digital.
  - Cursos o certificaciones relevantes en IA aplicada al diseño y UX.

#### 5.4.3. Manera de trabajar

- Bloque con 3–4 bullets que describan su forma de trabajo:
  - Colaboración con producto, tecnología, legal y negocio.
  - Enfoque en investigación y validación continua.
  - Capacidad para traducir complejidad en interfaces claras.
  - Integración de IA en el workflow.

---

### 5.5. Contact

**Objetivo:** Facilitar que reclutadores y hiring managers lo contacten en 1–2 clics.

#### 5.5.1. Contenido

- Texto breve invitando a conversar sobre roles de Product / UX UI Designer.
- Email.
- Enlace a LinkedIn.
- Enlace opcional a Behance.

#### 5.5.2. Formato

- Puede ser una sección final dentro de Home.
- Opcional: formulario de contacto simple (no obligatorio para MVP).

---

## 6. Componentes y requisitos transversales

### 6.1. Diseño visual

- Estética limpia, enfocada en legibilidad y en el contenido de los casos.
- Paleta sobria (alineada a producto/finanzas/tecnología) con acentos para CTAs.
- Tipografía moderna, legible, con jerarquías claras (H1, H2, body).

### 6.2. Responsividad

- Diseño optimizado para desktop y mobile.
- Revisión de cómo se leen los casos en pantallas pequeñas (evitar bloques de texto demasiado largos).

### 6.3. Idioma

- Versión inicial en español.
- Redacción directa, profesional, sin tecnicismos innecesarios.

### 6.4. Accesibilidad básica

- Contraste suficiente entre texto y fondo.
- Tamaño de fuente mínimo adecuado.
- Etiquetas claras en enlaces y botones.

---

## 7. Requisitos funcionales

### 7.1. Performance y SEO básico

- Carga rápida en conexiones promedio (optimización básica de imágenes).
- Metadatos y título de página configurados.
- URL legibles (ej. /work, /about, /projects/nombre-proyecto).

### 7.2. Integraciones

- Botones/links a LinkedIn y Behance.
- Link a descarga de CV (PDF) si se desea.

### 7.3. Plataforma

- Implementación sugerida en herramientas tipo Framer o Webflow (o stack equivalente) para facilitar modificaciones futuras.

---

## 8. Tono y estilo de contenido

- Directo, claro y profesional.
- Foco en impacto y resultados, no solo en tareas.
- Explicar decisiones de diseño y contexto sin revelar información sensible.
- Usar voz en primera persona cuando corresponda ("Trabajé", "Diseñé", "Colaboré"), evitando abuso de lenguaje corporativo vacío.

---

## 9. Futuras iteraciones (backlog)

- Versión en inglés del sitio.
- Blog o sección de artículos sobre procesos, casos y uso de IA en diseño.
- Más proyectos detallados (más de 4 casos) a medida que se consoliden.
- Experimentos con microinteracciones y animaciones más avanzadas.
- Mejoras de analítica (tagging, eventos) para entender qué leen los reclutadores.
