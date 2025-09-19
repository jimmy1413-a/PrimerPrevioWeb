// Nombre de la aplicación
const app_name = "TechBlog";

// Contador de visitas
let visitas = 0;

// --- Función de bienvenida ---
function bienvenida(nombre) {
  return `Bienvenido, ${nombre}, a ${app_name}`;
}

// Mostrar en consola al cargar
console.log(bienvenida("Jimmy"));
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
  // Aquí combino saludo + bienvenida personalizada
  saludoElemento.textContent = `${mensaje} - ${bienvenida("Jimmy")}`;
}

// --- Botón de visitas ---
const contadorElemento = document.getElementById("contador");
const btnVisitas = document.getElementById("btnvisitas");

if (btnVisitas && contadorElemento) {
  btnVisitas.addEventListener("click", () => {
    visitas++;
    contadorElemento.textContent = `Visitas: ${visitas}`;
  });
}

// --- Botones de color ---
const texto = document.getElementById("texto");
const btnRojo = document.getElementById("btnRojo");
const btnVerde = document.getElementById("btnVerde");
const btnAzul = document.getElementById("btnAzul");

if (texto) {
  if (btnRojo) {
    btnRojo.addEventListener("click", () => {
      texto.style.color = "red";
    });
  }
  if (btnVerde) {
    btnVerde.addEventListener("click", () => {
      texto.style.color = "green";
    });
  }
  if (btnAzul) {
    btnAzul.addEventListener("click", () => {
      texto.style.color = "blue";
    });
  }
}

// === Notas dinámicas (lo que pediste) ===
  const inputNota = document.getElementById("nuevaNota");
  const btnAgregarNota = document.getElementById("agregarNota");
  const listaNotas = document.getElementById("listaNotas");

  if (btnAgregarNota && inputNota && listaNotas) {
    // Agregar por click
    btnAgregarNota.addEventListener("click", () => {
      const texto = inputNota.value.trim();
      if (texto === "") {
        // evita agregar notas vacías
        alert("⚠️ No puedes agregar una nota vacía.");
        inputNota.focus();
        return;
      }

      const nuevaLi = document.createElement("li");
      nuevaLi.textContent = texto;

      // inserta al inicio de la lista
      listaNotas.insertBefore(nuevaLi, listaNotas.firstChild);

      // limpiar y volver a enfocar
      inputNota.value = "";
      inputNota.focus();
    });

    // También permitir Enter para agregar
    inputNota.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault(); // evitar envío de formularios implícitos
        btnAgregarNota.click();
      }
    });
  }
