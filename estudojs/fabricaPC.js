class Computador {
    constructor(ram, hdd, cpu, Tipo) {
      this.ram = ram;
      this.hdd = hdd;
      this.cpu = cpu;
      this.Tipo = Tipo;
    }
  
    resultado() {
      return `Tipo: ${this.Tipo}, RAM: ${this.ram} GB, HDD: ${this.hdd} GB, CPU: ${this.cpu} GHz`;
    }
  }
  
  
  class PC extends Computador {
    constructor(ram, hdd, cpu) {
      super(ram, hdd, cpu, 'PC');
    }
  }
  
  
  class Server extends Computador {
    constructor(ram, hdd, cpu) {
      super(ram, hdd, cpu, 'Server');
    }
  }
  
  
  class montarMaquina {
    createComputador(Tipo, ram, hdd, cpu) {
      if (Tipo === 'PC') {
        return new PC(ram, hdd, cpu);
      } else if (Tipo === 'Server') {
        return new Server(ram, hdd, cpu);
      } else {
        throw new Error('Tipo de computador não disponivel');
      }
    }
  }
  
  
  const criar = new montarMaquina();
  const pc = criar.createComputador('PC', 16, 512, 2.8);
  const server = criar.createComputador('Server', 32, 1000, 3.2);
  
  console.log(pc.resultado());
  console.log(server.resultado());
  