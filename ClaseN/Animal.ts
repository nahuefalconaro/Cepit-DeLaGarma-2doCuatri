import { Persona } from "../Clase1/Persona";
export class Animal{

    private patas: number;
    private color: string;
    private nombre?: string;
    private variable: string;
    private duenio: Persona;

    constructor(patas: number, color: string, persona:Persona, nombre?:string){
        this.patas = patas;
        this.color = color;
        this.nombre = nombre;
        this.duenio = persona;
    }

    correr():void{
        console.log('Corriendo...');
    }

    comer():void{
        console.log('Comiendo...');
    }

    emitirSonido(){
        console.log('Sonido generico')
    }

    getNombre():string{
        return this.nombre || 'No tiene nombre';
    }
    getVariable():string{
        return this.variable;
    }
    setVariable(v:string){
        this.variable = v;
    }
}