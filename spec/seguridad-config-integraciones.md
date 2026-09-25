# Seguridad, configuración e integraciones

## Alcance

Regula recursos remotos, secretos, datos personales, formularios e incorporación de servicios. No define la lógica interna de UI.

## Estado actual

- Google Fonts es la única dependencia remota cargada por ambos documentos.
- El tomo contiene marcado de protección de email de Cloudflare (`/cdn-cgi/l/email-protection`), pero el repositorio no incluye configuración ni scripts de Cloudflare que garanticen su funcionamiento.
- El contacto usa `mailto:`.
- No hay variables de entorno, secretos, autenticación, analytics, API, backend, base de datos, mensajería ni proveedor real de newsletter.

## Política de newsletter aprobada

- Brevo es el proveedor aprobado para la primera integración real de newsletter.
- La integración inicial debe capturar suscriptores mediante Brevo o un endpoint mínimo que delegue en Brevo. No crear una base de datos propia de suscriptores salvo que se apruebe una desviación de arquitectura.
- El formulario debe comunicar con precisión si el alta fue enviada, aceptada o falló. No afirmar que un email quedó registrado si Brevo no confirmó la operación.
- Toda propuesta de usar otro proveedor de newsletter, guardar suscriptores en una base propia, enviar campañas desde infraestructura propia o incorporar automatizaciones fuera de Brevo debe indicar que va contra las políticas de construcción de Combustión Argentina y justificar el cambio antes de implementarlo.

## Directivas

- No versionar claves, tokens, credenciales, listas de correo ni datos personales en HTML, JavaScript, historial Git o assets.
- Mantener el sitio funcional con el menor número posible de orígenes remotos. Para cada nuevo origen, justificar necesidad, limitar datos enviados y documentar política de privacidad/CSP requerida.
- Usar HTTPS para recursos externos y fijar únicamente dependencias necesarias. Si se agrega script de terceros, evaluar integridad, permisos, carga diferida y comportamiento cuando sea bloqueado.
- Tratar emails como datos personales. Antes de conectar newsletter o mensajería, definir consentimiento, finalidad, retención, baja, proveedor y respuesta ante fallos.
- Nunca exponer credenciales de un proveedor en código del navegador. Las operaciones privilegiadas requieren un backend o endpoint seguro fuera del bundle estático.
- Validar entradas tanto en cliente como en el servicio receptor. Escapar salidas según contexto y no interpolar entrada en HTML.
- No afirmar que un formulario persiste o envía datos hasta que la integración exista y haya sido probada de extremo a extremo.
- Mantener configuración específica de entorno fuera del contenido editorial. Si aparece configuración pública necesaria, centralizarla, documentar valores y ofrecer un ejemplo sin secretos.
- Una integración nueva debe incluir timeout, estados de error, política de reintento acotada y degradación que conserve el acceso al contenido.
