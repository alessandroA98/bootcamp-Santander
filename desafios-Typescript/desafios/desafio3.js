"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
campoSaldo.innerHTML = '';
function somarAoSaldo(soma) {
    campoSaldo.innerHTML += soma;
}
function limparSaldo() {
    campoSaldo.innerHTML = '';
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        if (soma) {
            somarAoSaldo(Number(soma.value));
        }
    });
}
if (botaoLimpar) {
    botaoLimpar.addEventListener('click', () => {
        limparSaldo();
    });
}
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */ 
