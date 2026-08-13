# Estilos y responsive

## Alcance

Define el sistema visual, la organización del CSS y el comportamiento por viewport. No regula texto editorial ni lógica JavaScript.

## Convenciones existentes

- La paleta se expresa con variables CSS como `--negro`, `--blanco`, `--celeste` y `--dorado`.
- Las familias son Bebas Neue para display, DM Serif Display para acentos editoriales y DM Sans para cuerpo.
- La portada usa corte principal en `900px`; el tomo usa escritorio desde `900px`, tablet entre `600px` y `899px`, y vista móvil por debajo de `600px`.
- El tomo usa prefijo `mv-` para componentes exclusivos de la vista móvil.

## Directivas

- Reutilizar variables CSS antes de repetir colores, tipografías o dimensiones con significado global. Mantener el vocabulario visual celeste/blanco/dorado sobre fondos oscuros o papel claro.
- Seguir la nomenclatura kebab-case descriptiva existente. Reservar `mv-` para la variante móvil del tomo y `spread-*`/`page-*` para la experiencia paginada.
- Agrupar reglas nuevas junto al componente afectado y colocar sus overrides en el breakpoint correspondiente. Evitar aumentar la cascada con selectores globales o `!important` salvo que sea necesario para la variante ya existente.
- Preservar los breakpoints actuales salvo que una prueba visual demuestre una discontinuidad. Si se cambia uno, revisar portada, catálogo, toolbar, spreads y vista móvil.
- En el tomo, no mostrar simultáneamente `.spread-wrapper` y `.mobile-view`: la primera pertenece a escritorio/tablet y la segunda a menos de `600px`.
- Mantener proporción y legibilidad de las páginas mediante `--page-w` y `--page-h`; no fijar tamaños que desborden el viewport de tablet.
- Probar textos largos, acentos y cifras en sus contenedores. No resolver desbordes ocultando contenido editorial.
- Para animaciones nuevas, definir estado inicial/final estable y una alternativa sin movimiento; no añadir movimiento continuo que compita con la lectura.

