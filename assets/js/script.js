let piedra = "piedra";
let papel = "papel";
let tijeras = "tijeras";

let Empate = 0;
let Gana = 1;
let Pierde = 2;

let juegosCant = (document.querySelector("#cantJuegos").value) * 1;
let pendientes = document.querySelector("#pendientes");
let piedraBtn = document.querySelector("#piedra");
let papelBtn = document.querySelector("#papel");
let tijerasBtn = document.querySelector("#tijeras");
let resultado = document.querySelector("#resultado");
let jugImg = document.querySelector("#jugador");
let maqImg = document.querySelector("#maquina");

if (juegosCant > 5) {
    pendientes.innerHTML = "Solo Hasta 5 juegos"
} else {
         piedraBtn.addEventListener("click", () => {
            juegosCant--;
            imprimir();
        })
        papelBtn.addEventListener("click", () => {
            jugar(papel);
            juegosCant--;
            imprimir();
        })
        tijerasBtn.addEventListener("click", () => {
            jugar(tijeras);
            juegosCant--;
            imprimir();
        })
  
}

function imprimir() {
    pendientes.innerHTML = `Quedan ${juegosCant} juegos pendientes`
}

function jugar(opcJugador) {
    let resultadoJuego = juegoResultado(opcJugador, maquinaOp());
    switch (resultadoJuego) {
        case Empate:
            resultado.innerHTML = "Empate! 🤜🤛";
            break;
        case Gana:
            resultado.innerHTML = "Ganaste! 👍";
            break;
        case Pierde:
            resultado.innerHTML = "Pierdes 🤬";
            break;
    }
}

function maquinaOp() {
    let opcmaq = Math.floor(Math.random() * 3);
    switch (opcmaq) {
        case 0:
            return piedra;
        case 1:
            return papel;
        case 2:
            return tijeras;
    }
}

function juegoResultado(opcJugador, maquinaOp) {
    if (opcJugador === maquinaOp) {
        return Empate;

    } else if (opcJugador === piedra) {

        if (maquinaOp === papel) return Pierde;
        if (maquinaOp === tijeras) return Gana;

    } else if (opcJugador === papel) {

        if (maquinaOp === tijeras) return Pierde;
        if (maquinaOp === piedra) return Gana;

    } else if (opcJugador === tijeras) {

        if (maquinaOp === piedra) return Pierde;
        if (maquinaOp === papel) return Gana;

    }
}