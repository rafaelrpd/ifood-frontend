# iFood FrontEnd

Sistema de gestão financeira para parceiros do iFood.

## Índice

- [iFood FrontEnd](#ifood-frontend)
  - [Índice](#índice)
  - [Descrição](#descrição)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Instalação](#instalação)
    - [Pré-requisitos](#pré-requisitos)
    - [Instruções para instalação do projeto.](#instruções-para-instalação-do-projeto)
  - [Estrutura do Projeto](#estrutura-do-projeto)
  - [Detalhes dos Arquivos](#detalhes-dos-arquivos)
    - [`app/layout.js`](#applayoutjs)
    - [`app/Providers.jsx`](#appprovidersjsx)
    - [`app/api/auth/[...nextauth]/route.js`](#appapiauthnextauthroutejs)
    - [`app/components/Navbar.js`](#appcomponentsnavbarjs)
    - [`app/login/page.js`](#apploginpagejs)
    - [`app/dashboard/page.js`](#appdashboardpagejs)
    - [`app/transactions/page.js`](#apptransactionspagejs)
    - [`app/payments/page.js`](#apppaymentspagejs)
    - [`app/reports/page.js`](#appreportspagejs)
    - [`data/payments.js`, `data/reports.js`, `data/transactions.js`](#datapaymentsjs-datareportsjs-datatransactionsjs)
    - [`.env.local`](#envlocal)
    - [`next.config.mjs`](#nextconfigmjs)
    - [`package.json`](#packagejson)
  - [Como Fazer Alterações nos Arquivos Existentes](#como-fazer-alterações-nos-arquivos-existentes)
  - [Como Adicionar Novas Páginas](#como-adicionar-novas-páginas)


## Descrição

Este projeto é uma aplicação front-end construída com Next.js, utilizando o App Router. O objetivo é fornecer um sistema de gestão financeira para parceiros do iFood, incluindo funcionalidades como login, dashboard financeiro, transações, pagamentos e relatórios.

## Tecnologias Utilizadas

- **Next.js** `14.2.11`
- **React** `18`
- **React DOM** `18`
- **Bootstrap** `5.3.3`
- **React Bootstrap** `2.10.4`
- **NextAuth.js** `4.24.7`
- **Recharts** `2.12.7`

## Instalação

### Pré-requisitos

- **Node.js** (versão 22.7.0 ou superior)
- **npm** (versão 10.8.2 ou superior)
- **Git** (para clonar o repositório)

### Instruções para instalação do projeto.

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/rafaelrpd/ifood-frontend.git

2. **Navegue até o diretório do projeto:**

  ```bash
  cd ifood-frontend

3. **Instale as dependências:**

  ```bash
  npm install

4. **Crie o arquivo de variáveis de ambiente `.env.local:`**

  ```bash
  touch .env.local
  ```

  **Preencha o arquivo `.env.local` com as seguintes variáveis:**

  ```env
  NEXTAUTH_SECRET=uma_chave_secreta_gerada
  NEXTAUTH_URL=http://localhost:3000
  ```

5. **Inicie o servidor de desenvolvimento:**

  ```bash
  npm run dev
  ```

6. **Acesse a aplicação:**

Abra o navegador e vá para http://localhost:3000

## Estrutura do Projeto

  ```
  ifood-frontend/
  ├── app/
  │   ├── api/
  │   │   └── auth/
  │   │       └── [...nextauth]/
  │   │           └── route.js
  │   ├── components/
  │   │   └── Navbar.js
  │   ├── dashboard/
  │   │   └── page.js
  │   ├── login/
  │   │   └── page.js
  │   ├── payments/
  │   │   └── page.js
  │   ├── Providers.jsx
  │   ├── reports/
  │   │   └── page.js
  │   ├── transactions/
  │   │   └── page.js
  │   ├── layout.js
  │   └── page.js
  ├── data/
  │   ├── payments.js
  │   ├── reports.js
  │   └── transactions.js
  ├── public/
  │   └── ...
  ├── styles/
  │   └── ...
  ├── .env.local
  ├── next.config.mjs
  ├── package.json
  ├── README.md
  ```

## Detalhes dos Arquivos

### `app/layout.js`

- Define o layout padrão da aplicação.
- Importa o Bootstrap e o componente `Providers`.

### `app/Providers.jsx`

- Envolve a aplicação com o `SessionProvider` do NextAuth.
- Inclui o componente `NavigationBar`.

### `app/api/auth/[...nextauth]/route.js`

- Configura o NextAuth com o provedor de credenciais.
- Define as rotas de autenticação.

### `app/components/Navbar.js`

- Componente de navegação que aparece em todas as páginas.
- Exibe links para as principais páginas e opções de login/logout.

### `app/login/page.js`

- Página de login.
- Utiliza o `signIn` do NextAuth para autenticar o usuário.

### `app/dashboard/page.js`

- Página principal após o login.
- Exibe um resumo financeiro usando dados mockados.

### `app/transactions/page.js`

- Página de transações financeiras.
- Lista transações e permite filtrar por descrição.

### `app/payments/page.js`

- Página de pagamentos e recebíveis.
- Permite visualizar e adicionar novos pagamentos.

### `app/reports/page.js`

- Página de relatórios financeiros.
- Exibe um resumo e permite exportar relatórios.

### `data/payments.js`, `data/reports.js`, `data/transactions.js`

- Contêm dados mockados para uso nas páginas correspondentes.

### `.env.local`

- Arquivo de variáveis de ambiente.
- Contém `NEXTAUTH_SECRET` e `NEXTAUTH_URL`.

### `next.config.mjs`

- Arquivo de configuração do Next.js.

### `package.json`

- Lista as dependências e scripts do projeto.

## Como Fazer Alterações nos Arquivos Existentes

1. **Abra o projeto em seu editor de código favorito (recomendado: VS Code).**

2. **Navegue até o arquivo que deseja alterar na estrutura de pastas.**

3. **Faça as alterações necessárias no código.**

   - Para componentes React, lembre-se de que os arquivos dentro de `app/` podem ser Server Components ou Client Components.
   - Adicione `'use client';` no topo do arquivo se precisar usar hooks ou estado.

4. **Salve as alterações e verifique o resultado no navegador.**

   - O Next.js recarrega automaticamente as alterações no modo de desenvolvimento.

## Como Adicionar Novas Páginas

1. **Crie um novo diretório dentro de `app/` com o nome da rota desejada.**

   ```bash
   mkdir app/nome-da-pagina

2. **Crie um arquivo page.js dentro do novo diretório.**

   ```bash
   touch app/nome-da-pagina/page.js

3. **Adicione o código do componente para a nova página.**

  ```jsx
  // app/nome-da-pagina/page.js

  'use client';

  export default function NomeDaPagina() {
    return (
      <div>
        <h1>Nova Página</h1>
        <p>Conteúdo da nova página.</p>
      </div>
    );
  }
  ```

4. Adicione um link para a nova página na Navbar.js se necessário.

  ```jsx
  // app/components/Navbar.js

  import Link from 'next/link';

  // Dentro do componente NavigationBar
  <Link href="/nome-da-pagina" passHref legacyBehavior>
    <Nav.Link>Nova Página</Nav.Link>
  </Link>
  ```

5. **Verifique a nova página no navegador acessando http://localhost:3000/nome-da-pagina.**