var voto=0; 
var candX=0; 
var candY=0; 
var candZ=0;
var branco=0; 
var maior=0;
var nulo=0;  

do{

console.log("Bem vindo a eleição: ");
console.log("candidato X => 889");
console.log("candidato Y => 847");
console.log("candidato Z => 515");
console.log("branco => 0");

var voto = parseInt(prompt("Digite o número do seu candidato: "));

switch(voto){

    case 889:
        candX += 1;
        break;
    case 847:
        candY += 1;
        break;
    case 515:
        candZ += 1;
        break;
    case 0:
        branco += 1;
        console.log("Voto em branco! ");
        break;
    default:
        nulo += 1;
        console.log("Voto nulo! ");
        break;
    }
    
    op=prompt("Deseja continuar a votação? SIM ou NÃO: ").toUpperCase();
    
}
while(op=== "SIM");
  
    console.log("Votação encerrada! ");
    console.log("candX: ", candX);
    console.log("candY: ", candY);
    console.log("candZ: ", candZ);
    console.log("votos brancos: ", branco);
    console.log("votos nulos: ", nulo);
if(candX > candY && candX > candZ){
	console.log("Candidado X foi o vencedor!");
}else if(candY > candX && candY > candZ){
	console.log("Candidado Y foi o vencedor!");
}else if(candZ > candX && candZ > candY){
	console.log("Candidado Z foi o vencedor!");
}else 
	console.log("Votação empatada!");