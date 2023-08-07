export class Procesador{

    private velocidad:number;
    private nucleos:number;

    constructor(velocidad:number, nucleos:number){
        this.velocidad = velocidad;
        this.nucleos = nucleos;
    }

    getVelocidad(){
        return this.velocidad;
    }

    getNucleos(){
        return this.nucleos;
    }

    private cantNucleos(){
        return 8;
    }
}