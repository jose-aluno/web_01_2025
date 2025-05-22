export class PessoaEntity {
    id: number
    nome: string
    idade: number
    email: string

    constructor (
        id: number | undefined,
        nome: string,
        idade: number,
        email: string
    )
    {
        this.id = id ?? 1
        this.nome = nome
        this.idade = idade
        this.email = email
    }

    private gerarId(): number {
        return parseInt((Date.now() /100).toString(), 10)
    }
}