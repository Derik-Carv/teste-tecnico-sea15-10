import { ValidatorSea } from "./index";

const numberCel = "21912345678";
const cpf = "123.456.789-09";
const cnpj = "12.345.678/0001-95";
const cep = "01001-000";

console.table({
    Celular: { 
        Formatado: ValidatorSea.mascaraCel(numberCel), 
        Valido: ValidatorSea.validoCel(numberCel) 
    },
    CPF: { 
        Formatado: ValidatorSea.mascaraCPF(cpf), 
        Valido: ValidatorSea.validoCPF(cpf) 
    },
    CNPJ: { 
        Formatado: ValidatorSea.mascaraCNPJ(cnpj), 
        Valido: ValidatorSea.validoCNPJ(cnpj)
    },
    CEP: { 
        Formatado: ValidatorSea.mascaraCEP(cep), 
        Valido: ValidatorSea.validoCEP(cep)
    }
});