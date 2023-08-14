import { Animal } from "./Animal";

export class Gato extends Animal{


    private lamerse:boolean;

    constructor(patas: number, color: string, nombre?:string ){
        super(patas, color, nombre);
    }

    emitirSonido(): void {
        console.log('maullear')
    }

    getNombre(): string {
        return super.getNombre() + 'soy un gato';
    }
}