export class ErrorUsuario extends Error {
    public constructor() {
        super();
        this.message = 'Error por tal cosa del usuario'
        this.name = 'ErrorNahuelDeLaGarma';
    }
 }
 