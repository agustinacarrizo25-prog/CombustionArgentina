# Estilos y responsive

## Alcance

Define el sistema visual, la organización del CSS y el comportamiento por viewport. No regula texto editorial ni lógica JavaScript.

## Convenciones existentes

- La paleta se expresa con variables CSS como `--negro`, `--blanco`, `--celeste` y `--dorado`.
- Las familias son Bebas Neue para display, DM Serif Display para acentos editoriales y DM Sans para cuerpo.
- La portada usa corte principal en `900px`; el tomo usa escritorio desde `900px`, tablet entre `600px` y `899px`, y vista móvil por debajo de `600px`.
- El tomo usa prefijo `mv-` para componentes exclusivos de la vista móvil.

## Política de branding aprobada

- La marca Combustión Argentina debe leerse como automovilismo argentino con tratamiento editorial premium: intensa, nacional, cuidada y orientada a revista, no como blog genérico ni landing SaaS.
- La paleta de marca se compone de negro carbono, blanco papel, celeste bandera y dorado editorial. Al normalizar tokens o migrar a Astro, usar estos valores como base:
  - `--brand-black: #0a0a0a`
  - `--brand-paper: #f5f0e8`
  - `--brand-sky: #74ACDF`
  - `--brand-sky-dark: #3a7ab5`
  - `--brand-gold: #C8A951`
  - `--brand-gold-light: #e8c96e`
- Bebas Neue sigue siendo la voz de impacto para marca, títulos, números y señalética deportiva. DM Serif Display sigue siendo la voz editorial para bajadas, citas y frases. DM Sans sigue siendo la voz funcional para cuerpo, navegación y UI.
- El celeste debe preservar la señal argentina. El dorado debe usarse como acento editorial/premium, no como único color dominante. El negro y el blanco papel sostienen el contraste y la sensación de revista.
- Las mayúsculas y el espaciado amplio son recursos de marca para labels, navegación, titulares y datos cortos. No usarlos como solución general para cuerpo largo o texto informativo.
- Los colores de escuderías, F1, métricas o estados son contextuales. Williams azul, Alpine rosa, rojo F1 y verdes de estado pueden aparecer solo donde el contenido lo justifica; no deben reemplazar la paleta base ni convertirse en identidad principal.
- La estabilidad visual y la velocidad percibida de imágenes son parte del branding. Las imágenes deben cargar de forma progresiva y mantener su marco sin agrandarse, achicarse ni provocar saltos. Un layout que depende del tamaño intrínseco accidental de una imagen se considera frágil.
- Cualquier propuesta que cambie la paleta dominante, reemplace las tres familias tipográficas, elimine el celeste/blanco/dorado como vocabulario central o convierta colores contextuales en branding debe indicar que va contra las políticas de construcción de Combustión Argentina y documentar la justificación antes de avanzar.

## Directivas

- Reutilizar variables CSS antes de repetir colores, tipografías o dimensiones con significado global. Mantener el vocabulario visual celeste/blanco/dorado sobre fondos oscuros o papel claro.
- Seguir la nomenclatura kebab-case descriptiva existente. Reservar `mv-` para la variante móvil del tomo y `spread-*`/`page-*` para la experiencia paginada.
- Agrupar reglas nuevas junto al componente afectado y colocar sus overrides en el breakpoint correspondiente. Evitar aumentar la cascada con selectores globales o `!important` salvo que sea necesario para la variante ya existente.
- Preservar los breakpoints actuales salvo que una prueba visual demuestre una discontinuidad. Si se cambia uno, revisar portada, catálogo, toolbar, spreads y vista móvil.
- En el tomo, no mostrar simultáneamente `.spread-wrapper` y `.mobile-view`: la primera pertenece a escritorio/tablet y la segunda a menos de `600px`.
- Mantener proporción y legibilidad de las páginas mediante `--page-w` y `--page-h`; no fijar tamaños que desborden el viewport de tablet.
- En cards, catálogos y módulos repetidos, fijar proporciones en el contenedor con `aspect-ratio` y hacer que el `<img>` interno llene el marco con `height: 100%`. No confiar en `width`/`height` HTML para el tamaño visual final.
- Probar textos largos, acentos y cifras en sus contenedores. No resolver desbordes ocultando contenido editorial.
- Para animaciones nuevas, definir estado inicial/final estable y una alternativa sin movimiento; no añadir movimiento continuo que compita con la lectura.

