class Computer {
    constructor(ram, hdd, cpu, type) {
      this.ram = ram;
      this.hdd = hdd;
      this.cpu = cpu;
      this.type = type;
    }
  
    resultado() {
      return `Type: ${this.type}, RAM: ${this.ram} GB, HDD: ${this.hdd} GB, CPU: ${this.cpu} GHz`;
    }
  }
  
  
  class PC extends Computer {
    constructor(ram, hdd, cpu) {
      super(ram, hdd, cpu, 'PC');
    }
  }
  
  
  class Server extends Computer {
    constructor(ram, hdd, cpu) {
      super(ram, hdd, cpu, 'Server');
    }
  }
  
  
  class ComputerFactory {
    createComputer(type, ram, hdd, cpu) {
      if (type === 'PC') {
        return new PC(ram, hdd, cpu);
      } else if (type === 'Server') {
        return new Server(ram, hdd, cpu);
      } else {
        throw new Error('Tipo de computador não disponivel');
      }
    }
  }
  
  
  const factory = new ComputerFactory();
  const pc = factory.createComputer('PC', 8, 512, 2.4);
  const server = factory.createComputer('Server', 32, 1000, 3.2);
  
  console.log(pc.resultado());
  console.log(server.resultado());
  