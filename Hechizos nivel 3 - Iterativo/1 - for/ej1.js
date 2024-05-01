const leer = require("prompt-sync")();

/**
 * Ej 1
 * Es crucial que los estudiantes aprendan los nombres de los hechizos correctamente para realizar magia de manera efectiva. 
 * En la clase de Encantamientos, los estudiantes deben demostrar su habilidad para recordar y lanzar los hechizos
 *  correctamente. Ayuda a simular este proceso creando un programa que solicite al usuario el nombre de un hechizo y 
 * le dé un número limitado de intentos para ingresarlo correctamente. Si el usuario ingresa el nombre del hechizo 
 * correctamente, el programa lo felicitará y finalizará. Si el usuario no logra ingresar el hechizo correctamente 
 * después de los intentos permitidos, el programa lo informará y finalizará.
 *
 * Por ejemplo: hechizo "Wingardium leviosa", cantidad de intentos maximos 4
 * 
 * Extra: permitir que el programa acepte 3 hechizos diferentes
 */

const VALOR_DEF_STRING = "def";
const HECHIZO_UNO = "Abrada Kedabra";
const HECHIZO_DOS = "Cruxio";
const HECHIZO_TRES = "Imperio";
const VALOR_NUM_DEF = 0;
const CONSIGNA = "clase de encantamiento, hoy lazamientos de hechizos \n consigna del dia: deberan lanzar correctaente los hechizos \n solo tendran 3 intentos para lanzar correctamnete el hechizo \n por favor lanza el hechizo de forma correcta";

function main() {
    let hechizo = VALOR_DEF_STRING;
    console.log(CONSIGNA);

    for (let i = 3; i > VALOR_NUM_DEF; i--) {

        nombre_hechizo = leer();

        if (nombre_hechizo == HECHIZO_UNO) {

            console.log("Felicidades el hechizo", HECHIZO_UNO, "fue lanzado a la perfeccion");
            i = VALOR_NUM_DEF;
        } else if (nombre_hechizo == HECHIZO_DOS) {
            console.log("muy buen lanzamiento del hechizo Crucio felicidades");
            i = VALOR_NUM_DEF;
        } else if (nombre_hechizo == HECHIZO_TRES) {
            console.log("excelnte muy buen lanzamiento del hechizo Imperio!!!");
            i = VALOR_NUM_DEF;
        } else {
            console.log("casi vuelve a intentar, te quedan solo", i - 1, "intentos");
        }
    }

}


main();