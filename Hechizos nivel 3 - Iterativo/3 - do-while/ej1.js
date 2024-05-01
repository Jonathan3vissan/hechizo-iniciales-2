const leer = require("prompt-sync")();

const DERROTA = "En el oscuro manto de la derrota, el estudiante enfrentó una verdad devastadora: a pesar de sus esfuerzos incansables, los horrocruxes permanecen intactos, y la sombra del mal se alza triunfante sobre el mundo mágico. Aunque la batalla fue ardua y valiente, el destino ha dictado su veredicto, dejando al estudiante con el amargo sabor de la derrota. Pero incluso en la oscuridad más profunda, la llama de la esperanza aún arde, recordando que la lucha nunca termina y que el mañana siempre guarda la promesa de una nueva oportunidad para la redención y la victoria.";
const VICTORIA = "¡Victoria para el estudiante valiente que, con coraje y determinación, ha destruido todos los horrocruxes! Con cada fragmento de alma oscura eliminado, la luz de la esperanza ha brillado más brillante sobre el mundo mágico. ¡Su sacrificio y valentía han salvado a nuestra comunidad de las sombras de la oscuridad, asegurando un futuro lleno de paz y prosperidad para todas las generaciones venideras!";

const HOROCRUX_STRING = "Horocrux";
const HOROCRUX_1 = " Diario de Tom Riddle";
const HOROCRUX_2 = "Anillo de Gaunt ";
const HOROCRUX_3 = "Copa de Helga Hufflepuff";
const HOROCRUX_4 = "Diadema de Rowena Ravenclaw";
const HOROCRUX_5 = "Nagini(serpiente)";
const CODIGO_HOROCRUX_1 = "R1dd13";
const CODIGO_HOROCRUX_2 = "G4unt!";
const CODIGO_HOROCRUX_3_A = "H3l";
const CODIGO_HOROCRUX_3_B = "ga!";
const CODIGO_HOROCRUX_4 = "R4vena";
const CODIGO_HOROCRUX_5 = "N@9ini";
const VALOR_DEF_CORDURA = 200;
const VALOR_DEF_SALUD = 400;
const VALOR_AZA_DEF_HOROCRUX = 0;
const VALOR_MINIMO_1 = -3;
const VALOR_MAXMIMO_1 = 21;
const VALOR_MINIMO_2 = -100;
const VALOR_MAXMIMO_2 = -70;
const VALOR_MINIMO_3 = 4;
const VALOR_MAXMIMO_3 = 12;
const VALOR_CODIGO_HORX_DEF_1 = "def";
const VALOR_CODIGO_HORX_DEF_2 = "def";
const VALOR_CODIGO_HORX_DEF_3 = "def";
const VALOR_CODIGO_HORX_DEF_4 = "def";
const VALOR_CODIGO_HORX_DEF_5 = "def";
const ADIVINAR_CODIGO_DEF = "def";
const CONTADOR_VALOR_DEF_INI = 0;
const CONTADOR_VALOR_FIN_DEF = 30;
const VALOR_MIN_AZAR_4 = 97;
const VALOR_MAX_AZAR_4 = 101;
const VALOR_MIN_AZAR_5 = 72;
const VALOR_MAX_AZAR_5 = 75;
const POSIBILIDAD_MUERTE_DEF = 1;
const AZAR_DE_MUERTE_DEF = 0;
const MIN_MUERTE = 0;
const MAX_MUERTE = 100;
const AUMENTO_DE_PISIBILIDAD_MUERTE = 2.4;
const CANTIDAD_HOROCRUX_ROTOS_DEF = 0;
const POSI_REPELER_ATAQUE_DEF = 50;
const DISMINUYE_POR_HOROCRUX_ROTOS = 11.875;
const AZAR_REPELER_ATAQUE_DEF = 0;
const MIN_AZAR_REPELER_ATAQUE = 0;
const MAX_AZAR_REPELER_ATAQUE = 100;
const MUERTE_DEF = false;
const ELEJIR_DAÑO_RECIBIDO_DEF = false;
const ELECCION_RECIBIR_DAÑO_DEF = 0;
const DAÑO_SALUD = 10.4;
const DAÑO_CORDURA = 5.7;
const CONTADOR_DE_ELEECION_FIN = 3;
const DESTRUCCION_HOROCRUX_1_DEF = false;
const DESTRUCCION_HOROCRUX_2_DEF = false;
const DESTRUCCION_HOROCRUX_3_DEF = false;
const DESTRUCCION_HOROCRUX_4_DEF = false;
const DESTRUCCION_HOROCRUX_5_DEF = false;
const INTENTO_A_CODIGO_1_DEF = false;
const INTENTO_A_CODIGO_2_DEF = false;
const INTENTO_A_CODIGO_3_DEF = false;
const INTENTO_A_CODIGO_4_DEF = false;
const INTENTO_A_CODIGO_5_DEF = false;
const TOTAL_DESTRUCCION_DEF = false;
const J_DEF = 0;
const J_FIN = 3;
const POSIBILIDAD_DE_MUERTE=false;


