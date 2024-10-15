class ValidatorSea {
    private static readonly ddd: { [key: string]: string } = {
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

    private static digitoValido = (sum: number): number => {
        const result = sum % 11;
        return result < 2 ? 0 : 11 - result;
    }

    public static mascaraCel(numberCel: string): string {
        return numberCel.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    
    public static validoCel(numberCel: string): boolean {
        const regex = /^\(?([1-9]{2})\)? ?9[1-9]\d{3}-?\d{4}$/;
        return regex.test(numberCel) && this.ddd[numberCel.slice(0, 2)] !== undefined;
    }
    public static mascaraCPF(cpf: string): string {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d)/, '$1.$2.$3-$4');
    }
    
    public static validoCPF(cpf: string): boolean {
        const cleaned = cpf.replace(/\D/g, '');
        if (cleaned.length !== 11) return false;
        const sum1 = cleaned.split('').slice(0, 9).reduce((acc, digit, index) => acc + parseInt(digit) * (10 - index), 0);
        const firstDigit = (sum1 * 10) % 11 === 10 ? 0 : (sum1 * 10) % 11;
        const sum2 = cleaned.split('').slice(0, 10).reduce((acc, digit, index) => acc + parseInt(digit) * (11 - index), 0);
        const secondDigit = (sum2 * 10) % 11 === 10 ? 0 : (sum2 * 10) % 11;
        return cleaned[9] === String(firstDigit) && cleaned[10] === String(secondDigit);
    }
    
}
    const numberCel = "21912345678";
    const cpf = "123.456.789-09";
    console.log("Celular: ", ValidatorSea.validoCel(numberCel));
    console.log("Celular:", ValidatorSea.mascaraCel(numberCel), "Válido?", ValidatorSea.validoCel(numberCel));
    console.log("CPF:", ValidatorSea.mascaraCPF(cpf), "Válido?", ValidatorSea.validoCPF(cpf));
    