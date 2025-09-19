### Explicación de las etapas en una peticion web

1. **Solicitud del usuario**: el usuario escribe una URL o hace clic en un enlace → el navegador empieza la petición.  
2. **Petición HTTP**: el navegador envía una petición al servidor, puede ser GET, POST, etc.  
3. **Procesamiento en el servidor**: el servidor recibe, busca archivos, ejecuta lógica si hay backend, etc.  
4. **Respuesta HTTP**: servidor envía los datos de vuelta (HTML, JSON, imágenes, etc.).  
5. **Renderizado por el cliente**: navegador interpreta el HTML, aplica CSS, ejecuta JS, muestra contenido.  
6. **Interacción y nuevas peticiones**: el usuario puede interactuar generando peticiones adicionales.
7. **diagrama**
Usuario solicita URL
│
▼
Cliente (navegador) envía petición HTTP
│
▼
Servidor web recibe petición
│
▼
Servidor procesa la petición:
• Busca recurso (archivo, script, etc.)
• Puede ejecutar backend / lógica (si aplica)
• Genera respuesta HTTP
│
▼
Servidor envía respuesta HTTP al cliente
│
▼
Cliente recibe respuesta:
• Interpreta cabeceras
• Si es HTML → lo renderiza
• Carga CSS, JS, imágenes referenciadas
• Ejecuta JavaScript
│
▼
Interacción del usuario con la página renderizada
│
▼
(nueva solicitud si sigue navegando / clicando enlaces / enviando formularios)
   
### PrimerPrevioWeb

Este es un proyecto de ejemplo: **TechBlog**, un sitio web académico básico de tecnología.  

## Descripción

El repositorio incluye varias páginas HTML, CSS y JavaScript para practicar:

- `inicio.html`, `Articulos.html`, `Recursos.html`, `Contacto.html`, `Acerca.html`  
- Estilos en `css/styles.css`  
- Comportamientos dinámicos en `js/app.js`  

Los objetivos principales:

- Aprender a estructurar un sitio web con múltiples páginas.  
- Usar selectores CSS diversos (tipo, clase, ID, descendiente, grupo).  
- Implementar herencia, cascada y especificidad en los estilos.  
- Hacer landing pages con imágenes, galería, medio de audio/video, etc.  
- Añadir interactividad con JavaScript: saludo dinámico, contador de visitas, cambiar estilos, notas dinámicas.

Funcionalidades

-Banner fijo superior con navegación flexbox.
-Galerías responsivas (grid) con media queries.
-Formularios con validación, campos obligatorios.
-Contador de visitas, saludo dinámico según hora, cambiar colores de textos, notas dinámicas.
-Tablas con estilo (bordes colapsados, filas alternadas).
