// /*
// 1-Declarar arreglo de nombre de personas
// 2-vamos a recorrer e imprimir el arrego
// 3-vamos a obtener un elemento
// 4-vamos a eliminar un elemento
// 5-vamos a modificar un elemento
// */

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
import { Persona } from "./Persona";
// import * as readline from 'readline-sync';

// let personas: Persona[] = new Array()

// function crearPersona(nombre:string, edad:number){
//     return new Persona(nombre, edad,undefined,465465)
// }
// console.log(personas.length)
// personas.forEach(p => {
//     console.log('primera iteracion de for')
//     console.log(p.getNombre() + p.getEdad())
// });
// let i = 0;
// while(i<10){
//     //let newName:string = readline.question('Ingrese nuevo nombre: ');
//     //let newAge:number = readline.questionInt('Ingrese nueva edad: ');
//     let newName:string = 'Nombre'+i;
//     let newAge:number = i;
//     personas.push(crearPersona(newName, newAge))
//     i++;
// }
// console.log('Segunda iteracion', personas.length)
// personas.forEach(p => {
    
//     console.log(p.getNombre() + p.getEdad())
// });
//  let nahuel = new Persona('Nahuel', 17, undefined, 456465);
//  console.log(nahuel.getApellido())
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
