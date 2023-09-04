//Destructuring assignment - Atribuição de desestruturação
const prompt = require("prompt-sync")()

const produto = {
    tamanho: "grande",
    valor: 32,
    categoria: "verão"
};
const novoProduto = {
    ...produto,
    idade: 10
};
console.log(novoProduto); 
//------------------------------------------------
const valores = [1,2,3,4,5,6,7,8,9,10];
const novosValores = [0,...valores,11];
console.log(novosValores);

const [one,...rest] = valores;
console.log(one); 
console.log(rest); 