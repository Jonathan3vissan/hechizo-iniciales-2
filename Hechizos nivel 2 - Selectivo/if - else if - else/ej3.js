const leer = require("prompt-sync")();

/**
 * Ej 3 
 * Examen de Herbología:
 * Pide al estudiante el nombre de la planta que encontro y determina si es apta para el examen de Herbología.
 * Si es Mandrágora o Valeriana entonces son aptas
 * Si son Bubotuber o Whomping Willow es necesario informar que no es posible debido a lo peligrosas que son
 * Cualquier otro tipo de planta no sera aceptada
 * 
 * Por ejemplo si el estudiante quiere traer un Whomping Willow no podra hacer el examen,
 *  en otro caso si trae una Valeriana se le otorgara el permiso
 */
const VALOR_DEF_STRING = "DEF";
const DECIR_NOMBRE_PLANTA = "digame el nombre de la planta que encontro alumno";
const PLANTA_1 = "Mandragora";
const PLANTA_2 = "Valeriana";
const PLANTA_3 = "Bubotuber";
const PLANTA_4 = "Whomping Willow";
const LEYENDA_1 = "estas plantas son aptas para realizar el examen";
const LEYENDA_2 = "cuidado estas plantas son peligrosas, no podras realizar el examen";
const LEYENDA_3 = "estas plantas no son aptas para el examen";


function main() {
    let nombre_planta = VALOR_DEF_STRING;

    console.log(DECIR_NOMBRE_PLANTA);
    nombre_planta = leer();

    if ((nombre_planta == PLANTA_1) || (nombre_planta == PLANTA_2)) {
        console.log(LEYENDA_1);

    } else if ((nombre_planta == PLANTA_3) || (nombre_planta == PLANTA_4)) {
        console.log(LEYENDA_2);
    } else {
        console.log(LEYENDA_3);
    }

}


main();