// Definindo uma função para criar uma pessoa
function criarPessoa(nome, salario, idade, possuiDiploma) {
    return {
      nome: nome,
      salario: salario,
      idade: idade,
      possuiDiploma: possuiDiploma,
    };
  }
  
  // Exemplos de cadastro de pessoas
  const pessoa1 = criarPessoa("João", 50000, 30, true);
  const pessoa2 = criarPessoa("Maria", 60000, 25, false);
  const pessoa3 = criarPessoa("Carlos", 75000, 35, true);
  
  // Exibindo os dados das pessoas
  console.log("Pessoa 1:");
  console.log("Nome:", pessoa1.nome);
  console.log("Salário:", pessoa1.salario);
  console.log("Idade:", pessoa1.idade);
  console.log("Possui diploma:", pessoa1.possuiDiploma);
  
  console.log("\nPessoa 2:");
  console.log("Nome:", pessoa2.nome);
  console.log("Salário:", pessoa2.salario);
  console.log("Idade:", pessoa2.idade);
  console.log("Possui diploma:", pessoa2.possuiDiploma);
  
  console.log("\nPessoa 3:");
  console.log("Nome:", pessoa3.nome);
  console.log("Salário:", pessoa3.salario);
  console.log("Idade:", pessoa3.idade);
  console.log("Possui diploma:", pessoa3.possuiDiploma);
  