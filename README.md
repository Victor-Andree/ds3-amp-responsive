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

Abrir `index.html` muestra la plantilla Cisco conservada, no la nueva ficha AMP. Las imágenes, documentación y enlaces comerciales de DS3 necesitan conexión a Internet.

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
└── index.html           # Entrada original Cisco, conservada
```

Las imágenes AMP se enlazan mediante HTTPS a los recursos publicados por DS3; no se incluyen copias locales ni imágenes genéricas. Algunas fichas oficiales comparten una fotografía de caja, que se identifica como referencial. La resolución de ciertas fotografías está limitada por el recurso original.

## Preparación para GitHub Pages

El proyecto es estático y no necesita instalación de dependencias ni un paso de build. La ficha debe publicarse junto con sus carpetas `css/` y `js/`, manteniendo nombres y mayúsculas.

- La entrada de la ficha es `6-1427200-4.html` dentro del subdirectorio del repositorio.
- Sus recursos locales usan rutas relativas: `css/amp-product.css` y `js/amp-product.js`.
- Los fragmentos internos apuntan a identificadores de la misma página.
- Las imágenes y el PDF usan direcciones HTTPS oficiales independientes del subdirectorio.
- Se conserva `index.html`; visitar la raíz del sitio seguirá mostrando Cisco.
- No se establece una URL canónica hasta confirmar la dirección oficial de producción.

La configuración de publicación en GitHub Pages, así como cualquier commit o push, queda pendiente de autorización. Este README no implica que el sitio esté publicado.

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

Este trabajo parte del [repositorio Cisco original de DS3 Perú](https://github.com/ds3peru/cisco) y de su [plantilla de producto Cisco](https://ds3peru.github.io/cisco/C9200L-24P-4G-E.html). Los archivos originales se mantienen intactos; el rediseño AMP utiliza archivos independientes.

La información comercial, los contenidos de producto, las marcas, las fotografías y el PDF proceden de DS3 Comunicaciones y sus respectivas fuentes. No se atribuye autoría propia sobre esos recursos ni se concede una licencia adicional sobre ellos.

Productos relacionados contrastados individualmente con el catálogo y sus fichas:

- [1859345-2 — Cat 6, LSZH](https://www.ds3comunicaciones.com/AMP/1859345-2.html)
- [1427254-4 — Cat 6, CM](https://www.ds3comunicaciones.com/AMP/1427254-4.html)
- [1859218-2 — Cat 6A, LSZH](https://www.ds3comunicaciones.com/AMP/1859218-2.html)
- [1859381-2 — Cat 6A, LSZH](https://www.ds3comunicaciones.com/AMP/1859381-2.html)

Algunos encabezados de las fichas originales contienen códigos inconsistentes. Los modelos incorporados se contrastaron con el catálogo; para `1859381-2`, también con la tabla de su ficha. Las fotografías oficiales se mantienen identificadas como referenciales.
