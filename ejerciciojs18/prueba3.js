var funcion = dato => {
    console.log(dato);
}

funcion("heoasod");

//Funcion Flecha



// var body = document.querySelector("body");

// document.body.addEventListener("mousemove",function(event) {
//     MouseMoveFunction(event);
//   });

// function MouseMoveFunction(e){
//    console.log("h");
//    ;
// }
var pnavigator = document.querySelector(".navigator");
var pwindow = document.querySelector(".window");
var caracter = document.querySelector(".caracter")
var code = document.querySelector(".code");
var raton = document.querySelector(".raton");
var teclado = document.querySelector(".teclado");


  var mouse_navigator = function(e){
    let x = e.clientX;
    
    
    
    let y = e.clientY;
    // console.log("soy el navegador" + '[' + x + ',' + y + ']');

    pnavigator.innerHTML =  '[' + x + ',' + y + ']';

    var xp = e.pageX;
    var yp = e.pageY;
    // console.log("soy la pagina" +  '[' + x + ',' + y + ']');
    
    pwindow.innerHTML = '[' + xp + ',' + yp + ']';
    raton.style.backgroundColor = "white";
    teclado.style.backgroundColor= "white";
  }


var keyPressed = function(event){
    console.log(event.charCode);
    caracter.innerHTML = "Caracter = " + event.key;
    code.innerHTML = "Code = " + event.charCode;
    teclado.style.backgroundColor = "green";
  }

  var clickado = function(event){
    raton.style.backgroundColor = "red";
  }
  
  window.onload = function() {
    this.addEventListener('mousemove', mouse_navigator);
    this.addEventListener('keypress',keyPressed);
    this.addEventListener('click', clickado)
      }





   


 