function buscaLinear(array, alvo) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === alvo) {
      return i; 
    }
  }
  return -1; 
}

const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7]; 
const alvo = 20; 

const indiceEncontrado = buscaLinear(array, alvo);

if (indiceEncontrado !== -1) {
  console.log(`O valor ${alvo} foi encontrado no índice ${indiceEncontrado}.`);
} else {
  console.log(`O valor ${alvo} não foi encontrado no array.`);
}
