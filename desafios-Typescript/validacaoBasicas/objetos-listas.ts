
var andre = {
    nome: 'string',
    idade: Number,
    profissao: 'string'
}
enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    JogadoraDeFutebol
}
interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa{
    materias: string[]

}

const vanessa: Pessoa = {
    nome:'Vanessa',
    idade: 25,
    profissao: Profissao.Desenvolvedora
}
const Alex: Pessoa = {
    nome:'Alexia',
    idade: 25,
    profissao: Profissao.JogadoraDeFutebol
}

const jessica: Estudante = {
    nome:'jessica',
    idade: 45,
    profissao:Profissao.Professora,
    materias:['ingles', 'matematica','programacao']
}

function listar(lista:string[]){
    for(const item of lista){
        console.log('- ', item)
    }
}
listar(jessica.materias)