let i = 0;
const number = document.getElementById("number");

let contador = setInterval(function () {
  number.innerHTML = i++;
}, 1000);

function pararContador() {
  clearInterval(contador);
}
