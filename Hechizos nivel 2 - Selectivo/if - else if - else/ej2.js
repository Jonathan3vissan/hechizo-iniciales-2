const leer = require("prompt-sync")();

/**
 * Ej 2 
 * Elección de Casa en Hogwarts:
 * Solicita al estudiante su puntuación en un examen y determina a qué casa de Hogwarts pertenecería.
 * Gryffindor - a partir de 90 puntos
 * Hufflepuff - a partir de 70 puntos
 * Ravenclaw - a partir de 50 puntos
 * Slytherin - menos de 50 puntos
 * 
 * Por ejemplo si el estudiante saco 100 puntos entonces pertenece a Gryffindor o 
 * si sacara 30 entonces pertenece a Slytherin
 */
const VALOR_NUM_DEF = 0;
const LEYENDA_MAESTRO = "muy buena alumnado, hoy determinaremos su asignacion a alguna de las casas de Hogwart, dependiendo de su puntuacion del examen se le asignara un casa u otra por favor ingrese su puntuacion del examnes";
const CASAS_1 = "se le asigna la casa de SLYTHERIN exitos";
const CASAS_2 = "se le asigna la casa de RAVENCLAW exitos";
const CASAS_3 = "se le asigna la casa de HUFFLEPUFF exitos";
const CASAS_4 = "se le asigna la casa de Gryffindor exitos";

function main() {
    let puntuacion_examen = VALOR_NUM_DEF;

    console.log(LEYENDA_MAESTRO);
    puntuacion_examen = Number(leer());

    if (puntuacion_examen < 50) {
        console.log(CASAS_1);

    } else if ((puntuacion_examen >= 50) && (puntuacion_examen < 70)) {
        console.log(CASAS_2);
    } else if ((puntuacion_examen >= 70) && (puntuacion_examen < 90)) {
        console.log(CASAS_3);
    } else {
        console.log(CASAS_4);
    }





}


main();