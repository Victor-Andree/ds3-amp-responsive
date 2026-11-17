# DS3 Comunicaciones — Ficha AMP responsive

Rediseño de la ficha del cable UTP AMP NetConnect Categoría 6, 23 AWG y chaqueta CMR, modelo **6-1427200-4**, con presentación de 1000 pies.

## Objetivo de la prueba técnica

Transformar una página de producto antigua en una experiencia B2B responsive, accesible y mantenible, conservando la identidad de DS3 Comunicaciones y los archivos originales de la plantilla Cisco.

- [Ficha AMP original](https://www.ds3comunicaciones.com/AMP/6-1427200-4.html)
- [Catálogo oficial AMP](https://www.ds3comunicaciones.com/AMP/index.html#cablecat6)

## Tecnologías

HTML5 semántico, CSS3 y JavaScript Vanilla (ES6+). El diseño utiliza CSS Grid, Flexbox, variables CSS y media queries. No requiere backend, compilación, gestor de paquetes ni frameworks. La tipografía es del sistema.

## Funcionalidades

- Ficha responsive con galería de imágenes y miniatura seleccionada.
- Pestañas de descripción, especificaciones y descargas, operables con teclado.
- Menú móvil desplegable con estado ARIA, cierre con Escape y gestión del foco.
- Consulta comercial por correo y teléfono, contrastados con la cabecera oficial de DS3.
- Tabla técnica, enlace al PDF oficial y cuatro productos relacionados Cat 6/Cat 6A.
- Metadatos SEO, un único H1 y marcado JSON-LD Product con datos verificados.
- Imágenes secundarias con carga diferida y decodificación asíncrona; imagen principal con prioridad alta.
- Contenido y navegación disponibles sin JavaScript; las interacciones se activan progresivamente.

## Ejecutar con Live Server

1. Abrir la carpeta del repositorio en Visual Studio Code.
2. Tener disponible la extensión **Live Server**, de Ritwick Dey.
3. Hacer clic derecho en `6-1427200-4.html` y seleccionar **Open with Live Server**.
4. Abrir la ficha AMP y comprobar la navegación, las miniaturas y las pestañas.
5. Para revisar responsive, usar el modo de dispositivos del navegador a 320, 375, 768, 1024 y 1440 px.

Abrir `index.html` o la raíz del sitio redirige automáticamente a la ficha AMP mediante meta refresh, sin JavaScript. Incluye un enlace alternativo accesible si el navegador no realiza la redirección. La documentación y los enlaces comerciales externos de DS3 necesitan conexión a Internet; las imágenes se incluyen en el proyecto.

## Estructura de archivos

```text
.
├── 6-1427200-4.html       # Nueva ficha AMP
├── README.md             # Documentación del proyecto
├── css/
│   ├── amp-product.css   # Estilos exclusivos AMP
│   └── style.css         # Original Cisco, conservado
├── js/
│   ├── amp-product.js    # Interacciones exclusivas AMP
│   ├── nav.js            # Original Cisco, conservado
│   └── change_tabs.js    # Original Cisco, conservado
├── components/
│   └── navbar.html      # Original Cisco, conservado
├── icons/               # Recursos originales Cisco
├── C9200L-24P-4G-E.html   # Ficha Cisco original, conservada
├── legacy/
│   └── index-cisco.html  # Copia exacta del índice Cisco original
└── index.html           # Redirección a ./6-1427200-4.html
```

Las imágenes visibles AMP se sirven desde `assets/images/amp/`, con rutas relativas compatibles con GitHub Pages. Son copias de los recursos oficiales de DS3, sin imágenes genéricas. Tres se convirtieron a WebP (calidad 95, dimensiones originales); la imagen JPEG de 91 × 40 px se conserva porque convertirla aumentaba su peso. Algunas fichas oficiales comparten una fotografía de caja, que se identifica como referencial. La resolución de ciertas fotografías está limitada por el recurso original.

## Preparación para GitHub Pages

El proyecto es estático y no necesita instalación de dependencias ni un paso de build. La ficha debe publicarse junto con sus carpetas `css/` y `js/`, manteniendo nombres y mayúsculas.

- La entrada de la ficha es `6-1427200-4.html` dentro del subdirectorio del repositorio.
- Sus recursos locales usan rutas relativas: `css/amp-product.css` y `js/amp-product.js`.
- Los fragmentos internos apuntan a identificadores de la misma página.
- Las imágenes visibles usan rutas relativas en `assets/images/amp/`; el PDF y las referencias de imágenes del JSON-LD conservan sus direcciones HTTPS oficiales.
- La raíz utiliza `index.html` para redirigir a `./6-1427200-4.html`. La ruta relativa funciona tanto en la raíz local como dentro del subdirectorio de GitHub Pages.
- El índice Cisco original se conserva, byte por byte, en `legacy/index-cisco.html`. Es una copia de archivo: sus rutas relativas originales no se adaptaron a la carpeta legacy. La ficha `C9200L-24P-4G-E.html` permanece intacta en la raíz.
- No se establece una URL canónica hasta confirmar la dirección oficial de producción.

La ficha AMP está publicada en [GitHub Pages](https://victor-andree.github.io/ds3-amp-responsive/6-1427200-4.html). Tras publicar este cambio, la [URL principal](https://victor-andree.github.io/ds3-amp-responsive/) dirigirá automáticamente a ella. La redirección se ha preparado localmente; su commit y push requieren autorización.

## Validación y resultados locales de Lighthouse

Resultados de la ejecución local **proporcionados por el responsable de la prueba técnica**:

| Categoría | Puntuación |
| --- | ---: |
| Performance | 97 |
| Accessibility | 100 |
| Best Practices | 96 |
| SEO | 100 |

Estas puntuaciones no provienen de una ejecución de Lighthouse realizada por el asistente. No se adjuntó el informe original ni se especificaron versión, dispositivo, configuración de red o fecha de ejecución. No representan una medición del sitio publicado y pueden variar según el entorno.

En las comprobaciones de desarrollo se revisaron los cinco anchos indicados sin desbordamiento horizontal, la carga de imágenes, las miniaturas, las pestañas, el menú móvil, el recorrido por teclado y los enlaces internos. El PDF oficial respondió HTTP 200. Se comprobó la sintaxis del JavaScript y no se observaron errores en la consola durante esas pruebas. Estas comprobaciones no sustituyen una auditoría completa con lector de pantalla o mediciones de campo.

## Datos estructurados Product

El JSON-LD describe el producto mediante su nombre, marca, modelo/MPN, categoría, imágenes y atributos técnicos verificados. Se conserva sin cambios.

Según el resultado de validación comunicado por el responsable de la prueba, **Schema Markup Validator devuelve 0 errores y 0 advertencias**. Esto confirma la validez del marcado según Schema.org, pero no equivale a cumplir los requisitos específicos de resultados enriquecidos de Google.

Google Rich Results Test señala la ausencia de `offers`, `review` o `aggregateRating`: los fragmentos enriquecidos de producto requieren al menos una de estas propiedades. Las experiencias comerciales de merchant listings tienen requisitos adicionales de oferta y precio. La ficha no incorpora esas propiedades porque no dispone de información comercial vigente o valoraciones verificadas para publicarlas.

No se añaden precios, disponibilidad, reseñas ni calificaciones ficticias para eliminar el aviso. La elegibilidad se revisará cuando existan datos reales, verificables y coherentes con el contenido visible. Tampoco se elimina el marcado válido para mejorar un resultado de validación.

- [Schema.org Product](https://schema.org/Product)
- [Requisitos de Google para product snippets](https://developers.google.com/search/docs/appearance/structured-data/product-snippet#product)
- [Requisitos de Google para merchant listings](https://developers.google.com/search/docs/appearance/structured-data/merchant-listing)

## Créditos y fuentes

Este trabajo parte del [repositorio Cisco original de DS3 Perú](https://github.com/ds3peru/cisco) y de su [plantilla de producto Cisco](https://ds3peru.github.io/cisco/C9200L-24P-4G-E.html). El rediseño AMP utiliza archivos independientes. El índice Cisco original se respalda sin cambios en `legacy/index-cisco.html`; el nuevo `index.html` solo redirige a AMP. Los demás archivos Cisco permanecen intactos.

La información comercial, los contenidos de producto, las marcas, las fotografías y el PDF proceden de DS3 Comunicaciones y sus respectivas fuentes. No se atribuye autoría propia sobre esos recursos ni se concede una licencia adicional sobre ellos.

Productos relacionados contrastados individualmente con el catálogo y sus fichas:

- [1859345-2 — Cat 6, LSZH](https://www.ds3comunicaciones.com/AMP/1859345-2.html)
- [1427254-4 — Cat 6, CM](https://www.ds3comunicaciones.com/AMP/1427254-4.html)
- [1859218-2 — Cat 6A, LSZH](https://www.ds3comunicaciones.com/AMP/1859218-2.html)
- [1859381-2 — Cat 6A, LSZH](https://www.ds3comunicaciones.com/AMP/1859381-2.html)

Algunos encabezados de las fichas originales contienen códigos inconsistentes. Los modelos incorporados se contrastaron con el catálogo; para `1859381-2`, también con la tabla de su ficha. Las fotografías oficiales se mantienen identificadas como referenciales.

## Optimización de imágenes

Recursos de origen: `https://www.ds3comunicaciones.com/AMP/images/`.

| Original oficial | Archivo local | Dimensiones | Bytes originales | Bytes locales |
| --- | --- | --- | ---: | ---: |
| Caja.jpg | assets/images/amp/caja.webp | 500 × 500 | 37393 | 31852 |
| 6-1427200-4-1.jpg | assets/images/amp/6-1427200-4-1.webp | 508 × 238 | 32197 | 22400 |
| 1427254-4-1.jpg | assets/images/amp/1427254-4-1.jpg | 91 × 40 | 1396 | 1396 |
| 1859218-2.jpg | assets/images/amp/1859218-2.webp | 525 × 525 | 28427 | 18500 |

Los cuatro recursos únicos pasan de 99413 a 74148 bytes: una reducción del 25,4 % (24,7 KiB). Es una comparación de archivos, no una nueva puntuación Lighthouse ni una reproducción de sus ahorros estimados. Las imágenes compartidas reutilizan la misma URL local. Se compararon visualmente los candidatos con los originales, sin diferencias perceptibles en la revisión.

La imagen principal conserva `fetchpriority="high"` y no usa lazy loading. Las secundarias conservan carga diferida y dimensiones reservadas. El JavaScript mantiene `defer`; el CSS principal sigue bloqueando el primer render para evitar mostrar contenido sin estilos.

En la consulta de cabeceras, las imágenes de DS3 anunciaron `max-age=604800` y el CSS publicado en GitHub Pages `max-age=600`. Servir imágenes propias elimina la conexión a DS3 para renderizar la página, pero no amplía la política de caché de GitHub Pages. El JSON-LD permanece intacto y referencia las imágenes oficiales.
