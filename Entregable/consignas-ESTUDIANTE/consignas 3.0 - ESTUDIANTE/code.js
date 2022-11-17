/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
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
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
 
    datosPersona.nombre = prompt("Ingrese su nombre por favor (no menos de 3 caracteres): ").toLowerCase();
    let anioNacimiento
    do{anioNacimiento = parseInt(prompt("Ingrese su anio de nacimiento (solo Numeros): "))}
    while(anioNacimiento == "" || isNaN(anioNacimiento))

    datosPersona.edad = 2022 - anioNacimiento;
    datosPersona.ciudad = prompt("Ingrese su ciudad: ").toLowerCase();
    datosPersona.interesPorJs = prompt("Le interesa JavaScript - si o no: ").toLowerCase();
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */

    let nombre = document.querySelector("#nombre");
    let edad = document.querySelector("#edad");
    let ciudad = document.querySelector("#ciudad");
    let interesPorJs = document.querySelector("#javascript")

   nombre.innerHTML = datosPersona.nombre;
   edad.innerHTML = datosPersona.edad;
   ciudad.innerHTML = datosPersona.ciudad;
   interesPorJs.innerHTML = datosPersona.interesPorJs;
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  
  let fila = document.getElementById('fila');

    listado.forEach((tarjeta) => {
      let plantilla = `<div class="caja">
      <img src= ${tarjeta.imgUrl} alt= ${tarjeta.lenguajes}> 
      <p class="lenguaje"> ${tarjeta.lenguajes}</p>
      <p class="bimestre"> ${tarjeta.bimestre}</p>
      </div>`
      
      fila.innerHTML+=plantilla;
    })
  materiasBtn.disabled=true;
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  if (sitio.classList.contains("dark")) {
    sitio.classList.remove("dark")
  } else {
    sitio.classList.add("dark")
  }
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
document.addEventListener("keydown", function(e) {
  if(e.key=="f"){
    let sobreMi = document.getElementById("sobre-mi");
    sobreMi.classList.remove("oculto");
 
  }
})
