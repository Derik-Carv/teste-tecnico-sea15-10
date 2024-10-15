class Validator {
    private static readonly ddd: { [key: string]: string } = {
        '11': 'São Paulo', '12': 'São Paulo', '13': 'São Paulo', '14': 'São Paulo',
        '15': 'São Paulo', '16': 'São Paulo', '17': 'São Paulo', '18': 'São Paulo',
        '19': 'São Paulo', '21': 'Rio de Janeiro', '22': 'Rio de Janeiro', '24': 'Rio de Janeiro',
        '27': 'Espírito Santo', '28': 'Espírito Santo',
        '31': 'Minas Gerais', '32': 'Minas Gerais','33': 'Minas Gerais', '34': 'Minas Gerais',
        '35': 'Minas Gerais', '37': 'Minas Gerais','38': 'Minas Gerais',
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
}
