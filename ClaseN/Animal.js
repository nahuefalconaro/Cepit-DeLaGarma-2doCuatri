"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(patas, color, nombre) {
        this.patas = patas;
        this.color = color;
        this.nombre = nombre;
    }
    Animal.prototype.correr = function () {
        console.log('Corriendo...');
    };
    Animal.prototype.comer = function () {
        console.log('Comiendo...');
    };
    Animal.prototype.emitirSonido = function () {
        console.log('Sonido generico');
    };
    Animal.prototype.getNombre = function () {
        return this.nombre || 'No tiene nombre';
    };
    return Animal;
}());
exports.Animal = Animal;
