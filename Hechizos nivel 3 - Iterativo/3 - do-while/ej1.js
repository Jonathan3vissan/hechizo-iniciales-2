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
const VALOR_MIN_RECHAZO_ATAQUE = 0;
const VALOR_MAX_RECHAZO_ATAQUE = 100;
const VALOR_MIN_PROB_MUERTE = 0;
const VALOR_MAX_PROB_MUERTE = 100;
const MAXIMO_INTENOS_DEF = 30;
//const ADIVINA_EL_CODIGO_DEF_1 = "def";
//const ADIVINA_EL_CODIGO_DEF_2 = "def";
//const ADIVINA_EL_CODIGO_DEF_3 = "def";
//const ADIVINA_EL_CODIGO_DEF_4 = "def";
//const ADIVINA_EL_CODIGO_DEF_5 = "def";
const ESTADO_PRO_MUERTE_DEF = false;
const ESTADO_PRO_RECHAZO_DEF = false;
const CONTADOR_DEF = 0;
const CONTADOR_ELEJIR_DEF = 0;
const CONTADOR_ELEJIR_MAXI_DEF = 1;
const ELEJIR_DAÑO_RECIBIDO_DEF = 0;
const ESTADO_MAGO_DEF = false;
const PREGUNTA_DE_ADIVINAR = "intenata destruir el horocrux "
const HOROCRUX_ESTADOS_1_DEF = false;
const HOROCRUX_ESTADOS_2_DEF = false;
const HOROCRUX_ESTADOS_3_DEF = false;
const HOROCRUX_ESTADOS_4_DEF = false;
const HOROCRUX_ESTADOS_5_DEF = false;


const mago = {
    salud: 400,
    cordura: 200
}
const horocrux = {
    daño_salud: 10.4,
    daño_cordura: 5.7
}





function main() {

    let contador = CONTADOR_DEF;
    let contador_elejir = CONTADOR_ELEJIR_DEF;

    let codigo_final_1 = CODIGO_FINAL_1_DEF;
    let codigo_final_2 = CODIGO_FINAL_2_DEF;
    let codigo_final_3 = CODIGO_FINAL_3_DEF;
    let codigo_final_4 = CODIGO_FINAL_4_DEF;
    let codigo_final_5 = CODIGO_FINAL_5_DEF;

    let maximo_intentos = MAXIMO_INTENOS_DEF;
    let estado_prob_muerte = ESTADO_PRO_MUERTE_DEF;
    let estado_prob_rechazo = ESTADO_PRO_RECHAZO_DEF;

    let horocrux_rotos = HOROCRUX_ROTOS_DEF;

    let horocrux_estado_1 = HOROCRUX_ESTADOS_1_DEF;
    let horocrux_estado_2 = HOROCRUX_ESTADOS_2_DEF;
    let horocrux_estado_3 = HOROCRUX_ESTADOS_3_DEF;
    let horocrux_estado_4 = HOROCRUX_ESTADOS_4_DEF;
    let horocrux_estado_5 = HOROCRUX_ESTADOS_5_DEF;
    /**
     * 
    let adivina_el_codigo_1 = ADIVINA_EL_CODIGO_DEF_1;
    let adivina_el_codigo_2 = ADIVINA_EL_CODIGO_DEF_2;
    let adivina_el_codigo_3 = ADIVINA_EL_CODIGO_DEF_3;
    let adivina_el_codigo_4 = ADIVINA_EL_CODIGO_DEF_4;
    let adivina_el_codigo_5 = ADIVINA_EL_CODIGO_DEF_5;
    
    */

    let adivina_codigo = "def";
    let elejir_daño_recibido = ELEJIR_DAÑO_RECIBIDO_DEF
    let estado_mago = ESTADO_MAGO_DEF;

    let nombre_horocrux = [NOMBRE_HOROCRUX_1, NOMBRE_HOROCRUX_2, NOMBRE_HOROCRUX_3, NOMBRE_HOROCRUX_4, NOMBRE_HOROCRUX_5];
    let codigos_finales = [codigo_final_1, codigo_final_2, codigo_final_3, codigo_final_4, codigo_final_5];
    let estados_de_todos_horocrux = [horocrux_estado_1 && horocrux_estado_2 && horocrux_estado_3 && horocrux_estado_4 && horocrux_estado_5];
    // let adivinar_codigos = [adivina_el_codigo_1, adivina_el_codigo_2, adivina_el_codigo_3, adivina_el_codigo_4, adivina_el_codigo_5]

    console.log(estados_de_todos_horocrux); ///ver si da true con todos en true




    codigos_finales[0] = HOTOCRUX_CODIGO_1 + numero_aleatorio(VALOR_MINI_HOROX_1, VALOR_MAX_HOROX_1)
    codigos_finales[1] = numero_aleatorio(VALOR_MINI_HOROX_2, VALOR_MAX_HOROX_2) + HOTOCRUX_CODIGO_2
    codigos_finales[2] = HOTOCRUX_CODIGO_3_A + numero_aleatorio(VALOR_MINI_HOROX_3, VALOR_MAX_HOROX_3) + HOTOCRUX_CODIGO_3_B;
    codigos_finales[3] = letra_aleatoria(VALOR_MINI_HOROX_4, VALOR_MAX_HOROX_4) + HOTOCRUX_CODIGO_4
    codigos_finales[4] = HOTOCRUX_CODIGO_5 + letra_aleatoria(VALOR_MINI_HOROX_5, VALOR_MAX_HOROX_5)
    //ya soluciones el tema de las funciones para la condicion de entrada al fatal o de elejir el daño(dentro de estos estan la sposibilidade de aumentar el daño  o disminuir la posibilidad de rechzao) ,seguir con el tema de las pregunta y ataque pregunta a pregunta 



    while (contador < maximo_intentos) {
        console.log("INICIO DE VUELTA APENAS INICIA WHULE", contador); //solo es control del incio de la vuelta del bucle
        estado_prob_muerte = valor_comparados_azar_prob(horocrux_rotos)           //funcion que me devuelve un bolenao 
        console.log("ESTE ES EL DE MUERTE BOLEAN ", estado_prob_muerte);      // control de si es falo o verdadre
        estado_prob_rechazo = valor_comparados_azar_prob(horocrux_rotos)        //funcion que me da un bolelaon
        console.log("est es RECHAZAO ESTADO BOLEAN ", estado_prob_rechazo); // control de si es v o f
        console.log(mago);
        estado_mago = mago.cordura > 0 && mago.salud > 0
        console.log(codigos_finales);

        if ((contador > 0) && (estado_prob_muerte) && (estado_mago)) {
            mago = {
                salud: 0,
                cordura: 0
            }
            console.log(mago);
            console.log(DERROTA);
            contador = MAXIMO_INTENOS_DEF;

        } else if ((estado_prob_rechazo) && (estado_mago)) {
            console.log("elije donde recibiras daño  si a la salud (1) o cordura (2), elije con los numero asignados")

            while (contador_elejir < CONTADOR_ELEJIR_MAXI_DEF) {
                elejir_daño_recibido = Number(leer());


                if (elejir_daño_recibido === 1) {
                    mago.salud = mago.salud - horocrux.daño_salud;
                    console.log(mago);
                    contador_elejir = CONTADOR_ELEJIR_MAXI_DEF;
                }

                else if (elejir_daño_recibido === 2) {
                    mago.cordura = mago.cordura - horocrux.daño_cordura;
                    console.log(mago);
                    contador_elejir = CONTADOR_ELEJIR_MAXI_DEF;
                } else {
                    console.log("DEBES INGRESAR UNA DE LAS DOS OPCIONES ( 1 o 2 )");
                }

            }

        } else
            /*{
            console.log(codigos_finales);
            console.log(PREGUNTA_DE_ADIVINAR);
            adivina_codigo = String(leer());
            console.log(typeof adivina_codigo);



            console.log(mago);
            console.log(estados_de_todos_horocrux);


            console.log(codigos_finales);
            
            
        }*/ {comparacion_codigos_finales(codigos_finales[0])

        }









        contador = contador + 1
        contador_elejir = CONTADOR_ELEJIR_DEF;
        console.log("vuelta AL FINAL CUANDO TEMRNIA LA VUELTA Y SUMA Y VUELVE AL INCIO", contador);
    }

}





