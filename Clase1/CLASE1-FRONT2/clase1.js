/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */
function iniciarJuego() {
  alert("Bienvenido al piedra, papel o tijera de Front 2 😎");

  let nombre = prompt("Ingrese su nombre por favor: ");
  
  while((( typeof nombre !== 'string'  ) || ( nombre.length < 3 ))) {
    alert("El nombre no es un String o tiene menos de 3 caracteres");
    nombre = prompt("Ingrese su nombre nuevamente por favor: ");
  }
  nombre = nombre.toUpperCase();
  alert("Gracias por jugar " + nombre + ". Mucha suerte!");
  console.log("El jugador es: " + nombre);
  return nombre;
}

const nombreJugador = iniciarJuego();


/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
// 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
// 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.

// PIEDRA PAPEL O TIJERA
// Reglas
// Debemos consultar el nombre del jugador.
// El rival será la computadora y su jugada será random.
// Son 3 las opciones a legir.
// Debemos establecer las condiciones de cuál elemento le gana a cuál.
// La partida será al mejor de 3 jugadores.
// Finalmente debemos mostrar los resultados de la partida.

//FUNCION 2 - JUEGO JUGADOR
function pedirJugada() {
  let eleccion = 0;
  do{
    eleccion = parseInt(prompt("Ingrese para jugar: 1(piedra), 2 (papel), 3(tijera)"))
  }
  while(isNaN(eleccion) || eleccion <1 || eleccion>3);
console.log("La eleccion del jugador es: " + eleccion);
return eleccion;
}
//FUNCION 3 - JUEGO COMPU
function jugadaRandom() {
  //si o si esto da 1, 2 o 3
  let numero = parseInt(Math.random*3+1);
   console.log("La eleccion de la computadora es: "+numero);
}
//FUNCION 4 - COMPARAR JUGADAS
function compararJugada(){
  const resultadosPosibles = ["Genial Ganaste!😁", "Esto fue un empate 😒", "Que lastima, perdiste 😪" ];
  const eleccionJugador = pedirJugada();
  const eleccionComputadora = jugadaRandom();
  let resultadoRonda = resiltadosPosibles[0];

  if(eleccionJugador == eleccionComputadora){
    resultadoRonda = resultadosPosibles[1];
  }else if(

  ){
    resultadoRonda = resultadosPosibles[2];
  }
  return resultadoRonda;
}
const resultadoDePartida = compararJugada();
console.log(resultadoDePartida);