function main() {
    let salud = VALOR_DEF_SALUD;
    let cordura = VALOR_DEF_CORDURA;
    let horocrux_codigo_final_1 = VALOR_CODIGO_HORX_DEF_1;
    let horocrux_codigo_final_2 = VALOR_CODIGO_HORX_DEF_2;
    let horocrux_codigo_final_3 = VALOR_CODIGO_HORX_DEF_3;
    let horocrux_codigo_final_4 = VALOR_CODIGO_HORX_DEF_4;
    let horocrux_codigo_final_5 = VALOR_CODIGO_HORX_DEF_5;
    let contador = CONTADOR_VALOR_DEF_INI;
    let adivinar_codigo = ADIVINAR_CODIGO_DEF;
    let posibilidad_muerte = POSIBILIDAD_MUERTE_DEF;
    let azar_de_muerte = AZAR_DE_MUERTE_DEF;
    let cantidad_de_horocrux_rotos = CANTIDAD_HOROCRUX_ROTOS_DEF;
    let posi_de_repeler_total = POSI_REPELER_ATAQUE_DEF;
    let azar_repeler_ataque = AZAR_REPELER_ATAQUE_DEF;
    let muerte = MUERTE_DEF;
    let elejir_daño_recibido = ELEJIR_DAÑO_RECIBIDO_DEF;
    let eleccion_recibir_daño = ELECCION_RECIBIR_DAÑO_DEF;
    let destruccion_horocurx_1 = DESTRUCCION_HOROCRUX_1_DEF;
    let destruccion_horocurx_2 = DESTRUCCION_HOROCRUX_2_DEF;
    let destruccion_horocurx_3 = DESTRUCCION_HOROCRUX_3_DEF;
    let destruccion_horocurx_4 = DESTRUCCION_HOROCRUX_4_DEF;
    let destruccion_horocurx_5 = DESTRUCCION_HOROCRUX_5_DEF;
    let j = J_DEF;
    let intento_a_codigo_1 = INTENTO_A_CODIGO_1_DEF;
    let intento_a_codigo_2 = INTENTO_A_CODIGO_2_DEF;
    let intento_a_codigo_3 = INTENTO_A_CODIGO_3_DEF;
    let intento_a_codigo_4 = INTENTO_A_CODIGO_4_DEF;
    let intento_a_codigo_5 = INTENTO_A_CODIGO_5_DEF;
    let total_destruccion = TOTAL_DESTRUCCION_DEF;
    let muerte_en_posibilidad=POSIBILIDAD_DE_MUERTE;

    horocrux_codigo_final_1 = generador_de_codigo(VALOR_MINIMO_1, VALOR_MAXMIMO_1, CODIGO_HOROCRUX_1);

    horocrux_codigo_final_2 = generador_de_codigo(VALOR_MINIMO_2, VALOR_MAXMIMO_2, CODIGO_HOROCRUX_2);

    horocrux_codigo_final_3 = generador_de_codigo(VALOR_MINIMO_3, VALOR_MAXMIMO_3, CODIGO_HOROCRUX_3_A,)
    horocrux_codigo_final_3 = horocrux_codigo_final_3 + CODIGO_HOROCRUX_3_B;

    horocrux_codigo_final_4 = geerado_letras(VALOR_MIN_AZAR_4, VALOR_MAX_AZAR_4)
    horocrux_codigo_final_4 = horocrux_codigo_final_4 + CODIGO_HOROCRUX_4;

    horocrux_codigo_final_5 = geerado_letras(VALOR_MIN_AZAR_5, VALOR_MAX_AZAR_5)
    horocrux_codigo_final_5 = CODIGO_HOROCRUX_5 + horocrux_codigo_final_5;


    console.log(horocrux_codigo_final_1);
    console.log(horocrux_codigo_final_2);
    console.log(horocrux_codigo_final_3);
    console.log(horocrux_codigo_final_4);
    console.log(horocrux_codigo_final_5);




    while (contador < CONTADOR_VALOR_FIN_DEF) {
        contador = contador + 1;
        azar_de_muerte = Math.round(Math.random() * (MIN_MUERTE - MAX_MUERTE) + MAX_MUERTE);
        posibilidad_muerte = posibilidad_muerte + (AUMENTO_DE_PISIBILIDAD_MUERTE * cantidad_de_horocrux_rotos)

        posi_de_repeler_total = posi_de_repeler_total - (DISMINUYE_POR_HOROCRUX_ROTOS * cantidad_de_horocrux_rotos);

        azar_repeler_ataque = Math.round(Math.random() * (MIN_AZAR_REPELER_ATAQUE - MAX_AZAR_REPELER_ATAQUE) + MAX_AZAR_REPELER_ATAQUE)

        cantidad_de_horocrux_rotos = CANTIDAD_HOROCRUX_ROTOS_DEF;


        if ((contador > 2) && (azar_de_muerte < posibilidad_muerte) && (!total_destruccion)) {
            contador = CONTADOR_VALOR_FIN_DEF;
            muerte = true;
            console.log(DERROTA);
            muerte_en_posibilidad=true;


        } else if ((azar_repeler_ataque < posi_de_repeler_total) && (!muerte)) {

            elejir_daño_recibido = true;


            while (j < J_FIN) {
                
                console.log("ELIJE QUE DAÑO VAS A RECIBIR SI SALUD(1) O CORDURA(2), SOLO ELEEJIR CON NUMERO ");
                eleccion_recibir_daño = Number(leer());


                if (eleccion_recibir_daño == 1) {
                    salud = salud - DAÑO_SALUD;
                    console.log("su salud es :\t", salud);
                    j = J_FIN;

                } else if (eleccion_recibir_daño == 2) {
                    cordura = cordura * DAÑO_CORDURA;
                    console.log("tu cordura es :\t", cordura);
                    j = J_FIN;

                } else {
                    console.log("solo puedes ingresar una opcion 1 o 2 , no letras ni espacios vacios ,intenta nuevamente");
                    j = J_DEF;

                }



            }



        } 


        if ((!destruccion_horocurx_1) && (!muerte)) {
            console.log("intenta destruir el primer ", HOROCRUX_STRING,HOROCRUX_1);
            adivinar_codigo = leer();
            intento_a_codigo_1 = true;


        } else if ((!destruccion_horocurx_2) && (destruccion_horocurx_1) && (!muerte)) {

            console.log("intenta destruir el segundo ", HOROCRUX_STRING,HOROCRUX_2);
            adivinar_codigo = leer();
            intento_a_codigo_2 = true;

        } else if ((!destruccion_horocurx_3) && (destruccion_horocurx_1) && (destruccion_horocurx_2) && (!muerte)) {

            console.log("intenta destruir el tercer ", HOROCRUX_STRING,HOROCRUX_3);
            adivinar_codigo = leer();
            intento_a_codigo_3 = true;


        } else if ((!destruccion_horocurx_4) && (destruccion_horocurx_1) && (destruccion_horocurx_2) && (destruccion_horocurx_3) && (!muerte)) {

            console.log("intenta destruir el cuarto ", HOROCRUX_STRING,HOROCRUX_4);
            adivinar_codigo = leer();
            intento_a_codigo_4 = true;

        } else if ((!destruccion_horocurx_5) && (destruccion_horocurx_1) && (destruccion_horocurx_2) && (destruccion_horocurx_3) && (destruccion_horocurx_4) && (!muerte)) {


            console.log("intenta destruir el ultimo ", HOROCRUX_STRING,HOROCRUX_5);
            adivinar_codigo = leer();
            intento_a_codigo_5 = true;
        }


        if ((adivinar_codigo == horocrux_codigo_final_1) && (intento_a_codigo_1)) {
            console.log("destruiste el primer primer ", HOROCRUX_STRING, HOROCRUX_1);
            cantidad_de_horocrux_rotos = cantidad_de_horocrux_rotos + 1;
            destruccion_horocurx_1 = true;

        } else if ((adivinar_codigo != horocrux_codigo_final_1) && (intento_a_codigo_1) && (!intento_a_codigo_2)&&(!muerte)) {
            console.log("recibes daño al no saber el segundo codigo ");
            salud = salud - DAÑO_SALUD;
            cordura = cordura - DAÑO_CORDURA;
            console.log("salud", salud, "cordura ", cordura);
        }



        if ((adivinar_codigo == horocrux_codigo_final_2) && (intento_a_codigo_2)) {
            console.log("destruiste el segundo ", HOROCRUX_STRING, HOROCRUX_2);
            cantidad_de_horocrux_rotos = cantidad_de_horocrux_rotos + 1;
            destruccion_horocurx_2 = true;

        } else if ((adivinar_codigo != horocrux_codigo_final_2) && (intento_a_codigo_2) && (!intento_a_codigo_3)) {
            console.log("recibes daño al no saber el segundo codigo  ");
            salud = salud - DAÑO_SALUD;
            cordura = cordura - DAÑO_CORDURA;
            console.log("salud", salud, "cordura ", cordura);
        }


        if ((adivinar_codigo == horocrux_codigo_final_3) && (intento_a_codigo_3)) {
            console.log("destruiste el tercer ", HOROCRUX_STRING, HOROCRUX_3);
            cantidad_de_horocrux_rotos = cantidad_de_horocrux_rotos + 1;
            destruccion_horocurx_3 = true;

        } else if ((adivinar_codigo != horocrux_codigo_final_3) && (intento_a_codigo_3) && (!intento_a_codigo_4)) {
            console.log("recibes daño al no saber el tecer codigo");
            salud = salud - DAÑO_SALUD;
            cordura = cordura - DAÑO_CORDURA;
            console.log("salud", salud, "cordura ", cordura);
        }



        if ((adivinar_codigo == horocrux_codigo_final_4) && (intento_a_codigo_4)) {
            console.log("destruiste el cuarto ", HOROCRUX_STRING, HOROCRUX_4);
            cantidad_de_horocrux_rotos = cantidad_de_horocrux_rotos + 1;
            destruccion_horocurx_4 = true;

        } else if ((adivinar_codigo != horocrux_codigo_final_4) && (intento_a_codigo_4) && (!intento_a_codigo_5)) {
            console.log("recibes daño al no saber el cuarto codigo");
            salud = salud - DAÑO_SALUD;
            cordura = cordura - DAÑO_CORDURA;
            console.log("salud", salud, "cordura ", cordura);
        }


        if ((adivinar_codigo == horocrux_codigo_final_5) && (intento_a_codigo_5)) {
            console.log("destruiste el quinto  ", HOROCRUX_STRING, HOROCRUX_5);
            cantidad_de_horocrux_rotos = cantidad_de_horocrux_rotos + 1;
            destruccion_horocurx_5 = true;

        } else if ((adivinar_codigo != horocrux_codigo_final_5) && (intento_a_codigo_5)) {
            console.log("recibes daños al no saber el quinto codigo");
            salud = salud - DAÑO_SALUD;
            cordura = cordura - DAÑO_CORDURA;
            console.log("salud", salud, "cordura ", cordura);
        }


        total_destruccion = destruccion_horocurx_1 && destruccion_horocurx_2 && destruccion_horocurx_3 && destruccion_horocurx_4 && destruccion_horocurx_5


        if (total_destruccion) {

            console.log(VICTORIA);
            contador = CONTADOR_VALOR_FIN_DEF;

        } else if ((contador == CONTADOR_VALOR_FIN_DEF)  && (!muerte_en_posibilidad)) {

            console.log(DERROTA);

        }else if ((salud<=0)||(cordura<=0)&&(!muerte_en_posibilidad)) {

            console.log(DERROTA);
        }
    }
}
main();


function generador_de_codigo(min, max, codigo_horocrux) {
    let azar_horocrux = Math.round(Math.random() * (min - max) + max);
    return codigo_horocrux + azar_horocrux;
}


function geerado_letras(min, max,) {
    let cambio
    let azar_horocrux = Math.round(Math.random() * (min - max) + max)
    cambio = String.fromCharCode(azar_horocrux)
    return (cambio)


}

function listado(params) {

let areglouno=[5]


    
}