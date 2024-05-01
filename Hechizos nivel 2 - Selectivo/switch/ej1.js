const leer = require("prompt-sync")();

/**
 * Ej 1
 * Clasificación de Pociones:
 * Solicita al estudiante el nombre de una poción y muestra su nivel de dificultad de acuerdo a su complejidad.
 * 
 * Pociones conocidas: 
 * Felix Felicis - es extremadamente compleja y peligrosa.
 * Polvo de Flu - es compleja pero útil en la red de transportación.
 * Poción Multijugos - es complicada pero muy útil para transformaciones temporales.
 * Cualquier otro tipo de pocion indicar que: No tenemos información sobre esa poción en nuestros registros.
 * 
 */
const VALOR_DEF_STRING = "DEF";
const POCION_1="FELIX FELICIS";
const POCION_2="POLVO DE FLU";
const POCION_3="POCION MULTIJUGO";
const LEYENDA_1="esta pocion es extremadamente compleja y peligrosa";
const LEYENDA_2="esta pocion es compleja pero util en la red de transportacion";
const LEYENDA_3="esta pocion es complicada pero muy util para la transformaciones temporales";
const LEYENDA_4="no tenemos informacion sobre esta pocion en nuestro registros";
function main() {
    let nombre_pocion = VALOR_DEF_STRING;

    console.log("dime cual es el nombre de la pocion");
    nombre_pocion = leer();
    if (nombre_pocion == POCION_1) {
        console.log(LEYENDA_1);
    } else if (nombre_pocion == POCION_2) {
        console.log(LEYENDA_2);
    } else if (nombre_pocion == POCION_3) {

        console.log(LEYENDA_3);
    } else {
        console.log(LEYENDA_4);
    }

}





main();