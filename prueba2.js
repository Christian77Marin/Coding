/**Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random
 *  para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. 
 * Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, 
 * repitiendo 36.000 veces esta operación. */



const stash = [];

var numero1 = 0;
var numero2 = 0;
var numero3 = 0;
var numero4 = 0;
var numero5 = 0;
var numero6 = 0;

var tiradasDeDado = 360000;


for (let a = 0; a < tiradasDeDado; a++){
    let numero;

    numero =  Math.floor(Math.random() * (7 - 1) + 1);
    
   stash.push(numero);

    if(numero == 1){
        numero1++;
    } else if(numero == 2){
        numero2++
    } else if(numero == 3){
        numero3++
    } else if(numero == 4){
        numero4++
    } else if(numero == 5){
        numero5++
    } else if(numero == 6){
        numero6++
    }

}

console.log(stash.length);

var sumatotal = 0;
var media = 0;

for (let a = 0; a < stash.length; a++){
    sumatotal += stash[a];
}

media = sumatotal / stash.length;

console.log(media);

console.log("Numero1 = " + numero1 + " Numero2 = " + numero2 + " Numero3 = " + numero3 + " Numero4 = " + numero4 
+ " Numero5 = " + numero5 + " Numero6 = " + numero6);
