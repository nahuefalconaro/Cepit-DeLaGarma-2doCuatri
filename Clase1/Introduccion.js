"use strict";
// /*
// 1-Declarar arreglo de nombre de personas
// 2-vamos a recorrer e imprimir el arrego
// 3-vamos a obtener un elemento
// 4-vamos a eliminar un elemento
// 5-vamos a modificar un elemento
// */
Object.defineProperty(exports, "__esModule", { value: true });
//
// //1
// let personas: String[] = ['nombre1', 'nombre2', 'nombre3'];
// //2
// for (let i = 0; i < personas.length; i++) {
//     console.log(personas[i]); 
// }
// //3
// let aBuscar = 'nombre2';
// let encontro = false;
// let i = 0;
// while (!encontro && i < personas.length) {
//     if(personas[i] == aBuscar){
//         console.log(personas[i]);//4 y 5, el cambio iria aca.
//         encontro = true;
//     }
//     i++;
// }
//persona es la clase/molde
//nahuel y agustin son el objeto/instancia
var Persona_1 = require("./Persona");
var personas = new Array();
function crearPersona(nombre, edad) {
    return new Persona_1.Persona(nombre, edad);
}
console.log(personas.length);
personas.forEach(function (p) {
    console.log('primera iteracion de for');
    console.log(p.getNombre() + p.getEdad());
});
var i = 0;
while (i < 10) {
    //let newName:string = readline.question('Ingrese nuevo nombre: ');
    //let newAge:number = readline.questionInt('Ingrese nueva edad: ');
    var newName = 'Nombre' + i;
    var newAge = i;
    personas.push(crearPersona(newName, newAge));
    i++;
}
console.log('Segunda iteracion', personas.length);
personas.forEach(function (p) {
    console.log(p.getNombre() + p.getEdad());
});
// let nahuel = new Persona('Nahuel', 17);
// let Agustin = new Persona('Agustin', 22);
// let natalia = new Persona('Natalia', 22);
// let personasObjeto: Persona[] = new Array()
// personasObjeto.push(nahuel);
// personasObjeto.push(natalia);
// personasObjeto.push(Agustin);
// // personasObjeto.forEach(p=>{
// //     console.log('nombre: ' ,p.getNombre(), ' altura: ', p.getAltura(), ' edad: ',p.getEdad(),' es menor?: ',nahuel.getIsMenor());
// // })
// for (let i = 0; i < personasObjeto.length; i++) {
//     if(personasObjeto[i].getNombre().toUpperCase() == 'Natalia'.toUpperCase()){
//         console.log(personasObjeto[i])
//     }
// }
// nahuel.setAltura(180);
// nahuel.setNombre('nahue');
// nahuel.cumplirAnios();
// console.log(' edad: ', nahuel.getEdad(),' altura: ', nahuel.getAltura(),' nombre: ', nahuel.getNombre(), ' es menor?: ',nahuel.getIsMenor());
