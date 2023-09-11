// Definindo a classe Pessoa para representar cada nó da lista encadeada
class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
      this.filho = null; // Inicialmente, não há referência a um filho
      this.proximo = null; // Inicialmente, o próximo nó é nulo
    }
  
    // Método para adicionar um filho a esta pessoa
    adicionarFilho(filho) {
      this.filho = filho;
    }
  }
  
  // Criando instâncias de pessoas
  const pessoa1 = new Pessoa("Cláudio", 42);
  const pessoa2 = new Pessoa("Gabriel", 30);
  const pessoa3 = new Pessoa("Bruna", 20);
  const pessoa4 = new Pessoa("Andre", 1);
  
  // Estabelecendo referências aos filhos
  pessoa1.adicionarFilho(pessoa2);
  pessoa2.adicionarFilho(pessoa3);
  pessoa3.adicionarFilho(pessoa4);
  
  // Imprimindo informações
  console.log("Nome: " + pessoa1.nome + ", Idade: " + pessoa1.idade);
  if (pessoa1.filho) {
    console.log("Filho: " + pessoa1.filho.nome);
  }
  
  console.log("Nome: " + pessoa2.nome + ", Idade: " + pessoa2.idade);
  if (pessoa2.filho) {
    console.log("Filho: " + pessoa2.filho.nome);
  }
  
  console.log("Nome: " + pessoa3.nome + ", Idade: " + pessoa3.idade);
  if(pessoa3.filho){
    console.log("Filho: " + pessoa3.filho.nome);
  }
