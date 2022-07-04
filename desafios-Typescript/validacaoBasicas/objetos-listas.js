"use strict";
var andre = {
    nome: 'string',
    idade: Number,
    profissao: 'string'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 25,
    profissao: Profissao.Desenvolvedora
};
const Alex = {
    nome: 'Alexia',
    idade: 25,
    profissao: Profissao.JogadoraDeFutebol
};
const jessica = {
    nome: 'jessica',
    idade: 45,
    profissao: Profissao.Professora,
    materias: ['ingles', 'matematica', 'programacao']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(jessica.materias);
