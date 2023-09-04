const roupa = {
    tamanho: "grande",
    cor: "azul",
    estacao: "inverno"
};
const novaRoupa = {
    ...roupa,
    idade: 10
}; 
console.log(novaRoupa);

const numeros = [1,2,3,4,5,6];
const novoNumeros = [0,...numeros,7];

console.log(novoNumeros);

const [one,...rest] = novoNumeros;
console.log(one);
console.log(rest); 