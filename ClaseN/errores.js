"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorCustom_1 = require("./ErrorCustom");
function sumarValores(valores) {
    if (valores.length == 0)
        throw new ErrorCustom_1.CustomError('No se pueden sumar los valores de un arreglo vacío');
    var sumaTotal = 0;
    for (var i = 0; i < valores.length; i++)
        sumaTotal += valores[i];
    return sumaTotal;
}
var valores = [];
var resultado;
try {
    resultado = sumarValores(valores);
}
catch (error) {
    console.log(error.message, 'MENSAJE');
    console.log(error.name, 'NAME');
    console.log('Ocurrió un error esperado, seteando resultado en 0');
    resultado = 0;
}
console.log(resultado);
