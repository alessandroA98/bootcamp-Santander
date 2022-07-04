"use strict";
let anyDeVolta;
anyDeVolta = 'so';
anyDeVolta = true;
anyDeVolta = 5;
let stringTeste = 'verificar';
stringTeste = anyDeVolta;
let valorUnknown;
valorUnknown = 5;
valorUnknown = 'string';
valorUnknown = true;
valorUnknown = 'vai sim';
let stringTeste2 = 'agora vai';
if (typeof valorUnknown === 'string') { //o unknown tem que fazer uma validacao por condicional diferente de o any que pode ser atribuido a uma string o uknown tem que verificar se é igual o tipo da string que é para ser guardado na variavel.
    stringTeste2 = valorUnknown;
}
//~~~~~~ funcao para jogar erro abaixo
function jogaErro(erro, codigo) {
    throw { error: erro, code: codigo };
}
jogaErro('deu erro aqui', 171);
