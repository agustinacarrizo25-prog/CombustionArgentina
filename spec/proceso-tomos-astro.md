# Proceso para crear nuevos tomos en Astro

Este documento es la guia operativa para producir tomos nuevos de Combustion Argentina. Esta pensado para editores y agentes de IA que no necesitan conocer todo Astro, pero si deben respetar la arquitectura del proyecto.

## Regla principal

- Todo tomo nuevo se crea en Astro. No crear nuevos tomos como HTML suelto en `Tomos/`.
- El unico archivo que puede permanecer en `Tomos/` como referencia historica es `Tomos/Combustion_Argentina_vol-1.html`.
- Cada tomo nuevo debe existir como archivo propio de contenido y como puesta editorial propia si necesita diseno de revista.
- La numeracion de volumenes es global: despues del Vol. 001 viene el Vol. 002, aunque cambie el anio.
- El anio organiza la coleccion, pero no reinicia la numeracion.
- Un tomo publicado no debe cambiar automaticamente porque evolucione un componente compartido. Para cambios grandes, copiar/versionar el componente del tomo.

## Archivos que se crean por tomo

Para un tomo nuevo, crear como minimo:

1. Un archivo de metadata y contenido en `src/content/tomos/<anio>/`.
2. Un componente Astro propio en `src/components/tomos/volNNN/` si el tomo tiene composicion de revista.
3. Assets del tomo en `public/img/tomos/<anio>/vol-NNN/` cuando sean imagenes especificas de ese volumen.
4. Registro del componente en `src/pages/tomos/[year]/[slug].astro` para que la ruta publica renderice el tomo correcto.

Ejemplo para el Vol. 002 de 2026:

```txt
src/content/tomos/2026/vol-002-el-semillero-vuelve-a-rugir.md
src/components/tomos/vol002/CombustionArgentinaVol2.astro
public/img/tomos/2026/vol-002/
```

La ruta publica esperada seria:

```txt
/tomos/2026/vol-002-el-semillero-vuelve-a-rugir/
```

## Metadata obligatoria

Cada archivo en `src/content/tomos/<anio>/` debe tener frontmatter como este:

```md
---
title: "El semillero vuelve a rugir"
subtitle: "Una mirada editorial sobre la nueva generacion argentina"
year: 2026
volume: 2
volumeLabel: "Vol. 002"
slug: "vol-002-el-semillero-vuelve-a-rugir"
status: "en-preparacion"
cover: "/img/tomos/2026/vol-002/portada.webp"
summary: "Resumen breve para portada, catalogo y SEO."
publishedAt: "2026-10-15"
stableComponents: true
---
```

Valores permitidos de `status`:

- `disponible`
- `en-preparacion`
- `planeado`

Si el tomo aun no esta publicado, usar `en-preparacion` o `planeado`. No inventar una fecha definitiva si todavia no esta definida; usar la fecha editorial tentativa y corregirla antes de publicar.

## Componente de revista

El componente del tomo define la experiencia editorial: spreads, paginas, indice, toolbar, version movil, imagenes, citas y cierre.

Reglas:

- No convertir el tomo en un articulo one-page.
- Mantener experiencia de revista digital: portada, indice, spreads o paginas, numeracion, progreso, navegacion y cierre.
- Usar la identidad aprobada: negro carbono, blanco papel, celeste bandera, dorado editorial, Bebas Neue, DM Serif Display y DM Sans.
- Si se parte de un tomo anterior, copiar el componente a una carpeta nueva, por ejemplo de `vol001` a `vol002`, y editar la copia. No modificar el Vol. 001 para crear el Vol. 002.
- Si se crea una variante visual nueva, debe seguir siendo reconocible como Combustion Argentina.

## Registro en la ruta dinamica

El archivo `src/pages/tomos/[year]/[slug].astro` genera las rutas de todos los tomos desde la coleccion, pero tambien debe saber que componente renderizar para cada volumen.

Cuando se agregue un tomo con componente propio:

1. Importar el componente nuevo.
2. Asociarlo al `volume` o al `slug`.
3. Verificar que el tomo correcto renderice en su URL.

Ejemplo conceptual:

```astro
import CombustionArgentinaVol1 from '@components/tomos/vol001/CombustionArgentinaVol1.astro';
import CombustionArgentinaVol2 from '@components/tomos/vol002/CombustionArgentinaVol2.astro';

const componentsByVolume = {
  1: CombustionArgentinaVol1,
  2: CombustionArgentinaVol2,
};

const TomoComponent = componentsByVolume[tomo.data.volume];
```

Si el componente no esta registrado, el tomo puede aparecer en el catalogo pero fallar o mostrar contenido incorrecto al abrirlo.

## Assets

- Guardar imagenes especificas del tomo en `public/img/tomos/<anio>/vol-NNN/`.
- Usar nombres claros: `portada.webp`, `spread-02-colapinto.webp`, `cierre.webp`.
- Optimizar imagenes antes de publicar.
- No borrar ni reemplazar assets de tomos publicados si esos tomos los siguen usando.
- Evitar imagenes genericas que no aporten a la identidad de automovilismo argentino editorial premium.

## Checklist editorial antes de publicar

- El volumen tiene numero global correcto.
- El `slug` coincide con el nombre del archivo y con la URL esperada.
- El tomo aparece en `/tomos/` y en `/tomos/<anio>/`.
- El link "Leer tomo" abre la ruta correcta.
- La portada, el indice, los spreads, la numeracion y el cierre estan presentes.
- La version movil mantiene el mismo contenido editorial que desktop.
- Tildes, enies, signos y caracteres especiales se ven correctamente.
- Las fuentes y colores respetan el branding aprobado.
- Las fuentes periodisticas, citas, cifras y fechas fueron revisadas.

## Validacion tecnica minima

Antes de dar por terminado un tomo, correr:

```powershell
pnpm build
```

Luego abrir:

```txt
http://localhost:4321/tomos/<anio>/<slug>/
```

Si `pnpm build` falla, no publicar. Si la ruta abre pero el tomo no se parece a una revista, revisar el componente antes de seguir.

## Prompt recomendado para trabajar con IA

Usar este texto al pedirle a una IA que cree o edite un tomo:

```txt
Antes de tocar codigo, lee las specs del proyecto en spec/README.md, spec/arquitectura.md, spec/contenido-assets.md, spec/estilos-responsive.md, spec/validacion-testing.md y spec/proceso-tomos-astro.md.

Necesito crear o editar un tomo de Combustion Argentina en Astro. Respeta estas reglas:
- No crear HTML nuevo en Tomos/.
- Crear un archivo propio en src/content/tomos/<anio>/.
- Crear o editar un componente propio en src/components/tomos/volNNN/.
- Mantener numeracion global de volumenes.
- Mantener experiencia de revista digital, no articulo one-page.
- No modificar tomos publicados para crear uno nuevo; copiar/versionar componentes.
- Respetar branding: negro carbono, blanco papel, celeste bandera, dorado editorial, Bebas Neue, DM Serif Display y DM Sans.
- Registrar el componente en src/pages/tomos/[year]/[slug].astro.
- Ejecutar pnpm build al terminar.

Si propones otra arquitectura, otro framework principal, base de datos propia, backend persistente o newsletter fuera de Brevo, indicalo como desviacion de las politicas de construccion de Combustion Argentina antes de avanzar.
```

