// Nombre de la aplicación
const app_name = "TechBlog";

// Contador de visitas
let visitas = 0;

// Mostrar en consola al cargar
console.log(`Bienvenido a ${app_name}`);
console.log(`Visitas actuales: ${visitas}`);

// --- Saludo dinámico ---
const saludoElemento = document.getElementById("saludo");

// Obtenemos la hora actual
const hora = new Date().getHours();
let mensaje = "";

// Definir mensaje según la hora
if (hora >= 6 && hora < 12) {
  mensaje = "¡Buenos días!";
} else if (hora >= 12 && hora < 19) {
  mensaje = "¡Buenas tardes!";
} else {
  mensaje = "¡Buenas noches!";
}

// Insertar el mensaje en la página
if (saludoElemento) {
  saludoElemento.textContent = mensaje;
}