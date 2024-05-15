const leer = require("prompt-sync")();

const DERROTA = "En el oscuro manto de la derrota, el estudiante enfrentó una verdad devastadora: a pesar de sus esfuerzos incansables, los horrocruxes permanecen intactos, y la sombra del mal se alza triunfante sobre el mundo mágico. Aunque la batalla fue ardua y valiente, el destino ha dictado su veredicto, dejando al estudiante con el amargo sabor de la derrota. Pero incluso en la oscuridad más profunda, la llama de la esperanza aún arde, recordando que la lucha nunca termina y que el mañana siempre guarda la promesa de una nueva oportunidad para la redención y la victoria.";
const VICTORIA = "¡Victoria para el estudiante valiente que, con coraje y determinación, ha destruido todos los horrocruxes! Con cada fragmento de alma oscura eliminado, la luz de la esperanza ha brillado más brillante sobre el mundo mágico. ¡Su sacrificio y valentía han salvado a nuestra comunidad de las sombras de la oscuridad, asegurando un futuro lleno de paz y prosperidad para todas las generaciones venideras!";
const NOMBRE_HOROCRUX_1 = "Diario de Tom Riddle";
const NOMBRE_HOROCRUX_2 = "Anillo de Gaunt ";
const NOMBRE_HOROCRUX_3 = "Copa de Helga Hufflepuff";
const NOMBRE_HOROCRUX_4 = "Diadema de Rowena Ravenclaw";
const NOMBRE_HOROCRUX_5 = "Nagini (serpiente)";
const PROB_HOROCRUX_MATAR = 5;
const ADICION_PROB_POR_HOROX_ROTO = 2.4;
const HOROCRUX_ROTOS_DEF = 0;
const PROB_MUERTE_TOTAL_DEF = 0;
const PROBA_RECAHAZO_ATAQUE_DEF = 50;
const REDUC_PROB_RECHA_ATAQ = 11.875;
const VALOR_MINI_HOROX_1 = -3;
const VALOR_MAX_HOROX_1 = 21;
const VALOR_MINI_HOROX_2 = -100;
const VALOR_MAX_HOROX_2 = -69;
const VALOR_MINI_HOROX_3 = -4;
const VALOR_MAX_HOROX_3 = 13;
const VALOR_MINI_HOROX_4 = 97;
const VALOR_MAX_HOROX_4 = 102;
const VALOR_MINI_HOROX_5 = 72;
const VALOR_MAX_HOROX_5 = 76;
const HOTOCRUX_CODIGO_1 = "R1dd13";
const HOTOCRUX_CODIGO_2 = "G4unt!";
const HOTOCRUX_CODIGO_3_A = "H3l";
const HOTOCRUX_CODIGO_3_B = "ga!";
const HOTOCRUX_CODIGO_4 = "R4vena";
const HOTOCRUX_CODIGO_5 = "N@9ini";
const CODIGO_FINAL_1_DEF = "DEF";
const CODIGO_FINAL_2_DEF = "DEF";
const CODIGO_FINAL_3_DEF = "DEF";
const CODIGO_FINAL_4_DEF = "DEF";
const CODIGO_FINAL_5_DEF = "DEF";
const HOROCRUX_DESTROZADO_1_DEF = false;
const HOROCRUX_DESTROZADO_2_DEF = false;
const HOROCRUX_DESTROZADO_3_DEF = false;
const HOROCRUX_DESTROZADO_4_DEF = false;
const HOROCRUX_DESTROZADO_5_DEF = false;
const AZAR_RECHAZO_ATAQUE_DEF = 0;
const VALOR_MIN_RECHAZO_ATAQUE = 0;
const VALOR_MAX_RECHAZO_ATAQUE = 100;
const AZAR_PROB_MUERTE_DEF = 0;
const VALOR_MIN_PROB_MUERTE = 0;
const VALOR_MAX_PROB_MUERTE = 100;


