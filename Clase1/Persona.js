"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombreNuevo) {
        this.nombre = nombreNuevo;
    };
    Persona.prototype.getNombreCompleto = function () {
        return this.getNombre(); //getApellido
    };
    Persona.prototype.getEdad = function () {
        this.calcularEdad();
        return this.edad;
    };
    Persona.prototype.getAltura = function () {
        return this.altura;
    };
    Persona.prototype.setAltura = function (alturaNueva) {
        this.altura = alturaNueva;
    };
    Persona.prototype.calcularEdad = function () {
        //hace algo
    };
    Persona.prototype.getIsMenor = function () {
        if (this.edad < 18) {
            return true;
        }
        else {
            return false;
        }
    };
    Persona.prototype.cumplirAnios = function () {
        this.edad++;
    };
    return Persona;
}());
exports.Persona = Persona;
