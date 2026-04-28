# Sitio Web de Turismo UNJu

## Descripción
Este proyecto es un sitio web responsivo para una agencia de turismo, desarrollado con HTML5, Bootstrap 5, jQuery y buenas prácticas de desarrollo web. Incluye todas las funcionalidades requeridas: navegación responsive, animaciones, formularios con validación, y un módulo educativo sobre phishing.

## Tecnologías Utilizadas
- **HTML5**: Estructura semántica
- **CSS3**: Estilos personalizados y responsivos
- **Bootstrap 5**: Framework CSS para responsividad y componentes
- **jQuery**: Interacciones y animaciones
- **Font Awesome**: Iconos
- **CSS Sprite**: Imagen sprite para iconos sociales

## Estructura del Proyecto
```
/
├── index.html              # Página principal (Home)
├── Pages/
│   ├── destinos.html       # Página de destinos
│   ├── agencias.html       # Página de agencias
│   ├── contacto.html       # Página de contacto
│   ├── precios.html        # Página de precios
│   └── blog.html           # Blog de destinos
├── Css/
│   ├── styles.css          # Estilos personalizados
│   └── bootstrap-5.3.8-dist/  # Bootstrap
├── scripts/
│   └── main.js             # JavaScript con jQuery
├── Img/                    # Imágenes
├── video/                  # Videos
└── README.md               # Este archivo
```

## Funcionalidades Implementadas

### Home (index.html)
- **Navbar responsive** con Bootstrap y mega menú dropdown
- **Hero** con video, texto animado con jQuery
- **Cards de destinos** con hover effects
- **Contador animado** con jQuery
- **Carousel de testimonios** (usando Bootstrap carousel en futuras versiones)
- **Footer** con formulario de newsletter, redes sociales y mapa embebido

### Destinos (destinos.html)
- **Filtros dinámicos** con jQuery (.filter(), .hide(), .show())
- **Grid responsive** (1, 2 o 3 columnas según pantalla)
- **Cards con zoom** usando CSS + jQuery
- **Tabla responsive** con Bootstrap table-responsive

### Agencias (agencias.html)
- **Cards con efecto flip** (CSS + jQuery toggle)
- **Sistema de rating** con estrellas interactivas (jQuery)

### Contacto (contacto.html)
- **Formulario con validación en tiempo real** (.on('input'), .val())
- **Spinner de carga** (Bootstrap spinner-border)
- **Modal de confirmación** (Bootstrap modal)
- **Diseño responsive** (Flexbox + Grid de Bootstrap)

### Precios (precios.html)
- **Tabla comparativa** con Bootstrap table
- **Hover dinámico** en cards
- **Tooltips** (Bootstrap + jQuery)

### Blog (blog.html)
- **Layout tipo revista** con Bootstrap grid
- **Filtro por categorías** (jQuery)
- **Comentarios simulados**
- **Animaciones al scroll** (jQuery)

### Módulo Educativo: Phishing
- **Botón "Simulación de phishing"** en navbar
- **Modal Bootstrap** con:
  - Advertencia clara
  - Ejemplos educativos
  - Señales de fraude
- **Interacción** con jQuery para identificar errores y feedback

## Iconos
- **Font Awesome** usado en navbar, botones y cards
- **CSS Sprite** implementado para redes sociales en footer (sprite.png en Img/ - requiere creación manual)

## Validación de Inputs
- **HTML5**: required, pattern
- **jQuery**: validación en tiempo real con clases is-valid/is-invalid
- **Sanitización**: básica con trim() y regex para email

## Seguridad Básica
- No se almacenan datos reales
- Simulación de phishing educativa
- Validación de formularios

## Cómo Ejecutar
1. Abrir `index.html` en un navegador web moderno
2. Navegar por las diferentes páginas usando el menú
3. Probar funcionalidades interactivas:
   - Cambiar tema (botón luna)
   - Filtros en destinos y blog
   - Formularios en contacto y footer
   - Rating en agencias
   - Modal de phishing

## Responsividad
El sitio está optimizado para:
- **Mobile** (< 768px)
- **Tablet** (768px - 992px)
- **Desktop** (992px - 1200px)
- **Pantallas grandes** (> 1200px)

## Notas de Desarrollo
- Todas las animaciones usan jQuery para compatibilidad
- Bootstrap se integra con estilos personalizados
- El sitio no requiere servidor backend (todo cliente-side)
- Imágenes y videos deben estar en las carpetas correspondientes
- **CSS Sprite**: Para completar, crear una imagen sprite.png en Img/ con iconos de Instagram, Facebook y TikTok (24x24px cada uno, horizontal). Las clases CSS ya están definidas.

## Créditos
Desarrollado para la práctica de Programación y Servicios Web - UNJu