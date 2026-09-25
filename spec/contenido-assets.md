# Contenido editorial y assets

## Alcance

Regula textos, cifras, citas, fuentes, mapeos entre vistas y archivos visuales. No define implementación del layout ni integraciones de red.

## Directivas editoriales

- Escribir en español y conservar la voz argentina y editorial del proyecto, incluidos tildes, signos y nombres propios en UTF-8.
- No publicar rumores como hechos. Respaldar fechas, cifras, resultados, contratos, declaraciones y proyecciones con fuentes oficiales o medios de referencia.
- Distinguir hechos, citas y opinión. Atribuir citas públicas y mantener actualizada la lista de fuentes/créditos del tomo cuando cambie el contenido.
- Verificar coherencia temporal entre portada, catálogo, tomo, copyright, edición y referencias a temporadas; un mismo tomo no debe presentar años contradictorios.
- No convertir estimaciones editoriales, porcentajes de probabilidad o escenarios futuros en afirmaciones confirmadas.

## Mapeos entre vistas

- Cada sección del tomo paginado tiene una contraparte móvil: portada, legales/índice, historia, Colapinto, MotoGP, futuro y cierre.
- Todo cambio factual o editorial en una contraparte debe aplicarse a la otra en el mismo cambio. Comparar títulos, cifras, fechas, citas, fuentes y orden de secciones.
- `pageLabels`, cantidad de `.spread-container`, botones de la toolbar e índice editorial deben permanecer alineados.
- La edición de revista debe conservar recursos propios de publicación: portada, índice, numeración de páginas, créditos/fuentes, citas destacadas, módulos de datos y cierre editorial.
- El índice debe ser una pieza editorial navegable, no solo una lista técnica de enlaces. Debe orientar al lector dentro del tomo y reflejar el orden real de páginas o spreads.
- Los elementos duplicados entre desktop/tablet y móvil pueden tener composición distinta, pero deben sostener la misma jerarquía editorial, fuentes, cifras y llamadas principales.
- En migraciones de tomos publicados, conservar la puesta original como referencia obligatoria: orden de spreads, jerarquía visual, imágenes, bloques editoriales, indicadores, toolbar, vista móvil y cierre. Las mejoras deben partir de esa base, no sustituirla.

## Assets

- Guardar imágenes compartidas en `img/` y preferir WebP, que es el formato existente.
- Usar nombres descriptivos y estables; respetar mayúsculas, espacios y tildes exactos porque el despliegue puede ser sensible a mayúsculas.
- Referenciar assets con rutas relativas al documento y comprobar que cada archivo exista. No duplicar una imagen como data URI cuando pueda reutilizarse desde `img/`.
- Optimizar dimensiones y peso para web sin degradar texto, rostros ni legibilidad editorial. Mantener encuadre útil en los breakpoints donde se usa como fondo.
- Documentar procedencia y derechos de nuevos recursos visuales cuando no sean propios; no incorporar material sin permiso compatible con la publicación.

## Arquitectura de imágenes y performance de marca

- La performance de imágenes es parte de la identidad de Combustión Argentina. La marca debe sentirse editorial, precisa y rápida: no aceptar imágenes que generen carga lenta, parpadeos, saltos de layout o recortes accidentales.
- No embeber imágenes raster como `data:image` o base64 dentro de componentes, páginas o CSS salvo excepción técnica documentada. Los assets deben vivir como archivos cacheables en `public/img/` o en el pipeline de assets de Astro.
- Organizar imágenes específicas de cada tomo en `public/img/tomos/<anio>/vol-NNN/`. Las imágenes compartidas de marca viven en `public/img/brand/`; las compartidas editoriales pueden seguir en `public/img/` hasta que se migren a una estructura más granular.
- Mantener variantes por uso, no reutilizar una sola imagen para todos los contextos. Ejemplos: logo original, logo para fondo oscuro, lockup horizontal para header, símbolo para favicon/icono, portada para catálogo y portada para tomo.
- Preferir WebP para fotografías e imágenes raster pesadas. Usar PNG solo cuando sea necesario preservar transparencia compleja o calidad de marca; si un PNG se usa en UI frecuente como header, generar una variante WebP liviana.
- Las imágenes que aparecen arriba del primer pliegue o son parte del header deben tener variante liviana y pueden precargarse. Las imágenes debajo del primer pliegue deben usar carga diferida.
- Toda imagen en HTML debe declarar `width` y `height` reales o equivalentes para reservar espacio. Esto no debe definir el tamaño visual final: el layout debe controlar proporciones mediante CSS.
- No permitir que `width` y `height` intrínsecos deformen cards, catálogos o marcos editoriales. Los contenedores visuales deben fijar `aspect-ratio`; la imagen interna debe llenar ese marco con `width: 100%`, `height: 100%` y `object-fit: cover` o `contain`, según el caso.
- Usar `object-fit: cover` para fotografías de cards, héroes y fondos editoriales donde el marco manda. Usar `object-fit: contain` para logos, símbolos, mapas, marcas, ilustraciones o piezas donde no se puede recortar información.
- Usar `decoding="async"` en imágenes no críticas. Usar `fetchpriority="high"` solo en imágenes realmente críticas del primer render, como marca del header o imagen principal visible; no aplicarlo a galerías, cards o imágenes debajo del pliegue.
- Para fondos CSS importantes, considerar `preload` desde el layout o migrar a `<picture>/<img>` si se necesita control fino de carga, dimensiones, `srcset` o prioridad.
- Antes de publicar un tomo o página nueva, revisar el peso total de imágenes, ausencia de base64, dimensiones reales y proporciones visuales en desktop y mobile.

## Directivas de marca visual

- Priorizar imágenes que muestren automovilismo real, pilotos argentinos, autódromos, grilla, público, detalle editorial o contexto nacional. Evitar imágenes decorativas genéricas que diluyan la identidad de revista argentina de motor.
- Mantener la convivencia entre épica deportiva y tratamiento editorial. Las imágenes deben poder convivir con negro carbono, blanco papel, celeste bandera y dorado editorial sin forzar una paleta ajena.
- Cuando un asset responda a una escudería, evento o métrica específica, sus colores pueden aparecer como contexto informativo. No usar esos colores como reemplazo de la identidad principal de Combustión Argentina.
- Si un nuevo tomo requiere un clima visual propio, debe conservar una señal clara de marca: tipografía de impacto, acentos editoriales, celeste/blanco/dorado y tono visual de publicación premium.
- Cualquier propuesta de assets o dirección visual que abandone la identidad de automovilismo argentino editorial premium debe indicar que va contra las políticas de construcción de Combustión Argentina y justificar el cambio antes de implementarlo.