main();

/**pide un codigo y los devuelve
 * 
 * @returns codigoingresado
 */
function ingresar_codigo() {
    let codigo_ingresado = "def";

    console.log(PREGUNTA_DE_ADIVINAR);
    codigo_ingresado = (leer());
    return (codigo_ingresado)
}



/**me devuelve un valor boleano dependiendo de el codigo ingresado
 * 
 * @param {String} codigos que se compara con el ingresado 
 * @returns un valor boleano
 */
function comparacion_codigos_finales(codigos) {
    let ingresado = "def";
    let estado = false;

    ingresado = ingresar_codigo()

    if (codigos === ingresado) {
        estado = true;

    }
    return (estado)

}



/**en caso de que los codigos no cincidan realiza la acccion de actualizar estado de salud de mago
 * 
 * 
 * @returns la actualizacion del estado de salud del mago
 
function si_codigo_incorrecto() {
    let salud = 0;

    if (comparacion_codigos_finales()) {
        salud = mago.salud - horocrux.daño_salud

    }

    return (salud)


}*/





/**devuelve un numero que detertminad un porcentaje
 * 
 * param {Number} horocrux_rotos de horocrux 
 * returns un porcentaje final 
 
function adicion_probabilida_de_muerte(horocrux_rotos) {
    let total = PROB_HOROCRUX_MATAR + (ADICION_PROB_POR_HOROX_ROTO * horocrux_rotos)
    return (total)


}*/



function prob_actualizada(horocrux_rotos) {
    let prob_rechazo_ataques = PROBA_RECAHAZO_ATAQUE_DEF + (REDUC_PROB_RECHA_ATAQ * horocrux_rotos);
    return (prob_rechazo_ataques)
}

function prob_actualizada_2(horocrux_rotos) {
    let aumento_de_posibilidad = PROB_HOROCRUX_MATAR + (ADICION_PROB_POR_HOROX_ROTO * horocrux_rotos);
    return (aumento_de_posibilidad)
}

function valor_comparados_azar_prob(horocrux_rotos) {
    let estado = false;
    if (numero_aleatorio(VALOR_MIN_RECHAZO_ATAQUE, VALOR_MAX_RECHAZO_ATAQUE) < prob_actualizada(horocrux_rotos)) {
        estado = true;
    }
    return (estado)
}


function valor_comparados_azar_prob(horocrux_rotos,) {
    let estado = false;
    if (numero_aleatorio(VALOR_MIN_PROB_MUERTE, VALOR_MAX_PROB_MUERTE) < prob_actualizada_2(horocrux_rotos)) {
        estado = true;
    }
    return (estado)
}








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

/**devuelve una letra aletaria
 *  
 * @param {Number} minimo requerido
 * @param {Number} maximo requerido
 * @returns letra aleatoria
 */
function letra_aleatoria(minimo, maximo) {
    let numero = Math.round(Math.random() * (minimo - maximo) + maximo);
    let cambio_a_letra = String.fromCharCode(numero);
    return (cambio_a_letra)
}



