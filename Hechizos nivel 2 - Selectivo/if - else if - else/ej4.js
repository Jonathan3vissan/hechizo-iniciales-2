const leer = require("prompt-sync")();

/**
 * Ej 4 
 * Verificación de Varita Mágica:
 * Pide al usuario el nivel de lealtad y astucia de una varita mágica y verifica si es adecuada para su uso.
 * A partir de 70 nivel de lealtad o 80 en astucia la varita es apta
 * 
 * Por ejemplo si la astucia es 90 y la lealtad es 40 entonces la varita es apta, en otro caso si la astucia es 30 y 
 * la lealtad es 60 la varita no es apta
 */
const VALOR_NUM_DEF = 0;
const INGRESE_NIVEL_VARITA = "ingrese el nivel de lealtad de su varita magica ";
const INGRESE_NIVEL_LEALTAD = "por favor ingrese el nivel de astucias de su varita magica ";
const APTA = "esta varita magica es apta";
const NO_APTA = "esta varita magica no es apta";

function main() {
    let lealtad = VALOR_NUM_DEF;
    let astucia = VALOR_NUM_DEF;

    console.log(INGRESE_NIVEL_VARITA);
    lealtad = Number(leer());
    console.log(INGRESE_NIVEL_LEALTAD);
    astucia = Number(leer());

    if ((lealtad >= 70) || (astucia >= 80)) {
        console.log(APTA);
    } else {
        console.log(NO_APTA);
    }
}


main();