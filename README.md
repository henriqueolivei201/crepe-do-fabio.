# Redesign & Modernização — Buffet Crepe do Fábio

Este projeto consiste na modernização técnica, refatoração de infraestrutura e otimização visual da página institucional do Buffet Crepe do Fábio, especializado em crepes em domicílio em Brasília.

O objetivo principal foi pegar uma base de código preexistente e elevá-la aos padrões atuais de desenvolvimento web, corrigindo gargalos de dependências, arquitetura de estilos e performance de carregamento local.

---

## 🛠️ Tecnologias Utilizadas & Upgrades Técnicos

* **React & Vite v8:** Substituição do ambiente de desenvolvimento antigo para a versão mais recente e veloz do ecossistema front-end.
* **Tailwind CSS v4:** Migração completa da folha de estilos para a nova engine do Tailwind, centralizando o tema de cores personalizadas (`deep-navy`, `cream`, `cream2`, `rouge`, `gold`) e sombras por meio de variáveis `@theme` nativas diretamente no CSS.
* **Node.js & Gerenciamento de Dependências:** Resolução e reestruturação de problemas críticos de pacotes corrompidos e módulos ausentes (como `react-dom/client` e plugins de compilação do Vite).

---

## 🚀 O que eu desenvolvi neste projeto (Destaques de Portfólio)

Como este projeto envolveu o aperfeiçoamento de uma estrutura já existente, foquei em entregar valor real nas seguintes frentes:
1. **Refatoração de Configurações:** Criação e ajuste cirúrgico dos arquivos de mapeamento do Vite (`vite.config.js`) e mapeamento de caminhos do Tailwind para que o projeto pudesse rodar perfeitamente direto da raiz.
2. **Resolução de Avisos e Erros:** Eliminação de avisos de depreciação do console (como substituição de classes de gradientes legadas por sintaxes modernas do Tailwind v4).
3. **Polimento Estético:** Ajustes finos de responsividade, aplicação de paleta de cores customizada e estruturação para deploy ágil.

---

## 💻 Como rodar o projeto localmente

1. Clone o repositório:
   git clone https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git

2. Entre na pasta:
   cd crepedofabio

3. Instale as dependências limpas:
   npm install

4. Rode o servidor de desenvolvimento:
   npm run dev