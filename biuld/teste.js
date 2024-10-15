"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const numberCel = "21912345678";
const cpf = "123.456.789-09";
const cnpj = "12.345.678/0001-95";
const cep = "01001-000";
console.table({
    Celular: {
        Formatado: index_1.ValidatorSea.mascaraCel(numberCel),
        Valido: index_1.ValidatorSea.validoCel(numberCel)
    },
    CPF: {
        Formatado: index_1.ValidatorSea.mascaraCPF(cpf),
        Valido: index_1.ValidatorSea.validoCPF(cpf)
    },
    CNPJ: {
        Formatado: index_1.ValidatorSea.mascaraCNPJ(cnpj),
        Valido: index_1.ValidatorSea.validoCNPJ(cnpj)
    },
    CEP: {
        Formatado: index_1.ValidatorSea.mascaraCEP(cep),
        Valido: index_1.ValidatorSea.validoCEP(cep)
    }
});
