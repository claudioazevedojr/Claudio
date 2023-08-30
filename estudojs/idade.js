const prompt = require('prompt-sync')();

do{
    
    data=0;
    var nome= prompt("Informe o seu nome completo: ");
    var data= parseInt(prompt("Informe o seu ano de nascimento, com 4 dígitos(ex: 1990): ")); 
    if (data >= 1922 && data <= 2022 ){
        data = 2023 - data;
        console.log("Seu nome é: ", nome);
        console.log("esse ano você vai completar ou completou: ", data);
    }
    else {
        console.log("A data informada está incorreta! Tente novamente");
    }
    
    op=prompt(console.log("Deseja continuar? SIM ou NÃO: ")).toUpperCase();
    }while(op=== "SIM");
        console.log("Programa encerrado! ");
