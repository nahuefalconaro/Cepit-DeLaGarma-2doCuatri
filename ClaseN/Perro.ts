import { Persona } from "../Clase1/Persona";
import { Animal } from "./Animal";

export class Perro extends Animal{

    constructor(patas: number, color: string, persona:Persona, nombre?:string ){
        super(patas, color, persona, nombre);
    }
    
    emitirSonido(): void {
        console.log('ladrar')
    } 
}