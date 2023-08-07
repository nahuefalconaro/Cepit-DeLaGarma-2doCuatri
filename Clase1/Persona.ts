export class Persona{//clase

    private nombre: string;//atributos - estado
    private edad: number;
    private altura:number;
    private apellido: string;
    private dni: number;

    constructor(nombre:string, edad:number){//creador de una instancia de mi clase, seria el molde de la torta
        this.nombre = nombre;
        this.edad = edad;
    }

    getNombre(): string{
        return this.nombre;
    }
    setNombre(nombreNuevo: string){
        this.nombre = nombreNuevo;
    }
    getNombreCompleto(): string{
        return this.getNombre()//getApellido
    }
    getEdad():number{
        this.calcularEdad()
        return this.edad;
    }
    getAltura(): number{
        return this.altura;
    }

    setAltura(alturaNueva: number){
        this.altura = alturaNueva;
    }
    private calcularEdad(){
        //hace algo
    }
    getIsMenor(): boolean{
        if(this.edad < 18){
            return true;
        }else{
            return false;
        }
    }

    cumplirAnios(){
        this.edad++;
    }
}

