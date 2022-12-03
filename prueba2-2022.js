const year = 2000
// const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD
const holidays = ['01/01']
// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.



const fecha = new Date('01/01');
fecha.setFullYear('2000');  
// console.log(fecha.getMonth());



console.log(fecha.getDay());












function countHours(year,array){
    var horasExtra = 0;
    debugger;
for(var a = 0; a < array.length; a++){
    let fecha = new Date(array[a]);
    fecha.setFullYear(year);
    
    if(fecha.getDay() != 0 && fecha.getDay() != 6){
        horasExtra += 2;
    }
    
    
}
    return horasExtra;
}



console.log(countHours(year, holidays));

