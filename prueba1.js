class Persona {

    nombre;
    edad;
    genero;


    constructor() {
        this.obtDetalles = function obtDetalles() {
            return 'Nombre: ' + this.nombre + ' Edad: ' + this.edad + ' Genero: ' + this.genero;
        }
    }


}





var persona1 = new Persona();
persona1.nombre = "Christian";
persona1.edad = 22;
persona1.genero = "h";
console.log(persona1);


class Estudiante extends Persona {
    curso;
    grupo;


    constructor() {
        super();
        this.Registrar = function Registrar() {
            console.log("Registrar");
            

        }
    }

}

var estudiante1 = new Estudiante();

estudiante1.nombre = "Manolito";
estudiante1.curso = "3A";

estudiante1.Registrar();

console.log(estudiante1);
