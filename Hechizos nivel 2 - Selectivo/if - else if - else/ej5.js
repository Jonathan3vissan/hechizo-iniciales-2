const leer = require("prompt-sync")();

/**
 * Ej 5
 * Permiso para Visitar Hogsmeade:
 * Pide al estudiante su edad y si tiene permiso de sus padres, y verifica si puede visitar el pueblo de Hogsmeade.
 * Solo a partir de los 13 años, y con permiso de los padres, o 17 años tendra permitido realizar la actividad
 * 
 * Por ejemplo si tiene 12 años y con permiso de los padres no le sera permitido, si tiene 14 y no cuenta con 
 * permiso de los padres no le sera permitido, en otro caso si tiene 18 puede realizar la actividad
 */


const VALOR_NUM_DEF = 0;
const NO_PUEDES_VISITAR = "no pode visitar Hogmeades";
const PODES_VISITAR = "podes visitar hogmeades"

function main() {
    let edad_estudiante = VALOR_NUM_DEF;
    let permiso = "def"

    console.log("por favor ingrese su edad ");
    edad_estudiante = Number(leer());
    if ((edad_estudiante >= 13) && (edad_estudiante < 17)) {
        console.log("tenes permiso, si o no");
        permiso = leer();
        if (permiso == "si") {
            console.log(PODES_VISITAR, "disfrutalo");
        } else if (permiso != "si") {
            console.log(NO_PUEDES_VISITAR);
        }


    } else if (edad_estudiante < 13) {
        console.log(NO_PUEDES_VISITAR);

    } else {
        console.log(PODES_VISITAR, "sin necesidad de autorzacion");
    }



}
main();