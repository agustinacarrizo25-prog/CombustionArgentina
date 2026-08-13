# HTML y accesibilidad

## Alcance

Regula la estructura semántica, la operación con teclado y tecnologías de asistencia. No define colores, tamaños ni contenido editorial.

## Directivas

- Mantener `<!DOCTYPE html>`, `lang="es"`, UTF-8, viewport móvil y un `title` descriptivo en cada documento.
- Usar elementos semánticos para su función real: enlaces para navegación, botones para acciones, encabezados jerárquicos, listas para colecciones y formularios para entradas.
- Todo enlace interno debe resolver a un `id` existente. Los enlaces placeholder con `href="#"` no deben publicarse como si fueran destinos funcionales.
- Toda imagen informativa debe tener `alt` específico. Los fondos decorativos deben permanecer ocultos a lectores de pantalla; los fondos informativos deben exponer `role="img"` y `aria-label` equivalente.
- Las acciones de la revista deben seguir disponibles con teclado. Al cambiar de spread, actualizar el estado `disabled` de anterior/siguiente y mantener visible un indicador de página comprensible.
- No depender únicamente de clics sobre mitades de la página o de gestos táctiles: conservar botones y flechas de teclado como alternativas.
- Los formularios deben tener nombre accesible para cada campo, validación nativa apropiada y una región perceptible para el resultado. Un `placeholder` no sustituye a un `label`.
- Cuando una animación no sea esencial, respetar `prefers-reduced-motion` y evitar que el movimiento bloquee navegación o lectura.
- Verificar contraste y foco visible en controles, enlaces y botones, incluidos los estados deshabilitados.

