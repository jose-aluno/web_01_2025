import { parse } from "path";
import { PessoaEntity } from "../model/PessoaEntity";
import { PessoaRepository } from "../repository/PessoaRepository";

export class PessoaService {
    private PessoaRepository = PessoaRepository.getInstance();

    novaPessoa(data: any): PessoaEntity {
        if (!data.nome || !data.idade || !data.email) {
            throw new Error("Campos obrigatórios não preenchidos");
        }

        const idade = parseInt(data.idade, 10);
        const pessoa = new PessoaEntity(undefined, data.nome, data.idade, data.email);
        this.PessoaRepository.inserePessoa(pessoa);

        return pessoa;
    }

    removePessoa(data: any){
        const id = parseInt(data.id,10)
        this.PessoaRepository.removePessoaPorId(id);
    }
}