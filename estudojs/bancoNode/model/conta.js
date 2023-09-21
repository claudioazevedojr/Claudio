import { TIPOTRANSACAO } from "./tipoTransacao";
import { transacao } from "./transacao";

export class conta{
    constructor(cliente, numero, agencia, saldo){
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.dataCriacao = new Date().toLocaleDateString();
        this.saldo = saldo;
        this.status = true;
        this.transacoes = [];
    }
    //metodo deposito
    depositar(valor){
        this.saldo += valor;
        let tras = new transacao(TIPOTRANSACAO.creditar, new Date().toLocaleDateString(), valor, null, '+');
        this.transacoes.push(tras);
    }
    //metodo sacar
    sacar(valor){
        if(this.saldo <= valor){
        this.saldo -= valor;
        let tras = new transacao(TIPOTRANSACAO.debitar, new Date().toLocaleDateString(), valor, null, '-');
        this.transacoes.push(tras);
         } else
        console.log('saldo insuficiente');
    }
}



