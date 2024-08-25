//Desafía final 
//Escribe un programa que reciba un arreglo de números y retorne un nuevo arreglo con solo los números pares utilizando funciones.

function numerospares(numeros) {
    return numeros.filter(function(numeros) {
            return numeros % 2 ==0;
    })
}

let numeros = [1,2,3,4,5,6,7,8,9,10];
console.log(numerospares(numeros))