function main() {
    let mago = {
        salud: 400,
        cordura: 200
    }
    let horocrux = {
        daño_salud: 10.4,
        daño_cordura: 5.7
    }
    let prob_rechazo_ataques = PROBA_RECAHAZO_ATAQUE_DEF;
    let azar_rechazo_ataque = AZAR_RECHAZO_ATAQUE_DEF;
    let prob_muerte_total = PROB_MUERTE_TOTAL_DEF;
    let azar_prob_muerte = AZAR_PROB_MUERTE_DEF;

    let codigo_final_1 = CODIGO_FINAL_1_DEF;
    let codigo_final_2 = CODIGO_FINAL_2_DEF;
    let codigo_final_3 = CODIGO_FINAL_3_DEF;
    let codigo_final_4 = CODIGO_FINAL_4_DEF;
    let codigo_final_5 = CODIGO_FINAL_5_DEF;

    let horocux_destrozado_1 = HOROCRUX_DESTROZADO_1_DEF;
    let horocux_destrozado_2 = HOROCRUX_DESTROZADO_2_DEF;
    let horocux_destrozado_3 = HOROCRUX_DESTROZADO_3_DEF;
    let horocux_destrozado_4 = HOROCRUX_DESTROZADO_4_DEF;
    let horocux_destrozado_5 = HOROCRUX_DESTROZADO_5_DEF;
    let horocrux_rotos = HOROCRUX_ROTOS_DEF;

    let nombre_horocrux = [NOMBRE_HOROCRUX_1, NOMBRE_HOROCRUX_2, NOMBRE_HOROCRUX_3, NOMBRE_HOROCRUX_4, NOMBRE_HOROCRUX_5];
    let destruccion_total_horocrux = [horocux_destrozado_1, horocux_destrozado_2, horocux_destrozado_3, horocux_destrozado_4, horocux_destrozado_5];
    let codigos_finales = [codigo_final_1, codigo_final_2, codigo_final_3, codigo_final_4, codigo_final_5];

    azar_prob_muerte = numero_aleatorio(VALOR_MIN_PROB_MUERTE, VALOR_MAX_PROB_MUERTE)
    prob_muerte_total = adicion_probabilida_de_muerte(horocrux_rotos)

    codigos_finales[0] = HOTOCRUX_CODIGO_1 + numero_aleatorio(VALOR_MINI_HOROX_1, VALOR_MAX_HOROX_1)
    codigos_finales[1] = numero_aleatorio(VALOR_MINI_HOROX_2, VALOR_MAX_HOROX_2) + HOTOCRUX_CODIGO_2
    codigos_finales[2] = HOTOCRUX_CODIGO_3_A + numero_aleatorio(VALOR_MINI_HOROX_3, VALOR_MAX_HOROX_3) + HOTOCRUX_CODIGO_3_B;
    codigos_finales[3] = letra_aleatoria(VALOR_MINI_HOROX_4, VALOR_MAX_HOROX_4) + HOTOCRUX_CODIGO_4
    codigos_finales[4] = HOTOCRUX_CODIGO_5 + letra_aleatoria(VALOR_MINI_HOROX_5, VALOR_MAX_HOROX_5)


    azar_rechazo_ataque = numero_aleatorio(VALOR_MIN_RECHAZO_ATAQUE, VALOR_MAX_RECHAZO_ATAQUE)
    prob_rechazo_ataques = PROBA_RECAHAZO_ATAQUE_DEF + (REDUC_PROB_RECHA_ATAQ * horocrux_rotos)

    console.log(codigos_finales);
    console.log(prob_muerte_total);
    console.log(azar_prob_muerte);


    console.log("rechazo", prob_rechazo_ataques);
    console.log(azar_rechazo_ataque);
console.log(codigos_finales[3]);
} main();



/**generar un numero aleatorio
 * 
 * @param {Number} minimo   para azar
 * @param {Number} maximo   para azar
 * @returns un numero aletario
 */
function numero_aleatorio(minimo, maximo) {
    let azar = Math.round(Math.random() * (minimo - maximo) + maximo)
    return (azar)
}
/**devuelve un numero que detertminad un porcentaje
 * 
 * @param {Number} cantidad_roto de horocrux 
 * @returns un porcentaje final 
 */
function adicion_probabilida_de_muerte(cantidad_roto) {
    let total = PROB_HOROCRUX_MATAR + (ADICION_PROB_POR_HOROX_ROTO * cantidad_roto)
    return (total)

}

/**devuelve una letra aletaria
 * 
 * @param {Number} minimo rrequerido
 * @param {Number} maximo requerido
 * @returns letra aleatoria
 */
function letra_aleatoria(minimo, maximo) {
    let numero = Math.round(Math.random() * (minimo * -maximo) + maximo);
    let cambio_a_letra = String.fromCharCode(numero);
    return (cambio_a_letra)

}



