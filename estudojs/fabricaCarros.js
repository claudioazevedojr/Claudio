// Classe abstrata Veículo
function Veiculo(modelo, marca, cor, numeroRodas) {
    this.modelo = modelo;
    this.marca = marca;
    this.cor = cor;
    this.numeroRodas = numeroRodas;
  }
  
  // Método clone para a classe Veículo
  Veiculo.prototype.clone = function () {
    return new this.constructor(this.modelo, this.marca, this.cor, this.numeroRodas);
  };
  
  // Método represent para a classe Veículo
  Veiculo.prototype.represent = function () {
    return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Número de Rodas: ${this.numeroRodas}`;
  };
  
  // Subclasse Carro
  function Carro(modelo, marca, cor, numeroRodas, numeroPortas) {
    Veiculo.call(this, modelo, marca, cor, numeroRodas);
    this.numeroPortas = numeroPortas;
  }
  
  // Herda os protótipos de Veículo
  Carro.prototype = Object.create(Veiculo.prototype);
  Carro.prototype.constructor = Carro;
  
  // Método represent específico para Carro
  Carro.prototype.represent = function () {
    return `${Veiculo.prototype.represent.call(this)}, Número de Portas: ${this.numeroPortas}`;
  };
  
  // Subclasse Moto
  function Moto(modelo, marca, cor, numeroRodas, cilindradas) {
    Veiculo.call(this, modelo, marca, cor, numeroRodas);
    this.cilindradas = cilindradas;
  }
  
  // Herda os protótipos de Veículo
  Moto.prototype = Object.create(Veiculo.prototype);
  Moto.prototype.constructor = Moto;
  
  // Método represent específico para Moto
  Moto.prototype.represent = function () {
    return `${Veiculo.prototype.represent.call(this)}, Cilindradas: ${this.cilindradas}`;
  };
  
  // Classe Aplicação
  function Aplicacao() {
    this.veiculos = [
      new Carro('Sedan', 'Ford', 'Prata', 4, 4),
      new Moto('Sport', 'Honda', 'Vermelha', 2, 600),
      new Carro('SUV', 'Toyota', 'Azul', 4, 5),
      new Moto('Cruiser', 'Harley-Davidson', 'Preto', 2, 1200),
      new Carro('Hatchback', 'Volkswagen', 'Branco', 4, 3),
      new Moto('Sport', 'Yamaha', 'Azul', 2, 800)
    ];
  }
  
  // Método para clonar os veículos
  Aplicacao.prototype.clonarVeiculos = function () {
    return this.veiculos.map(function (veiculo) {
      return veiculo.clone();
    });
  };
  
  // Método para imprimir os veículos clonados
  Aplicacao.prototype.imprimirVeiculosClonados = function () {
    const veiculosClonados = this.clonarVeiculos();
    veiculosClonados.forEach(function (veiculo) {
      console.log(veiculo.represent());
    });
  };
  
  // Executa a aplicação
  const app = new Aplicacao();
  app.imprimirVeiculosClonados();
  