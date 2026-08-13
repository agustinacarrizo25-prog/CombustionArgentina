# Arquitectura

## Alcance

Define los límites estructurales y tecnológicos del repositorio. No regula el detalle visual, editorial ni de pruebas.

## Estado actual

- `index.html` es la portada y catálogo del sitio.
- `Tomos/Combustion_Argentina_vol-1.html` es una revista autocontenida con vista paginada para escritorio/tablet y vista vertical para móvil.
- `img/` contiene los recursos WebP compartidos.
- HTML, CSS y JavaScript son nativos y se entregan directamente: no hay framework, bundler, gestor de paquetes, servidor de aplicación ni paso de compilación.
- No existe capa de datos, API propia, base de datos ni persistencia en el navegador.

## Directivas

- Mantener cada documento ejecutable como archivo estático y conservar rutas relativas compatibles con su nivel: `img/...` desde la raíz y `../img/...` desde `Tomos/`.
- Conservar CSS y JavaScript embebidos mientras el cambio sea local a un documento. Extraerlos solo mediante una decisión de arquitectura que actualice ambos documentos y sus rutas.
- Crear nuevos tomos dentro de `Tomos/` y colocar recursos reutilizables en `img/`; no mezclar publicaciones HTML con imágenes.
- Usar APIs web estándar compatibles con navegadores modernos. No introducir Node.js, frameworks, preprocesadores o dependencias de runtime para resolver un cambio puntual.
- Si se incorpora una API, backend, almacenamiento o build, documentar en el mismo cambio su contrato, configuración, ejecución local, manejo de errores y validación. No simular que una integración existe.
- Evitar duplicación nueva entre documentos. La duplicación deliberada entre el layout paginado y el layout móvil del tomo debe mantenerse sincronizada según `contenido-assets.md`.

