import { endereco } from "./model/endereco.js";
import { agencia } from "./model/agencia.js";
import { cliente } from "./model/cliente.js";
import { conta } from "./model/conta.js";

let ender = new endereco(pe, "Recife", "são josé", "rua da guia", 1000, 305, "500-050");
let agen = new agencia("softex", 1234, "8134546798", "agsoftex@banco.com", endereco);
let cli = new cliente("claudio", 81987184655);
