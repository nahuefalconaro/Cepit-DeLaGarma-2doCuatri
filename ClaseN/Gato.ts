import { Persona } from "../Clase1/Persona";
import { Animal } from "./Animal";

export class Gato extends Animal{


    private lamerse:boolean;

    constructor(patas: number, color: string, persona:Persona, nombre?:string ){
        super(patas, color, persona,nombre);
    }

    emitirSonido(): void {
        console.log('maullear')
    }

    getNombre(): string {
        return super.getNombre() + 'soy un gato';
    }
}