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

## Assets

- Guardar imágenes compartidas en `img/` y preferir WebP, que es el formato existente.
- Usar nombres descriptivos y estables; respetar mayúsculas, espacios y tildes exactos porque el despliegue puede ser sensible a mayúsculas.
- Referenciar assets con rutas relativas al documento y comprobar que cada archivo exista. No duplicar una imagen como data URI cuando pueda reutilizarse desde `img/`.
- Optimizar dimensiones y peso para web sin degradar texto, rostros ni legibilidad editorial. Mantener encuadre útil en los breakpoints donde se usa como fondo.
- Documentar procedencia y derechos de nuevos recursos visuales cuando no sean propios; no incorporar material sin permiso compatible con la publicación.

