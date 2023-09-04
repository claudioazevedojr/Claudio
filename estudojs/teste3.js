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

