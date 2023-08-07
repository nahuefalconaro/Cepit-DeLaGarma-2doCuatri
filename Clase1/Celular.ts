import { Procesador } from "./Procesador";
class Celular{

    private pantallaTamanio:number;
    private marca:string;
    private memoria: number;
    private procesador: Procesador;

    constructor(procesador: Procesador){
        this.procesador = procesador;
    }

    getTipoProcesador(){
        return this.procesador.getVelocidad() + this.procesador.getNucleos();
    }
}