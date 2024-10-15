"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatorSea = void 0;
class ValidatorSea {
    static ddd = {
        '11': 'São Paulo', '12': 'São Paulo', '13': 'São Paulo', '14': 'São Paulo',
        '15': 'São Paulo', '16': 'São Paulo', '17': 'São Paulo', '18': 'São Paulo',
        '19': 'São Paulo', '21': 'Rio de Janeiro', '22': 'Rio de Janeiro', '24': 'Rio de Janeiro',
        '27': 'Espírito Santo', '28': 'Espírito Santo',
        '31': 'Minas Gerais', '32': 'Minas Gerais', '33': 'Minas Gerais', '34': 'Minas Gerais',
        '35': 'Minas Gerais', '37': 'Minas Gerais', '38': 'Minas Gerais',
        '41': 'Paraná', '42': 'Paraná', '43': 'Paraná', '44': 'Paraná', '45': 'Paraná', '46': 'Paraná',
        '47': 'Santa Catarina', '48': 'Santa Catarina', '49': 'Santa Catarina',
        '51': 'Rio Grande do Sul', '53': 'Rio Grande do Sul',
        '54': 'Rio Grande do Sul', '55': 'Rio Grande do Sul',
        '61': 'Goiás e Distrito Federal', '62': 'Goiás', '63': 'Tocantins', '64': 'Goiás',
        '65': 'Mato Grosso', '66': 'Mato Grosso', '67': 'Mato Grosso do Sul', '68': 'Acre', '69': 'Rondônia',
        '71': 'Salvador', '73': 'Salvador', '74': 'Salvador', '75': 'Salvador', '77': 'Salvador',
        '79': 'Sergipe', '81': 'Pernambuco', '82': 'Alagoas', '83': 'Paraíba', '84': 'Rio Grande do Norte',
        '85': 'Ceará', '86': 'Piauí', '87': 'Pernambuco', '88': 'Ceará', '89': 'Piauí',
        '91': 'Pará', '92': 'Amazonas', '93': 'Pará', '94': 'Pará', '95': 'Roraima',
        '96': 'Amapá', '97': 'Amazonas', '98': 'Maranhão', '99': 'Maranhão'
    };
    static mascaraCel(numberCel) {
        return numberCel.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    static validoCel(numberCel) {
        const regex = /^\(?([1-9]{2})\)? ?9[1-9]\d{3}-?\d{4}$/;
        return regex.test(numberCel) && this.ddd[numberCel.slice(0, 2)] !== undefined;
    }
    static mascaraCPF(cpf) {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d)/, '$1.$2.$3-$4');
    }
    static validoCPF(cpf) {
        const clean = cpf.replace(/\D/g, '');
        if (clean.length !== 11)
            return false;
        const sum1 = clean.split('').slice(0, 9).reduce((acc, digit, index) => acc + parseInt(digit) * (10 - index), 0);
        const firstDigit = (sum1 * 10) % 11 === 10 ? 0 : (sum1 * 10) % 11;
        const sum2 = clean.split('').slice(0, 10).reduce((acc, digit, index) => acc + parseInt(digit) * (11 - index), 0);
        const secondDigit = (sum2 * 10) % 11 === 10 ? 0 : (sum2 * 10) % 11;
        return clean[9] === String(firstDigit) && clean[10] === String(secondDigit);
    }
    static mascaraCNPJ(cnpj) {
        return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d)/, '$1.$2.$3/$4-$5');
    }
    static digitoValido = (sum) => {
        const result = sum % 11;
        return result < 2 ? 0 : 11 - result;
    };
    static validoCNPJ(cnpj) {
        const clean = cnpj.replace(/\D/g, '');
        if (clean.length !== 14)
            return false;
        const firstDigits = clean.slice(0, 12);
        let sum1 = 0, weight = 5;
        for (let i = 0; i < firstDigits.length; i++) {
            sum1 += parseInt(firstDigits[i]) * weight;
            weight = weight === 2 ? 9 : weight - 1;
        }
        const firstDigit = this.digitoValido(sum1);
        const secondDigits = clean.slice(0, 13);
        let sum2 = 0;
        weight = 6;
        for (let i = 0; i < secondDigits.length; i++) {
            sum2 += parseInt(secondDigits[i]) * weight;
            weight = weight === 2 ? 9 : weight - 1;
        }
        const secondDigit = this.digitoValido(sum2);
        return clean[12] === String(firstDigit) && clean[13] === String(secondDigit);
    }
    static mascaraCEP(cep) {
        return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
    }
    static validoCEP(cep) {
        const regex = /^\d{5}-?\d{3}$/;
        return regex.test(cep);
    }
}
exports.ValidatorSea = ValidatorSea;
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
