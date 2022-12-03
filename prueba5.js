const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]

debugger
console.log(filtrarOvejas(ovejas));


function filtrarOvejas(ovejas){
  const ovejasRojas = [];

    for(var a = 0; a < ovejas.length; a++){
        if(ovejas[a].color == 'rojo' && ((ovejas[a].name.includes('a') || (ovejas[a].name.includes('A'))) 
        && (ovejas[a].name.includes('n') || (ovejas[a].name.includes('N'))))){
            ovejasRojas.push(ovejas[a]);
        }
        
    }
    return ovejasRojas;
 }