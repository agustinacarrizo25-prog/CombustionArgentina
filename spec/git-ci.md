# Git y CI

## Alcance

Define cómo organizar y verificar cambios versionados. No establece detalles de testing ni una plataforma de despliegue inexistente.

## Estado actual

- La rama principal es `main` y el remoto es GitHub.
- El historial usa commits breves orientados a una sección o ajuste visual.
- No existen `.gitignore`, `.gitattributes`, workflows de GitHub Actions ni configuración de despliegue versionada.

## Directivas

- Mantener commits pequeños y coherentes, con un mensaje que describa la sección o responsabilidad modificada.
- No incluir archivos temporales, capturas de validación, cachés, credenciales ni artefactos de herramientas. Si se introduce tooling, agregar reglas de ignore específicas en el mismo cambio.
- Revisar `git diff` y `git status` antes de finalizar; preservar cambios ajenos y no reescribir historial compartido.
- Ejecutar las comprobaciones de `validacion-testing.md` correspondientes antes de integrar a `main` y registrar en la revisión qué se probó.
- No afirmar que CI o despliegue pasó: actualmente no hay pipeline versionado. Verificar por separado el estado real del hosting cuando sea parte del alcance.
- Si se incorpora CI, mantenerlo mínimo para el stack estático: validación de HTML, rutas, JavaScript y controles automatizables. Versionar workflow, versiones de herramientas y documentación del comando local equivalente.
- Toda regla de protección de rama, Pages o configuración alojada en GitHub que no viva en el repositorio debe documentarse como configuración externa, no como garantía del código.
