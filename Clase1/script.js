

//let edad = parseInt(prompt("Ingrese su edad"));
//valor ingresado NO ES UN NUMERO
// if(isNaN(edad)){
//     console.log("El valor ingresado debe ser un numero");
// }
// else{
//     if(edad>18){
//     console.log("Es mayor de edad");
//     }else{
//     console.log("Es menor de edad");
//     }
// }
// FOR IN
let persona = {
    nombre: "Julia",
    edad: 34,
    profesion: "Programadora"
}

for(let caracteristica in persona){
console.log(persona[caracteristica]);
}
