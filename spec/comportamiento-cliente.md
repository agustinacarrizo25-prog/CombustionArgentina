# Comportamiento del cliente y errores

## Alcance

Regula únicamente el JavaScript ejecutado en el navegador, su estado y sus fallos. No define servicios externos ni criterios visuales.

## Directivas

- Mantener la navegación de spreads con una única fuente de estado (`current`) y bloquear transiciones superpuestas con `animating`.
- Validar índices antes de tocar el DOM. La cantidad de labels debe coincidir con la cantidad de spreads y los controles deben reflejar los límites.
- Conservar equivalencia entre botones, teclado, clic y swipe. Calcular cada gesto desde un inicio y un fin definidos; no reutilizar variables sin inicializar.
- Consultar elementos antes de usarlos cuando puedan faltar y degradar de forma segura si `IntersectionObserver`, un selector o una animación no están disponibles.
- Evitar observers, listeners o temporizadores duplicados para el mismo efecto. Desregistrar observers de una sola ejecución y dejar los temporizadores en un estado final consistente.
- No usar `innerHTML` con datos externos o entradas de usuario. Preferir `textContent` y validación nativa del formulario.
- No registrar emails, datos personales ni contenido sensible en consola. Los errores recuperables deben producir un estado visible para la persona usuaria; la consola puede aportar contexto técnico no sensible durante desarrollo.
- La función de newsletter actual es solo una simulación local: no describir el correo como almacenado o enviado. Si se conecta un servicio, mostrar estados enviando/éxito/error, impedir envíos repetidos y preservar el email ante un fallo.
- El scroll suave no debe interceptar enlaces cuyo destino no exista ni enlaces externos.

