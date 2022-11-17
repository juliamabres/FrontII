/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};
const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];
const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");
profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */
function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  do {
    nombre = prompt("Ingresa tu nombre por favor: ").trim();
  } while (!(isNaN(nombre)) || (nombre.length < 3));
  datosPersona.nombre = nombre;
  let anioNacimiento = 0;
  do {
    anioNacimiento = parseInt(prompt("Ingresa ahora tu año de nacimiento: "));
    console.log(anioNacimiento);
  } while (
    isNaN(anioNacimiento) ||
    anioNacimiento < 1900 ||
    anioNacimiento > new Date().getFullYear()
  );
  datosPersona.edad = new Date().getFullYear() - anioNacimiento;
  do {
    ciudad = prompt("En que ciudad naciste:  ").trim();
  } while (!(isNaN(ciudad)) || (ciudad.length < 3));
  datosPersona.ciudad = ciudad;
  datosPersona.interesPorJs = confirm("Te interesa JavaScript ?");
}
function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.getElementById("nombre").innerText += datosPersona.nombre;
  document.getElementById("edad").innerText += datosPersona.edad;
  document.getElementById("ciudad").innerText += datosPersona.ciudad;
  document.getElementById("javascript").innerText += datosPersona.interesPorJs
    ? "Si"
    : "No";
}
function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  listado.forEach((materia) => {
    document.getElementById("fila").innerHTML += `
    <div class='caja'>
      <img
        src= ${materia.imgUrl}     
          />
      <p class='lenguajes'>
        Lenguajes: ${materia.lenguajes}
      </p>
      <p class='bimestre'>
        Bimestre: ${materia.bimestre}
      </p>      
    </div>
    `;
  });
  const listaImagenesTarjetas = document.querySelectorAll(
    "section div div img"
  );
  for (let i = 0; i < listaImagenesTarjetas.length; i++) {
    listaImagenesTarjetas[i].alt = listado[i].lenguajes;
  }
  const listaTarjetas = document.querySelectorAll("#fila div");
  listaTarjetas.forEach((tarjeta) => {
    tarjeta.style.pointerEvents = "none";
  });
  materiasBtn.removeEventListener("click", recorrerListadoYRenderizarTarjetas);
}
function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let sitiazo = document.getElementById("sitio");
  sitiazo.classList.toggle("dark");
}
/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
document.addEventListener("keydown", function (e) {
  if (e.key == "f") {
    const cuadroPersonal = document.querySelector("#sobre-mi");
    cuadroPersonal.classList.remove("oculto");
  }
});
