/* Acá vemos que el document nos da acceso a todo el DOM,
ese arbol que contiene todos los nodos de nuestro sitio */
console.log(document);

/* Ahora vamos a utilizar 2 metodos propios de document que
nos facilitan "pescar" elementos en el sitio:
- querySelector()
- querySelectorAll() */

/* Obtenemos el titulo principal.
Vayamos a la consola y despleguemos la flecha que
nos muestra todas las propiedades del nodo */
const titulo = document.querySelector("h1");
console.log(titulo);

// Nos traemos ahora un listado de nodos
const itemsMenu = document.querySelectorAll("li");
console.log(itemsMenu);

// Hacemos un selector más específico
const infoExtra = document.querySelector(".info .clima");
console.log(infoExtra);

/* ------------------------------- Practicando ------------------------------ */

/* Seleccionamos la lista de noticias y revisamos su informacion interna.
Aprovechamos que la NodeList es un ITERABLE, entonces podemos recorrerla.
🚩 NO es un Array. */
const articulos = document.querySelectorAll("article");

for (let i = 0; i < articulos.length; i++) {
  console.log(articulos[i]);
}

/* Ahora hacemos la misma practica pero con ForEach, y accedemos a
propiedades de los nodos. */
articulos.forEach((articulo) => {
  const titulo = articulo.querySelector("h2").innerText;
  console.log(titulo);
  /*💡si quisieramos,acá podemos mutar los nodos, o cambiar algunas
  de sus propiedades */
});

/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1 - Escribir un selector para cada elemento del sitio.
const head = document.querySelector("head");
console.log(head);

const meta = document.querySelectorAll("meta");
for (let i = 0; i < meta0.length; i++) {
  console.log(meta[i]);
}

const titulo1 = document.querySelector("title");
console.log(titulo1);

const link1 = document.querySelector("link");
console.log(link1);

const bodyy = document.querySelector("body");
console.log(bodyy);

const encabezado = document.querySelector("header");
console.log(encabezado);

const titular = document.querySelector("h1");
console.log(titular);

const titular3 = document.querySelector('h1').innerText;
console.log(titular3);

const nav2 = document.querySelector("nav");
console.log(nav2);

const items = document.querySelector("ul");
console.log(items);

const cadaItems = document.querySelectorAll("nav ul li");
console.log(cadaItems);

const divTema = document.querySelector(".tema");
console.log(divTema);

const divTema3 = document.getElementsByClassName("tema");
console.log(divTema3);

const boton = document.querySelector("button");
console.log(boton);

const info1 = document.querySelector(".info");
console.log(info1);

const clima1 = document.querySelector(".clima");
console.log(clima1);

const dolar1 = document.querySelector(".dolar");
console.log(dolar1);

const main1 = document.querySelector("main");
console.log(main1);

const noticias1 = document.querySelector(".noticias");
console.log(noticias1);

const articulos5 = document.querySelectorAll("article");
articulos5.forEach((articulo) => {
 const titulo = articulo.querySelector("h2").innerText;
 console.log(titulo);
});

articulos5.forEach((articulo) => {
  const titulo = articulo.querySelector("img").innerText;
  console.log(titulo);
 });

 articulos5.forEach((articulo) => {
  const titulo = articulo.querySelector("p").innerText;
  console.log(titulo);
 });

// 2 - Plasmarlo en un diagrama de árbol como la consigna:
// https://docs.google.com/document/d/15nGvKkEcbrRgwqV50ISh0QYZ_TO67vmWQaLfNpUxqjs/preview
