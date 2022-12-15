function esMayuscula(letra)
{
    if(letra == ' '){
        return false;
    }
    
    if(esNumero(letra)){
        return false;
    }

    return letra === letra.toUpperCase();
}

function esMinuscula(letra)
{

    if(letra == ' '){
        return false;
    }
    
    if(esNumero(letra)){
        return false;
    }

    return letra === letra.toLowerCase();
}

function esEspaciado(letra){
    return letra === " ";
}

function esNumero(letra){


    

    if(isNaN(parseInt(letra))){
        return false;
    }else{
        return true;
    }

    
}

var mayusculas = 0;
var minusculas = 0;
var espacios = 0;
var numeros = 0;

var texto="2aA";

for(var a = 0; a < texto.length; a++){
    var letraActual = texto.charAt(a);

    if(esMayuscula(letraActual)){
        mayusculas++;
    }

    if(esMinuscula(letraActual)){
        minusculas++;
    }

    if(esEspaciado(letraActual)){
        espacios++;
    }

    if(esNumero(letraActual)){
        numeros++;
    }
}

if(mayusculas == 0){
    console.log('La frase esta formada solo por mayusculas y tiene ' + mayusculas + ' mayusculas y ' + espacios + ' espacios');
}

if(minusculas == 0){
    console.log('La frase esta formada solo por minusculas y tiene ' + minusculas + ' minusculas y ' + espacios + ' espacios');
}

if(minusculas != 0 && mayusculas !=0){
    console.log('La frase esta formada por ' + minusculas + ' minusculas , '+ mayusculas + ' mayusculas , ' + espacios + ' espacios y ' + numeros + ' numero/s');
}


