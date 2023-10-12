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
  
  
  class Servidor extends Computador {
    constructor(ram, hdd, cpu) {
      super(ram, hdd, cpu, 'Servidor');
    }
  }
  
  
  class montarMaquina {
    createComputador(Tipo, ram, hdd, cpu) {
      if (Tipo === 'PC') {
        return new PC(ram, hdd, cpu);
      } else if (Tipo === 'Servidor') {
        return new Servidor(ram, hdd, cpu);
      } else {
        throw new Error('Tipo de computador não disponivel');
      }
    }
  }
  
  
  const criar = new montarMaquina();
  const pc = criar.createComputador('PC', 16, 512, 2.8);
  const servidor = criar.createComputador('Servidor', 32, 1000, 3.2);
  
  console.log(pc.resultado());
  console.log(servidor.resultado());
  