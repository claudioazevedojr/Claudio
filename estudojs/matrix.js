const animais = [
    ["gato", "Felino", 5],
    ["cachorro", "Mamífero", 10],
    ["coelho", "Mamífero", 7],
    ["Tigre", "Felino", 4],
    ["vaca", "Mamífero", 6]
  ];

  for (let i = 0; i < animais.length; i++) {
    const animal = animais[i];
    const nome = animal[0];
    const especie = animal[1];
    const idade = animal[2];
  
    console.log(`Animal ${i+1}:`);
    console.log(`Nome: ${nome}`);
    console.log(`Espécie: ${especie}`);
    console.log(`Idade: ${idade}`);
    console.log("--------------");
  };
