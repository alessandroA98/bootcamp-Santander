let anyDeVolta: any;
anyDeVolta = 'so'
anyDeVolta = true;
anyDeVolta = 5;

let stringTeste = 'verificar';
stringTeste = anyDeVolta;

let valorUnknown: unknown
valorUnknown = 5;
valorUnknown = 'string';
valorUnknown = true;
valorUnknown = 'vai sim'

let stringTeste2: string = 'agora vai';

if (typeof valorUnknown === 'string') {//o unknown tem que fazer uma validacao por condicional diferente de o any que pode ser atribuido a uma string o uknown tem que verificar se é igual o tipo da string que é para ser guardado na variavel.
    stringTeste2 = valorUnknown
}
//~~~~~~ funcao para jogar erro abaixo

function jogaErro(erro: string, codigo: number):never {//esse é um tipo void tambem pois nao retorna nada, mas tambem é um never pois ele foi interrompido, se tivesse algum codigo apos o throw ele nunca iria rodar, pois o throw interromperia antes.
    throw {error: erro, code: codigo}
}
jogaErro('deu erro aqui', 171)