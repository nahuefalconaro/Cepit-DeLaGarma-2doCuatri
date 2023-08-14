"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Gato_1 = require("./Gato");
var Perro_1 = require("./Perro");
var gato = new Gato_1.Gato(4, 'naranja', 'Sheldon');
var gato2 = new Gato_1.Gato(4, 'gris', 'Leonard');
var perro = new Perro_1.Perro(4, 'Marron');
var perro2 = new Perro_1.Perro(4, 'Negro', 'Rush');
var animalesDeMarian = new Array();
animalesDeMarian.push(gato);
animalesDeMarian.push(perro);
animalesDeMarian.push(gato2);
animalesDeMarian.push(perro2);
animalesDeMarian.forEach(function (animal) {
    console.log(animal.getNombre());
});
