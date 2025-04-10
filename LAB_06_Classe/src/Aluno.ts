export class Aluno{
    nome: string
    matricula: string
    idade: number

    constructor(nome: string, matricula: string, idade:number){
        this.nome = nome
        this.matricula = matricula
        this.idade = idade
    }

    imprimiAluno(){
        console.log(`Nome: ${this.nome}
            Matrícula: ${this.matricula}
            Idade: ${this.idade}`)
    }
}