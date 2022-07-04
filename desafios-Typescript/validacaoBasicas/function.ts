//~~~~~Aqui eu transformei um numero em uma string e nao foi apontado erro, uma solucao é o modo abaixo que na funcao ja fala que são numeros

// function somarValor(numero1:number, numero2:number){
//     return numero1 + numero2.toString()
// }

// console.log(somarValor(5, 3))

function somarValor(numero1:number, numero2:number):number{//aqui ja foi falado que é numero e me mostra que eu possivelmente errei ao colocat .tostring em um numero e para eu tirar ele e formar novamente um numero
    return numero1 + numero2
    // Codigo antigo >> return numero1 + numero2.toString()
}

console.log(somarValor(5, 3))


function printValores(numero1:number, numero2:number):void{//quando a funcao nao tiver return e somente retornar um console.log
    console.log(numero1, numero2)
}

function somarValoresETratar(numero1: number, numero2: number, callback:(numero:number) => number): number {
    let resultado = numero1 + numero2;
    return callback(resultado)
}

function aoQuadrado(numero1:number): number
{
    return numero1 * numero1;
}

console.log(somarValoresETratar(4, 2, aoQuadrado))

function dividirPorEleMesmo(numero1:number):number{
    return numero1 / numero1
}
console.log(somarValoresETratar(4, 2, dividirPorEleMesmo))
