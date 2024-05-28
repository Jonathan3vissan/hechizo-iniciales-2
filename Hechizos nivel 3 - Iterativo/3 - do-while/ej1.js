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
const VALOR_MIN_RECHAZO_ATAQUE = 0;
const VALOR_MAX_RECHAZO_ATAQUE = 100;
const VALOR_MIN_PROB_MUERTE = 0;
const VALOR_MAX_PROB_MUERTE = 100;
const MAXIMO_INTENOS_DEF = 30;
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
const CONTADOR_TRUE_DEF = 0;
const SI_INCORRECTO_CODI_DEF = 0;
const VICTORIIAA_DEF = false;
const MENSAJE_DESTRUYE_HOROCRUX_DEF = "def"
const OPCION_UNO = 1;
const OPCION_DOS = 2;
const PERDER_POR_INTENTOS_DEF = "def";


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

    let mensaje_destruye_un_horocrux = MENSAJE_DESTRUYE_HOROCRUX_DEF;

    let horocrux_rotos = HOROCRUX_ROTOS_DEF;

    let contador_true = CONTADOR_TRUE_DEF;

    let estado_funcion_compar_cod_finales = false;

    let si_incorrecto_codi = SI_INCORRECTO_CODI_DEF;

    let horocrux_estado_1 = HOROCRUX_ESTADOS_1_DEF;
    let horocrux_estado_2 = HOROCRUX_ESTADOS_2_DEF;
    let horocrux_estado_3 = HOROCRUX_ESTADOS_3_DEF;
    let horocrux_estado_4 = HOROCRUX_ESTADOS_4_DEF;
    let horocrux_estado_5 = HOROCRUX_ESTADOS_5_DEF;

    let mensaje_de_perder_o_ganar = PERDER_POR_INTENTOS_DEF;

    let vicotriiaa = VICTORIIAA_DEF;

    let elejir_daño_recibido = ELEJIR_DAÑO_RECIBIDO_DEF
    let estado_mago = ESTADO_MAGO_DEF;

    let nombre_horocrux = [NOMBRE_HOROCRUX_1, NOMBRE_HOROCRUX_2, NOMBRE_HOROCRUX_3, NOMBRE_HOROCRUX_4, NOMBRE_HOROCRUX_5];
    let codigos_finales = [codigo_final_1, codigo_final_2, codigo_final_3, codigo_final_4, codigo_final_5];
    let estados_de_todos_horocrux = [horocrux_estado_1, horocrux_estado_2, horocrux_estado_3, horocrux_estado_4, horocrux_estado_5];

    codigos_finales[0] = HOTOCRUX_CODIGO_1 + numero_aleatorio(VALOR_MINI_HOROX_1, VALOR_MAX_HOROX_1)
    codigos_finales[1] = numero_aleatorio(VALOR_MINI_HOROX_2, VALOR_MAX_HOROX_2) + HOTOCRUX_CODIGO_2
    codigos_finales[2] = HOTOCRUX_CODIGO_3_A + numero_aleatorio(VALOR_MINI_HOROX_3, VALOR_MAX_HOROX_3) + HOTOCRUX_CODIGO_3_B;
    codigos_finales[3] = letra_aleatoria(VALOR_MINI_HOROX_4, VALOR_MAX_HOROX_4) + HOTOCRUX_CODIGO_4
    codigos_finales[4] = HOTOCRUX_CODIGO_5 + letra_aleatoria(VALOR_MINI_HOROX_5, VALOR_MAX_HOROX_5)


    while (contador < maximo_intentos) {
        estado_prob_muerte = valor_comparados_azar_prob(horocrux_rotos)
        estado_prob_rechazo = valor_comparados_azar_prob(horocrux_rotos)
        console.log(mago);
        estado_mago = mago.cordura > 0 && mago.salud > 0
        console.log(codigos_finales);

        if ((contador > 0) && (estado_prob_muerte) && (estado_mago)) {

            console.log(DERROTA);
            contador = MAXIMO_INTENOS_DEF;

        } else if ((estado_prob_rechazo) && (estado_mago)) {
            console.log("elije donde recibiras daño  si a la salud (1) o cordura (2), elije con los numero asignados")

            while (contador_elejir < CONTADOR_ELEJIR_MAXI_DEF) {
                /*elejir_daño_recibido = Number(leer());
                console.log(elejir_daño(elejir_daño_recibido));
                contador_elejir = mensaje_opcion_no_valida(elejir_daño_recibido, contador_elejir,)
            */
                console.log(proceso_total_de_eleccion_de_daño());
            }

        } else {
            estado_funcion_compar_cod_finales = comparacion_codigos_finales(codigos_finales[contador_true])
            console.log(estado_funcion_compar_cod_finales);

            mensaje_destruye_un_horocrux = mensaje_destrucion_horocrux(estado_funcion_compar_cod_finales, nombre_horocrux, contador_true)
            console.log(mensaje_destruye_un_horocrux);
            si_incorrecto_codi = si_codigo_incorrecto(estado_funcion_compar_cod_finales);

            modificar_estado_en_vector_control_destruccion(estados_de_todos_horocrux, contador_true, estado_funcion_compar_cod_finales)

            vicotriiaa = condicion_de_victoria(estados_de_todos_horocrux, estados_de_todos_horocrux.length)
            contador = finaliza_contador_por_victoria(vicotriiaa, contador)

            contador_true = contador_para_posicion_vector(estado_funcion_compar_cod_finales, contador_true)
            contador = contador + 1
            mensaje_de_perder_o_ganar = mensaje_vicotira_o_derrota(contador, vicotriiaa)
            console.log(mensaje_de_perder_o_ganar);
            contador_elejir = CONTADOR_ELEJIR_DEF;
        }
    }
} main();


