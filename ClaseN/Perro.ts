import { Animal } from "./Animal";

export class Perro extends Animal{

    constructor(patas: number, color: string, nombre?:string ){
        super(patas, color, nombre);
    }
    
    emitirSonido(): void {
        console.log('ladrar')
    } 
}