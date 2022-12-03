const carta = 'bici coche balón _playstation bici coche peluche'

var cartaRehecha = carta.split(' ');


var cartaSinTachados = quitarTachados(cartaRehecha);


function quitarTachados(carta){
    carta.forEach((element,index) => {
        if(element.startsWith('_'))
        carta.splice(index,1);
        
       
    });
    return carta;
}


function listGifts(carta){
    debugger
    for(var a = 0; a < carta.length; a++){
        var seRepite= 0;
        for(var b = 0; b < carta.length; b++){
            if(carta[a] == carta[b]){
                if(seRepite != 0){
                    carta.splice(b,1)
                }
                seRepite++;
            }
        }
        carta[a] = carta[a] + ": " + seRepite.toString();
    }
    return carta;
}


const regalos = listGifts(cartaSinTachados);


console.log(regalos)