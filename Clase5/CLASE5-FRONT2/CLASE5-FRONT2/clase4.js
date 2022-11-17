// console.log(document);

// const titulo = document.querySelector("h1");
// console.log(titulo);

// const itemsMenu = document.querySelectorAll("li");
// console.log(itemsMenu);

// const infoExtra = document.querySelector(".info .clima");
// console.log(infoExtra);

// const test = document.querySelector("nav ul li");
// console.log(test);

// const articulos = document.querySelectorAll("article");

// for (let i = 0; i < articulos.length; i++) {
//   console.log(articulos[i]);
// }

// articulos.forEach((articulo) => {
//   const titulo = articulo.querySelector("h2").innerText;
//   console.log(titulo);
// });

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1 - Escribir un selector para cada elemento del sitio.
// 2 - Plasmarlo en un diagrama de árbol como la consigna:
// https://docs.google.com/document/d/15nGvKkEcbrRgwqV50ISh0QYZ_TO67vmWQaLfNpUxqjs/preview

// CLASE 5

// const sitio = document.querySelector("body");
// const btnTema = document.querySelector(".tema button");
// const menuItems = document.querySelectorAll("nav li");
// const contenedorNoticias = document.querySelector("main");
// const articulos = document.querySelectorAll("article");
// const titulos = document.querySelectorAll("article h2");

// console.log(menuItems[0].style);

// menuItems.forEach((item) => {
//     item.style.textTransform = "uppercase";
//     item.style.color = "aqua";
//     item.style.backgroundColor = "white";
//     item.style.borderRadius = "50vh";
// }
// );
// //pone clase dark
// console.log(sitio.classList.add("dark"));
// console.log(sitio.classList);
// console.log(sitio.classList.contains("dark"));
// // elimina clase dark
// console.log(sitio.classList.remove("dark"));
// console.log(sitio.classList);
// console.log(sitio.classList.contains("dark"));
// // evalua si tiene la clase
// console.log(sitio.classList.toggle("dark"));
// console.log(sitio.classList);
// console.log(sitio.classList.contains("dark"));
// 🚩 Antes de empezar, vinculemos el HTML solo con el script de clase 5.

// Vamos a interactuar con el DOM para agregarle mas estilos a nuestro sitio.
// 👇 Primero capturemos todos los elementos que vamos a modificar.

const sitio = document.querySelector('body');
const btnTema = document.querySelector('.tema button')
const menuItems =  document.querySelectorAll('nav li');
const contenedorNoticias = document.querySelector('main');
const articulos = document.querySelectorAll('article');
const titulos = document.querySelectorAll('article h2');

/* ---------------------------- Editado los ITEMS --------------------------- */
// 👇acá podemos ver todas las propiedades CSS que podemos modificar con JS
console.log(menuItems[0].style)
// agregamos manualmente nuevos estilos en el menú
menuItems.forEach( item => {
    item.style.textTransform = "uppercase";
    item.style.color = "aqua";
    item.style.backgroundColor = "rgba(255,255,255,0.2";
    item.style.borderRadius = "50vh";
})

console.log(contenedorNoticias)

/* ----------------------------- Editando clases ---------------------------- */

// vamos probando uno a uno los métodos
console.log(sitio.classList)

console.log(sitio.classList.contains('dark'))
console.log(sitio.classList)

console.log(sitio.classList.add('dark'))
console.log(sitio.classList)

console.log(sitio.classList.add('remove'))
console.log(sitio.classList)

console.log(sitio.classList.toggle('remove'))
console.log(sitio.classList)


/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// Primero debemos comentar o eliminar las líneas que modifican las clases de "sitio"
// 1- Desarrollar la función a continuacion para que el usuario elija el tema del sitio.
// 2- Debemos preguntarle al usuario mediante un confirm si desea usar el modo oscuro.
// 3- Si el usuario confirma debemos aplicar la clase "dark" al "sitio", si cancela debe quedar en modo claro.
// 4- A su vez, si está en modo onsecuritypolicyviolation, el texto del boton debe decir "Cambiar a modo claro 🌞". 
//De lo contrario, si está en modo claro debeb decir "Cambiar a modo oscuro 🌛"

function elegirTema() {
  //dark theme toggle
  if (sitio.classList.contains("dark")) {
    sitio.classList.remove("dark")
    btnTema.textContent = "Cambiar a modo oscuro 🌛"
  } else {
    sitio.classList.add("dark")
    btnTema.textContent = "Cambiar a modo claro 🌞"
  }
}
elegirTema()

