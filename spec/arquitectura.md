# Arquitectura

## Alcance

Define los límites estructurales y tecnológicos del repositorio. No regula el detalle visual, editorial ni de pruebas.

## Estado actual

- `index.html` es la portada y catálogo del sitio.
- `Tomos/Combustion_Argentina_vol-1.html` es una revista autocontenida con vista paginada para escritorio/tablet y vista vertical para móvil.
- `img/` contiene los recursos WebP compartidos.
- HTML, CSS y JavaScript son nativos y se entregan directamente: no hay framework, bundler, gestor de paquetes, servidor de aplicación ni paso de compilación.
- No existe capa de datos, API propia, base de datos ni persistencia en el navegador.

## Política de evolución aprobada

- La arquitectura objetivo debe seguir siendo una revista estática. La publicación del contenido debe poder servirse como HTML, CSS, JavaScript y assets estáticos.
- Si el proyecto incorpora un generador o framework, la opción aprobada es Astro, orientado a generación estática y contenido editorial. La migración objetivo no debe quedar como arquitectura híbrida entre HTML suelto y Astro: el código fuente mantenible de portada, catálogo y tomos debe vivir en Astro.
- React puede incorporarse únicamente como componentes interactivos acotados dentro de Astro, por ejemplo newsletter, controles de lectura o widgets de UI. No convertir el sitio en una SPA React completa sin una decisión de arquitectura explícita.
- Mantener la capa dinámica mínima. La captura de newsletter debe delegarse en el proveedor aprobado y no justificar por sí sola un backend propio, autenticación, base de datos propia, ORM ni panel de usuarios.
- Cualquier agente o cambio que proponga reemplazar Astro por otro framework principal, introducir una app full-stack, agregar usuarios, montar una base de datos propia o sumar backend persistente debe indicar que la propuesta va contra las políticas de construcción de Combustión Argentina y documentar la justificación antes de avanzar.

## Separación producto/editorial

- El proyecto tiene dos superficies diferenciadas:
  - El sitio principal es el cuerpo de acceso: portada, catálogo, manifiesto editorial, archivo de tomos, newsletter y navegación institucional.
  - La revista es el foco del producto: cada tomo debe sentirse como una edición editorial propia, paginada, navegable y diseñada como objeto de lectura.
- No resolver un tomo publicado como un artículo one-page salvo que una decisión editorial explícita lo apruebe para ese volumen. La experiencia por defecto de un tomo es revista digital, no blog post.
- El sitio principal puede usar secciones fluidas y layouts web tradicionales. La revista debe priorizar spreads, páginas, ritmo editorial, controles de lectura, índice y elementos propios de publicación.
- La navegación del sitio debe conducir hacia la revista; la navegación de la revista debe sostener la lectura dentro del tomo y permitir volver al sitio sin mezclar ambas experiencias.

## Arquitectura objetivo de tomos

- Los tomos deben modelarse como contenido versionable dentro de Astro, preferentemente con Content Collections y archivos MDX por volumen. No usar una base de datos, CMS obligatorio ni un único archivo de datos como fuente principal de las publicaciones.
- Cada volumen debe existir como archivo propio. Crear un volumen nuevo implica crear un archivo nuevo, aunque ese archivo pueda heredar layouts, componentes editoriales y estilos compartidos.
- Organizar los archivos fuente por año de publicación y volumen, por ejemplo `src/content/tomos/2026/vol-001-la-vuelta-del-gran-circo.mdx`. El directorio anual funciona como colección editorial y archivo navegable.
- La numeración de volúmenes es global e histórica: no se reinicia al cambiar de año. El año ordena la colección; el número de volumen identifica la secuencia completa de la revista.
- Las rutas públicas recomendadas para tomos deben reflejar la colección anual sin perder la secuencia global, por ejemplo `/tomos/2026/vol-001-la-vuelta-del-gran-circo/`.
- Las URLs heredadas como `/Tomos/Combustion_Argentina_vol-1.html` pueden conservarse como alias o redirecciones para no romper enlaces existentes, pero no deben ser la fuente mantenible del contenido.
- Los volúmenes publicados deben ser agnósticos a cambios futuros de componentes compartidos. Si un componente evoluciona, no debe alterar automáticamente la presentación o semántica editorial de un volumen ya cerrado. Para lograrlo, versionar componentes de tomo cuando corresponda, congelar variantes usadas por publicaciones existentes o aislar cambios nuevos detrás de props explícitas.
- La fuente de un volumen puede combinar metadata en Content Collections con un archivo Astro/MDX propio cuando el diseño requiere composición página por página. En esos casos, Content Collections ordena, valida y alimenta el catálogo; el archivo del volumen define la puesta editorial.
- Los componentes del lector de revista deben versionarse por generación de experiencia, por ejemplo `src/components/tomos/v1/*`, para evitar que mejoras futuras modifiquen tomos publicados sin intención explícita.
- La revista debe incluir, como base, lector paginado, índice interactivo, indicador de progreso, controles anterior/siguiente, navegación por teclado, soporte táctil y un modo móvil equivalente. Elementos como miniaturas de páginas, continuar leyendo y zoom pueden agregarse si no comprometen rendimiento ni accesibilidad.
- Al migrar un tomo existente, su diseño original es contrato visual. No reemplazarlo por una reinterpretación, rediseño o layout genérico salvo aprobación editorial explícita. La migración debe preservar estructura de spreads, composición, navegación, breakpoints, secciones y tono visual antes de proponer mejoras.

## Directivas

- Mantener cada salida ejecutable como archivo estático y conservar rutas compatibles con el despliegue estático.
- Durante la migración, los HTML existentes pueden usarse como referencia o compatibilidad temporal. No crear tomos nuevos como HTML monolítico en `Tomos/` si el cambio forma parte de la arquitectura Astro aprobada.
- Crear nuevos tomos en la estructura de contenido de Astro y colocar recursos reutilizables en la carpeta pública de assets definida por el proyecto; no mezclar publicaciones HTML con imágenes.
- Usar APIs web estándar compatibles con navegadores modernos. No introducir Node.js, frameworks, preprocesadores o dependencias de runtime para resolver un cambio puntual.
- Si se incorpora una API, backend, almacenamiento o build, documentar en el mismo cambio su contrato, configuración, ejecución local, manejo de errores y validación. No simular que una integración existe.
- Evitar duplicación nueva entre documentos. La duplicación deliberada entre el layout paginado y el layout móvil del tomo debe mantenerse sincronizada según `contenido-assets.md`.

