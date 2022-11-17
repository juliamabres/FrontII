console.log(document);

const titulo = document.querySelector("h1");
console.log(titulo);

const itemsMenu = document.querySelectorAll("li");
console.log(itemsMenu);

const infoExtra = document.querySelector(".info .clima");
console.log(infoExtra);

const infoExtra2 = document.querySelector("nav ul li");
console.log(infoExtra2);

const articulos = document.querySelectorAll("article");

articulos.forEach((articulo) => {
 const titulo = articulo.querySelector("h2").innerText;
 console.log(titulo);
});

for(let i = 0; i<articulos.length; i++){
  console.log(articulos[i]);
}

