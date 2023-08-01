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

let nahuel = new Persona('Nahuel', 17);
//let Agustin = new Persona('Agustin', 22);

let personasObjeto: Persona[] = new Array()

personasObjeto.push(nahuel);
//personasObjeto.push(Agustin);

personasObjeto.forEach(p=>{
    console.log('nombre: ' ,p.getNombre(), ' altura: ', p.getAltura(), ' edad: ',p.getEdad(),' es menor?: ',nahuel.getIsMenor());
})


nahuel.setAltura(180);
nahuel.setNombre('nahue');
nahuel.cumplirAnios();

console.log(' edad: ', nahuel.getEdad(),' altura: ', nahuel.getAltura(),' nombre: ', nahuel.getNombre(), ' es menor?: ',nahuel.getIsMenor());