function proceso_total_de_eleccion_de_daño(contador) {   // estoy creando esta funcino para  usar solo una funcion en elejir daño asi sigo modulando  
    let salida = 0;
    let elejir = 0;

    elejir = Number(leer());
    {
        if ((eleccion === OPCION_UNO) || (eleccion === OPCION_DOS)) {
            contador = CONTADOR_ELEJIR_MAXI_DEF;
            if (eleccion === OPCION_UNO) {
                mago.salud -= horocrux.daño_salud
            } else if (eleccion === OPCION_DOS) {
                mago.cordura -= horocrux.daño_cordura
            }

        }
    } else {
        console.log("DEBES INGRESAR UNA DE LAS DOS OPCIONES ( 1 o 2 )");
    }
                                                                                        // tenia pensado ahcer eque salida depende de la eleccion sea contador o maog la salida tengo que ver com los resuelvo si es posible



    return (salida)
}

/**devuelve en contador en su maximo para dar salida del bucle
 * 
 * @param {Number} eleccion del usuario
 * @param {Number} contador  de las vuelas del bucle
 * @returns contador en maximo intentos
 */
function mensaje_opcion_no_valida(eleccion, contador) {
    if ((eleccion === OPCION_UNO) || (eleccion === OPCION_DOS)) {
        contador = CONTADOR_ELEJIR_MAXI_DEF;
    } else {
        console.log("DEBES INGRESAR UNA DE LAS DOS OPCIONES ( 1 o 2 )");
    }
    return (contador)
}


/**determina en que propiedad se actualiza el objeto mago
 * 
 * @param {Number} eleccion  del usuario que decide que daño recibe 
 * @param {Number} opcion     las  validas de eleccion 
 * @returns el objeto mago actualizado
 */
function elejir_daño(eleccion) {
    if (eleccion === OPCION_UNO) {
        mago.salud -= horocrux.daño_salud
    } else if (eleccion === OPCION_DOS) {
        mago.cordura -= horocrux.daño_cordura
    }
    return (mago)
}



/**pide un palabra y la devuelve
 * 
 * @returns palabra ingresado
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
function comparacion_codigos_finales(vector_codigos) {
    let ingresado = "def";
    let estado = false;
    ingresado = ingresar_codigo()
    if (vector_codigos === ingresado) {
        estado = true;
    }
    return (estado)
}

/**devuelde mensaje para la destruccion de cada horocrux
 * 
 * @param {Boolean} estado_comparacion proveniente de funcion estado de comparacion
 * @param {String} vector_nombres    de horocrux
 * @param {Number} contador_true    que definde el indice del vector
 * @returns mensaje destrucion de horocrux
 */
function mensaje_destrucion_horocrux(estado_comparacion, vector_nombres, contador_true) {
    let mensaje = "def";
    if (estado_comparacion) {
        mensaje = "destruiste el horocrux " + vector_nombres[contador_true]
    }
    return (mensaje)

}



/**devuevle un valor numerico que representa el indice de un vector 
 * 
 * @param {Number} contador_true  que se representa con un number 
 * @returns valor usado para indice de un vector
 */
