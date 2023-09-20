const prompt = require('prompt-sync')();

var nun1= 0; 
var nun2= 0;
var opera= 0;
var result= 0;
var resto=0;

console.log("Bem vindo a calculadora! ");

nun1 = parseInt(prompt("Digite o 1° número: "));
nun2 = parseInt(prompt("Digite o 2° número: "));
console.log("+ - SOMA" );
console.log("- - SUBTRAÇÃO");
console.log("* - MULTPLICAÇÃO");
console.log("/ - DIVISÃO");
console.log("0 - SAIR" );
var opera = prompt("Escolha a operação: ");

switch(opera){

    case "+":
        result = nun1 + nun2;
        console.log("O resultado da SOMA é: ", result);
        break;
        
    case '-':
        result = nun1 - nun2;
        console.log("O resultado da SUBTRAÇÃO é: ", result);
        break;
        
    case '*':
        result = nun1 * nun2;
        console.log("O resultado da MULTPLICAÇÃO é: ", result);
        break;
        
    case '/':
        result = Math.floor(nun1 / nun2);
        resto = (nun1 % nun2) ; 
        console.log("O resultado da DIVISÃO é: ", result);
        console.log("O resto da DIVISÃO é: ", resto);
        break;
        
    case '0':
        console.log("PROGRAMA FINALIZADO!");
        break;
        
    default:
        console.log("Operador invalido");
        break;
    }