# 🚀 Automação de Testes de Performance com K6

Bem-vindo ao repositório do meu projeto de automação de **testes de performance** utilizando [K6](https://k6.io/)!

## 📌 Sobre o Projeto

Este projeto tem como objetivo automatizar **testes de performance** utilizando a ferramenta **K6**, que é uma solução open-source para testes de carga e performance. O foco é medir o comportamento da aplicação sob diferentes condições de tráfego, garantindo a performance da aplicação em produção.

Os testes incluem simulação de múltiplos usuários, verificações de tempo de resposta e status de endpoints da aplicação.

## 🛠️ Tecnologias Utilizadas

- [K6](https://k6.io/) - Ferramenta para execução dos testes de performance
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem utilizada para escrever os scripts de teste
- [GitHub Actions](https://github.com/features/actions) - CI/CD para execução automática dos testes
- [Docker](https://www.docker.com/) - Usado para containers de execução (opcional)

## 📂 Estrutura do Projeto

```sh
📦 automacao_k6
├── 📂 .github
│   └── 📂 workflows
│       └── k6-ci.yml       # Workflow para execução automática no GitHub Actions
├── 📂 test.js               # Script de teste de performance com K6
├── 📜 README.md             # Documentação do projeto
```

## 🚀 Como Executar os Testes

### 🔧 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [K6](https://k6.io/docs/getting-started/installation/)
- [Git](https://git-scm.com/)

### 📥 Clonar o Repositório

```sh
git clone https://github.com/dienesgithub/automacao_k6.git
cd automacao_k6
```

### 📦 Instalar o K6

Caso ainda não tenha o K6 instalado, siga a [documentação oficial](https://k6.io/docs/getting-started/installation/) para o seu sistema operacional.

### ▶️ Executar Testes Localmente

Execute o comando abaixo:

```sh
k6 run test.js
```

O K6 executará os testes e exibirá as métricas no terminal.

### 🤖 Executar Testes no Modo Headless

O K6 já executa os testes em **modo headless** por padrão, ou seja, sem interface gráfica.

### 📜 Resultados dos Testes

Durante a execução dos testes, o terminal exibirá informações como:

- Tempo de resposta  
- Número de requisições  
- Status dos endpoints  

Se quiser relatórios mais completos, pode utilizar ferramentas como [k6-reporter](https://github.com/benc-uk/k6-reporter) para gerar arquivos em HTML ou JSON.

### ⚙️ Execução Automática via GitHub Actions

O projeto está configurado com **GitHub Actions**. Sempre que um **push** ou **pull request** for feito, os testes de performance são executados automaticamente via o workflow:

```bash
.github/workflows/k6-ci.yml
```

Para acompanhar a execução dos testes:

- Acesse o repositório no GitHub
- Vá até a aba Actions
- Selecione o workflow "Teste de Performance com K6"
- Veja os detalhes da execução diretamente na interface

### 🔒 Segurança de Dados

Como os testes podem envolver dados sensíveis (como autenticação), utilize **variáveis de ambiente** no GitHub Actions para proteger essas informações:

```yaml
env:
  API_KEY: ${{ secrets.API_KEY }}
```

Configure os segredos em: Settings > Secrets and variables > Actions.

### 🤝 Contribuindo

Fique à vontade para abrir **issues**, sugerir melhorias ou enviar **pull requests**. Toda contribuição é bem-vinda! 😊

### 📄 Licença

Este projeto está sob a licença **MIT**. Para mais detalhes, consulte o arquivo `LICENSE`.

---

Desenvolvido por **Dienes Stein** 💻✨