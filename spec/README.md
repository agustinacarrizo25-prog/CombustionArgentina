# Directivas del proyecto

Esta carpeta describe cómo modificar Combustión Argentina sin cambiar de forma accidental su arquitectura ni sus convenciones actuales. Las reglas se basan en los dos documentos HTML y los recursos versionados en este repositorio.

## Mapa de responsabilidades

- `arquitectura.md`: límites del sitio estático, estructura de archivos y dependencias permitidas.
- `html-accesibilidad.md`: semántica, navegación, formularios y accesibilidad del marcado.
- `estilos-responsive.md`: sistema visual, CSS embebido, breakpoints y paridad entre layouts.
- `contenido-assets.md`: contenido editorial, fuentes periodísticas, imágenes y rutas.
- `proceso-tomos-astro.md`: guía operativa para crear nuevos tomos en Astro.
- `comportamiento-cliente.md`: JavaScript del navegador, estado de navegación y manejo de fallos.
- `validacion-testing.md`: comprobaciones obligatorias antes de dar un cambio por terminado.
- `seguridad-config-integraciones.md`: datos personales, configuración, recursos externos e integraciones.
- `git-ci.md`: alcance de commits, ramas y realidad actual de automatización.

## Política técnica vigente

La evolución aprobada para Combustión Argentina es mantener el sitio como publicación estática y migrar hacia Astro como generador estático con componentes interactivos acotados. La arquitectura objetivo no debe quedar híbrida entre HTML suelto y Astro: portada, catálogo y tomos deben tener fuente mantenible en Astro. Cada volumen debe existir como archivo propio, organizado por año, con numeración global que no se reinicia y estabilidad editorial frente a cambios futuros de componentes compartidos. La integración de newsletter aprobada es Brevo como proveedor inicial. Propuestas que introduzcan otro framework principal, una SPA completa, backend propio, base de datos propia o un proveedor distinto para newsletter deben declararse como desviación de estas políticas de construcción y justificar el cambio antes de implementarlo.

## Política de marca vigente

La identidad visual aprobada combina automovilismo, épica editorial y argentinidad premium. La marca debe sostenerse sobre negro carbono, blanco papel, celeste bandera y dorado editorial, con Bebas Neue para impacto, DM Serif Display para acentos editoriales y DM Sans para lectura/UI. Colores de escuderías, F1 o estados son contextuales y no reemplazan la paleta de marca. Propuestas que cambien esta dirección visual, conviertan colores contextuales en identidad principal o introduzcan otra paleta/tipografía dominante deben declararse como desviación de las políticas de construcción de Combustión Argentina y justificar el cambio antes de implementarlo.

La performance visual de las imágenes tambien forma parte del branding. Un sitio de revista debe sentirse rápido, estable y editorialmente cuidado: imágenes sobredimensionadas, saltos de layout, logos pesados, base64 embebido o cargas tardías degradan la percepción de marca aunque el diseño sea correcto. Cualquier cambio visual debe preservar identidad y rendimiento de imagen al mismo tiempo.

## Cómo aplicar estas directivas

1. Determinar qué archivos y responsabilidades afecta el cambio.
2. Aplicar únicamente los specs correspondientes; si intervienen varias áreas, cumplir todos sin trasladar reglas de una responsabilidad a otra.
3. Si una propuesta exige backend, build, API, persistencia o CI, tratarla como un cambio de arquitectura explícito: no asumir que esa capacidad ya existe.

