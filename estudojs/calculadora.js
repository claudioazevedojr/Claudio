const prompt = require('prompt-sync')();

var nun1= 0; 
var nun2= 0;
var opera= 0;
var result= 0;

console.log("Bem vindo a calculadora! ");

nun1 = parseInt(prompt("Digite o 1° número: "));
nun2 = parseInt(prompt("Digite o 2° número: "));
console.log("1 - SOMA" );
console.log("2 - SUBTRAÇÃO");
console.log("3 - MULTPLICAÇÃO" );
console.log("4 - DIVISÃO" );
console.log("0 - SAIR" );
var opera = prompt("Escolha a operação: ");

switch(opera){

    case '1':
        result = nun1 + nun2;
        console.log("O resultado da SOMA é: ", result);
        break;
        
    case '2':
        result = nun1 - nun2;
        console.log("O resultado da SUBTRAÇÃO é: ", result);
        break;
        
    case '3':
        result = nun1 * nun2;
        console.log("O resultado da MULTPLICAÇÃO é: ", result);
        break;
        
    case '4':
        result = nun1 / nun2;
        console.log("O resultado da DIVISÃO é: ", result);
        break;
        
    case '0':
        console.log("PROGRAMA FINALIZADO!");
        break;
        
    default:
        console.log("Operador invalido");
        break;
    }