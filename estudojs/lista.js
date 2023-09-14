 

class Pessoa { 

    constructor(nome, idade) { 

      this.nome = nome; 

      this.idade = idade; 

      this.filho = null; // Inicialmente, não há referência a um filho 

      this.proximo = null; // Inicialmente, o próximo nó é nulo 

    } 

   

      adicionarFilho(filho) { 

      this.filho = filho; 

    } 

  } 

   

  const pessoa1 = new Pessoa("Cláudio", 42); 

  const pessoa2 = new Pessoa("Gabriel", 30); 

  const pessoa3 = new Pessoa("Bruna", 20); 

  const pessoa4 = new Pessoa("Andre", 1); 

   

   

  pessoa1.adicionarFilho(pessoa2); 

  pessoa2.adicionarFilho(pessoa3); 

  pessoa3.adicionarFilho(pessoa4); 

 

    console.log("Nome: " + pessoa1.nome + ", Idade: " + pessoa1.idade); 

  if (pessoa1.filho) { 

    console.log("Filho: " + pessoa1.filho.nome); 

  } 