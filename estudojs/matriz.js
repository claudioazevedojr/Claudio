// Definindo uma matriz bidimensional para armazenar informações sobre animais
const animais = [
    ["Leão", "Felino", 5],
    ["Elefante", "Mamífero", 10],
    ["Girafa", "Mamífero", 7],
    ["Tigre", "Felino", 4],
    ["Zebra", "Mamífero", 6]
  ];
  
  // Acessando e imprimindo informações sobre os animais
  for (let i = 0; i < animais.length; i++) {
    const animal = animais[i];
    const nome = animal[0];
    const especie = animal[1];
    const idade = animal[2];
  
    console.log(`Animal ${i + 1}:`);
    console.log(`Nome: ${nome}`);
    console.log(`Espécie: ${especie}`);
    console.log(`Idade: ${idade}`);
    console.log("--------------");
  }
  