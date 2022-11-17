/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */
function iniciarJuego() {
  alert("Bienvenido al piedra, papel o tijera de Front 2 😎");

  let nombre;

  do {
    nombre = prompt("Ingrese su nombre por favor (no menos de 3 caracteres): ");
    console.log("Se intenta registrar: " + nombre);
  } while (nombre == null || nombre == undefined || nombre.length <= 3);

  alert("Gracias por jugar " + nombre.toUpperCase() + ". Mucha suerte!");

  return nombre.toUpperCase();
}

const nombreJugador = iniciarJuego();
console.log("Se registro: " + nombreJugador);

/* -------------------------------------------------------------------------- */
/*                                  FUNCION 2                                 */
/* -------------------------------------------------------------------------- */
function pedirJugada() {
  let eleccion = 0;

  do {
    eleccion = parseInt(
      prompt("Ingrese para jugar: 1(piedra), 2(papel), 3(tijera)")
    );
  } while (isNaN(eleccion) || eleccion < 1 || eleccion > 3);

  console.log("La eleccion del jugador es: " + eleccion);

  return eleccion;
}
/* -------------------------------------------------------------------------- */
/*                                  FUNCION 3                                 */
/* -------------------------------------------------------------------------- */
function jugadaRandom() {
  let numero = parseInt(Math.random() * 3 + 1);

  console.log("La eleccion de la computadora es: " + numero);
}
/* -------------------------------------------------------------------------- */
/*                                  FUNCION 4                                 */
/* -------------------------------------------------------------------------- */
function compararJugadas() {
  const resultadosPosibles = [
    "Genial! Ganaste! 😁",
    "Esto fue un empate 😒",
    "Que lastima, perdiste 😥",
  ];
  const quienGano =0;

  const eleccionJugador = pedirJugada();
  const eleccionComputadora = jugadaRandom();

  let resultadoRonda = 0;

  if (eleccionJugador == eleccionComputadora) {
    resultadoRonda = 1;
  } else if (
    (eleccionJugador == 1 && eleccionComputadora == 2) ||
    (eleccionJugador == 2 && eleccionComputadora == 3) ||
    (eleccionJugador == 3 && eleccionComputadora == 1)
  ) {
    resultadoRonda = 2;
  }
  alert("El resultado de la ronda es: "+resultadoRonda);
  console.log("El resultado la partida es: "+resultadoRonda)
  return resultadoRonda;
}

const resultadoDePartida = compararJugadas();
console.log(resultadoDePartida);
/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
const partida = mensajeGanador => {
  let rondas = 3;
  let victoriaPlayer = 0;
  let victoriaCompu = 0;
  for ( let i=0; i<rondas ; i++){
    compararJugadas()
    if(compararJugadas() ===0){
      victoriaPlayer++;
    }else if (compararJugadas() === 2){
      victoriaCompu++;
    }

  }

  if (victoriaPlayer>victoriaCompu){
    
  }





  console.log(mensajeGanador+" Jugador "+jugador)
}

// 1- Crear una función que reciba como parametro un texto (la frase de resultado de la partida).
// mandar un String de felicitacion
// 2- La función debe mostrar por consola el resultado de la partida.
// 3- A su vez debe mostrar al usuario una alerta con el resutado de la partida.
// aca !!

// 4- Finalmente, si el resultado fue una derrota debe mostrarle al usuario un mensaje de aliento para desearle suerte en la próxima oportunidad.