function contador_para_posicion_vector(estado_funcion_compar_cod_finales, contador_true) {
    if (estado_funcion_compar_cod_finales) {
        contador_true = contador_true + 1
    }
    return (contador_true)
}


/**devuelve un vector modificacon en un indice especifico
 * 
 * @param {Boolean} vector_de_codigos_estados estado en indice  
 * @param {Number} contador_true que determina el indice del vector
 * @param {Boolean} estado_comparacion de funcion de comparacion de codigos
   
* @returns vector modifica  
 */
function modificar_estado_en_vector_control_destruccion(vector_de_codigos_estados, contador_true, estado_comparacion) {
    if (estado_comparacion) {
        vector_de_codigos_estados[contador_true] = true;
        return (vector_de_codigos_estados)
    }
}


/**compara lo estados del vector y devuelve su valor final con condicion de "&&" en su comparacion
 * 
 * @param {Boolean} vector  estado de indices 
 * @param {Number} tamano_vector elegido 
 * @returns un valor booleano
 */
function condicion_de_victoria(vector, tamano_vector) {
    let estado_final = false;
    let temporal = false;
    for (let i = 0; i < tamano_vector; i++) {
        temporal = vector[i]
        if (i > 0) {
            estado_final = temporal && vector[i]
        }
    }
    return (estado_final)
}



/**devuelve mensaje de derrota por usar maximo cantinda de intentos o de victoria si destruye todo los horocrux
 * 
 * @param {Boolean} victoria 
 * @param {Number} contador de vueltas de control del while 
 * @returns mensaje de derrota por usar maximo cantidad de intentos
 */
function mensaje_vicotira_o_derrota(contador, victoria) {
    let mensaje = "";
    if (contador === MAXIMO_INTENOS_DEF) {
        mensaje = DERROTA
    } else if (victoria) {
        mensaje = VICTORIA
    }

    return (mensaje)
}






/**si cumple condicion termina el while devolviendo el contador en su maximo
 * 
 * @param {Number} contador del vueltas de while principal 
 * @param {Boolean} condicion_respecto_fincion_condicio_vicotria para ingresar al if
 * @returns contador finalizado 
 */
function finaliza_contador_por_victoria(condicion_respecto_fincion_condicio_vicotria, contador) {
    if (condicion_respecto_fincion_condicio_vicotria) {
        contador = MAXIMO_INTENOS_DEF;
    } return (contador)
}



/**en caso de que los codigos no coincidan realiza la acccion de actualizar estado de salud de mago
 * 
 * 
 * @returns la actualizacion del estado de salud del mago
 */
function si_codigo_incorrecto(estado_funcion_compar_cod_finales) {

    if (!estado_funcion_compar_cod_finales) {
        mago.salud -= horocrux.daño_salud
        mago.cordura -= horocrux.daño_cordura
        return (mago)
    }
}




/**probabilidad de rechazo de ataque final despues de usar las condicones de reduccion si correspomde
 * 
 * @param {Number} horocrux_rotos 
 * @returns probabiliada de rechazo de ataque final 
 */
function prob_actualizada(horocrux_rotos) {
    let prob_rechazo_ataques = PROBA_RECAHAZO_ATAQUE_DEF + (REDUC_PROB_RECHA_ATAQ * horocrux_rotos);
    return (prob_rechazo_ataques)
}



/**la probabilidad actualizadad  de recibir un ataque mortal , que aumenta por elementos destruidos 
 * 
 * @param {Number} horocrux_rotos por el usuario 
 * @returns la probabildiad de recibir un ataque mortal
 */
function prob_actualizada_2(horocrux_rotos) {
    let aumento_de_posibilidad = PROB_HOROCRUX_MATAR + (ADICION_PROB_POR_HOROX_ROTO * horocrux_rotos);
    return (aumento_de_posibilidad)
}


/**u booleanos que determina si rechaza un ataque en ese turno
 * 
 * @param {Number} horocrux_rotos por el acierto de los codigos 
 * @returns booleano que decide si rechaza un ataque en ese turno
 */
function valor_comparados_azar_prob(horocrux_rotos) {
    let estado = false;
    if (numero_aleatorio(VALOR_MIN_RECHAZO_ATAQUE, VALOR_MAX_RECHAZO_ATAQUE) < prob_actualizada(horocrux_rotos)) {
        estado = true;
    }
    return (estado)
}





/**devuelve un valor booleano dependiendo si cumple comndicion de que se ejcute el ataque mortal al usuario
 * 
 * @param {Number} horocrux_rotos por turno
 * @returns un valor booleano 
 */
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



