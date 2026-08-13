# Directivas del proyecto

Esta carpeta describe cómo modificar Combustión Argentina sin cambiar de forma accidental su arquitectura ni sus convenciones actuales. Las reglas se basan en los dos documentos HTML y los recursos versionados en este repositorio.

## Mapa de responsabilidades

- `arquitectura.md`: límites del sitio estático, estructura de archivos y dependencias permitidas.
- `html-accesibilidad.md`: semántica, navegación, formularios y accesibilidad del marcado.
- `estilos-responsive.md`: sistema visual, CSS embebido, breakpoints y paridad entre layouts.
- `contenido-assets.md`: contenido editorial, fuentes periodísticas, imágenes y rutas.
- `comportamiento-cliente.md`: JavaScript del navegador, estado de navegación y manejo de fallos.
- `validacion-testing.md`: comprobaciones obligatorias antes de dar un cambio por terminado.
- `seguridad-config-integraciones.md`: datos personales, configuración, recursos externos e integraciones.
- `git-ci.md`: alcance de commits, ramas y realidad actual de automatización.

## Cómo aplicar estas directivas

1. Determinar qué archivos y responsabilidades afecta el cambio.
2. Aplicar únicamente los specs correspondientes; si intervienen varias áreas, cumplir todos sin trasladar reglas de una responsabilidad a otra.
3. Si una propuesta exige backend, build, API, persistencia o CI, tratarla como un cambio de arquitectura explícito: no asumir que esa capacidad ya existe.

