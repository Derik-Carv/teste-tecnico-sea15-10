# teste-tecnico-sea15-10
teste técnico sea. 15/10/2024. commits válidos até às 18h do dia 15/10/2024.

# Configuração do Projeto Node.js com TypeScript e variáveis de ambiente.

## Passo 1: Inicializar o Projeto

No ambiente de SO Linux,você precisa inicializar um novo projeto Node.js, fazendo uma breve atualização de pacotes no seu SO, abrindo seu terminal.

```bash
sudo apt update
```

Logo em seguida,instalando o Nodejs npm.
Caso não saiba se tem o Nodejs instalado, use o comando:
```bash
sudo node --version

sudo npm --version
```
Caso não retorne a versão, siga a instalção abaixo.

```bash
sudo apt install nodejs npm
```

Inicie as dependecias do Nodejs com o comando:

```bash
npm --init
```

Caso não saiba se tem o TypeScript instalado, use o comando:

```bash
tsc --version
```

Caso contrário, instale o Typescript, somente para a pasta do projeto.

```bash
npm install typescript --save-dev
```

E inicie o arquivo de configuração do Typescript:
```bash
tsc --init
```