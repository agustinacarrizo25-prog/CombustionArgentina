# Validación y testing

## Alcance

Define la evidencia mínima para aceptar cambios. No prescribe un framework inexistente ni modifica el flujo Git.

## Estado actual

El repositorio no incluye tests automatizados, linter, validador HTML, manifiesto de paquetes ni comandos de build. La validación es directa sobre archivos estáticos.

## Comprobaciones obligatorias

- Abrir `index.html` y cada tomo afectado desde la raíz del sitio; confirmar que no haya excepciones de JavaScript ni solicitudes locales fallidas.
- Validar HTML y revisar que tags, atributos, IDs y anclas sean correctos y únicos.
- Comprobar todas las rutas locales respetando mayúsculas, tildes y profundidad de carpeta.
- Probar la portada por encima y por debajo de `900px` y el tomo en al menos tres rangos: `>=900px`, `600–899px` y `<600px`.
- En el tomo de escritorio/tablet, recorrer todos los spreads con botones, toolbar, flechas del teclado y clic en ambas mitades. Confirmar indicador, límites y animaciones.
- En móvil, recorrer el documento, verificar swipe si aplica, animación de probabilidades, legibilidad, ausencia de scroll horizontal y paridad editorial.
- En la portada, probar navegación interna, enlaces al tomo, imágenes con fallback y formulario con email válido e inválido.
- Revisar foco por teclado, nombres accesibles, texto alternativo, reducción de movimiento y contraste de controles afectados.
- Comparar toda sección editorial duplicada entre spread y `mv-*` cuando cambien datos, citas o textos.

## Automatización futura

- Si se añade tooling, incluir comandos reproducibles y documentados para lint, validación y tests sin eliminar estas pruebas visuales.
- No declarar una comprobación automatizada como obligatoria hasta que su configuración esté versionada y sea ejecutable en un checkout limpio.

