const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']
debugger
const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']

console.log(gifts);

function getGiftsToRefill(a1, a2, a3) {
    const stores = [...new Set([...a1, ...a2, ...a3])]
  
    return stores.filter((gift) => {
      return a1.includes(gift) + a2.includes(gift) + a3.includes(gift) === 1 
    })
  }

//   function Recuento(listaAContar){

//     listaAContar.map((regalo) => {
//         if(!listaDeProductos.find(a => a.nombre === regalo)){
//             listaDeProductos.push({nombre: regalo, stock: 1}) 
//         }else{
//            const pos = listaDeProductos.map(e => e.nombre).indexOf(regalo);
//            listaDeProductos[pos].stock += 1;
//         }
//     })

// }
