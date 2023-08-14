
import { Gato } from "./Gato";
import { Perro } from "./Perro";
import { Animal } from "./Animal"

let gato = new Gato(4, 'naranja', 'Sheldon');
let gato2 = new Gato(4, 'gris', 'Leonard');
let perro = new Perro(4, 'Marron');
let perro2 = new Perro(4, 'Negro', 'Rush');


let animalesDeMarian:Animal[] = new Array();

animalesDeMarian.push(gato);
animalesDeMarian.push(perro);
animalesDeMarian.push(gato2);
animalesDeMarian.push(perro2);

animalesDeMarian.forEach(animal => {
    console.log(animal.getNombre());
});
