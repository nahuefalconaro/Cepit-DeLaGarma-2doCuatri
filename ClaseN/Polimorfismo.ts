
import { Gato } from "./Gato";
import { Perro } from "./Perro";
import { Animal } from "./Animal";
import { Persona } from "../Clase1/Persona";

let duenio = new Persona('Marian', 33)

let gato = new Gato(4, 'naranja', duenio, 'Sheldon');
let gato2 = new Gato(4, 'gris', duenio,'Leonard');
let perro = new Perro(4, 'Marron', duenio);
let perro2 = new Perro(4, 'Negro', duenio,'Rush');

let animalesDeMarian:Animal[] = new Array();

animalesDeMarian.push(gato);
animalesDeMarian.push(perro);
animalesDeMarian.push(gato2);
animalesDeMarian.push(perro2);

animalesDeMarian.forEach(animal => {
    console.log(animal.getNombre());
});
