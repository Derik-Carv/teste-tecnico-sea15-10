# tecnicTesteSea
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

Instalar o ts-node para executar diretamente o arquivo TypeScript
```bash
npm install --save-dev ts-node
```

Para testar o arquivo, usar o comando no terminal:
```bash
npm run start
```