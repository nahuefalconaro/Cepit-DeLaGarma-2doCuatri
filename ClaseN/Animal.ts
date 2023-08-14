export class Animal{

    private patas: number;
    private color: string;
    private nombre?: string;
    private variable: string;

    constructor(patas: number, color: string, nombre?:string){
        this.patas = patas;
        this.color = color;
        this.nombre = nombre;
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