function criarPessoas(nome, salario, idade, diploma) {
    return{
        nome:nome,
        salario:salario,
        idade:idade,
        diploma:diploma,
    };
}

const pessoa1 = criarPessoas("Cláudio", 3000, 42, true);
const pessoa2 = criarPessoas("José", 2000, 35, false);
const pessoa3 = criarPessoas("Ana", 3500, 25, true);

console.log("\nPessoa 1: ");
console.log("Nome: ", pessoa1.nome); 
console.log("Salário: ", pessoa1.salario); 
console.log("Idade: ", pessoa1.idade);
console.log("Possui Diploma: ", pessoa1.diploma); 

console.log("\nPessoa 2: ");
console.log("Nome: ", pessoa2.nome); 
console.log("Salário: ", pessoa2.salario); 
console.log("Idade: ", pessoa2.idade);
console.log("Possui Diploma: ", pessoa2.diploma); 

console.log("\nPessoa 3: ");
console.log("Nome: ", pessoa3.nome); 
console.log("Salário: ", pessoa3.salario); 
console.log("Idade: ", pessoa3.idade);
console.log("Possui Diploma: ", pessoa3.diploma); 