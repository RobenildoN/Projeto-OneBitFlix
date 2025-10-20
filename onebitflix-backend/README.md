# 🎬 OneBitFlix - Backend

<div align="center">
  <img src="public/logoOnebitflix.svg" alt="Logo OneBitFlix" width="300px">
  <p><i>Sua plataforma de streaming de cursos de programação</i></p>
</div>

## 📋 Sobre o Projeto

O **OneBitFlix** é uma plataforma de streaming focada em cursos de programação, inspirada na interface da Netflix. Este repositório contém o backend da aplicação, desenvolvido como uma API RESTful utilizando Node.js, Express, TypeScript e Sequelize.

### ✨ Funcionalidades Principais

- 👤 Sistema completo de autenticação e gerenciamento de usuários
- 📚 Catálogo de cursos organizados por categorias
- 📺 Reprodução de vídeos com controle de progresso
- ❤️ Sistema de favoritos para salvar cursos
- 👍 Sistema de likes para avaliação de conteúdo
- 🔍 Busca e filtragem de cursos
- 👑 Painel administrativo completo para gerenciamento de conteúdo

## 🚀 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework web para Node.js
- **TypeScript** - Superset JavaScript com tipagem estática
- **Sequelize** - ORM para bancos de dados relacionais
- **PostgreSQL** - Banco de dados relacional
- **AdminJS** - Painel administrativo customizável
- **JWT** - Autenticação baseada em tokens
- **Bcrypt** - Hash seguro de senhas
- **CORS** - Controle de acesso cross-origin

## 🛠️ Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [PostgreSQL](https://www.postgresql.org/) (para o banco de dados)
- [Git](https://git-scm.com/)

## 📦 Como Executar

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd onebitflix-backend
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o banco de dados

Certifique-se de que o PostgreSQL está rodando e crie o banco de dados:

```sql
CREATE DATABASE onebitflix_development;
```

### 4. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto baseado no arquivo `.env.example`:

```env
DATABASE_URL=postgres://usuario:senha@localhost:5432/onebitflix_development
ADMINJS_COOKIE_PASSWORD=sua-senha-adminjs
JWT_KEY=sua-chave-jwt
PORT=3000
```

### 5. Execute as migrações

```bash
npx sequelize-cli db:migrate
```

### 6. Execute os seeders (opcional)

```bash
npx sequelize-cli db:seed:all
```

### 7. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

O servidor estará disponível em: http://localhost:3000

## 📁 Estrutura do Projeto

```
onebitflix-backend/
├── src/
│   ├── adminjs/         # Configuração do painel administrativo
│   │   ├── components/  # Componentes personalizados do AdminJS
│   │   └── resources/   # Recursos do AdminJS (modelos)
│   ├── controllers/     # Controladores da API
│   ├── database/        # Configuração do banco de dados
│   │   ├── migrations/  # Migrações do Sequelize
│   │   └── seeders/     # Seeders para dados iniciais
│   ├── helpers/         # Funções auxiliares
│   ├── middlewares/     # Middlewares personalizados
│   ├── models/          # Modelos do Sequelize
│   ├── services/        # Camada de serviços
│   ├── routes.ts        # Definição das rotas da API
│   └── server.ts        # Ponto de entrada da aplicação
├── public/              # Arquivos estáticos
├── uploads/             # Arquivos enviados (vídeos, imagens)
└── config/              # Configurações da aplicação
```

## 🔌 Endpoints da API

### 🔐 Autenticação
- `POST /auth/register` - Registro de usuário
- `POST /auth/login` - Login de usuário

### 👤 Usuários
- `GET /users/current` - Dados do usuário atual
- `PUT /users/current` - Atualizar dados do usuário
- `PUT /users/current/password` - Atualizar senha

### 📚 Categorias
- `GET /categories` - Listar todas as categorias
- `GET /categories/:id` - Detalhes de uma categoria específica

### 🎓 Cursos
- `GET /courses/featured` - Cursos em destaque
- `GET /courses/newest` - Cursos mais recentes
- `GET /courses/popular` - Cursos mais populares
- `GET /courses/search?name=` - Buscar cursos por nome
- `GET /courses/:id` - Detalhes de um curso específico

### 📺 Episódios
- `GET /episodes/stream?videoUrl=` - Stream de um episódio
- `GET /episodes/:id/watchTime` - Obter tempo assistido
- `POST /episodes/:id/watchTime` - Atualizar tempo assistido

### ❤️ Favoritos
- `GET /favorites` - Listar cursos favoritos
- `POST /favorites` - Adicionar curso aos favoritos
- `DELETE /favorites/:id` - Remover curso dos favoritos

### 👍 Likes
- `POST /likes` - Dar like em um curso
- `DELETE /likes/:id` - Remover like de um curso

## 👨‍💻 Painel Administrativo

O projeto inclui um painel administrativo completo construído com AdminJS, acessível em `/admin`. Este painel permite:

- Gerenciamento de usuários
- Criação e edição de categorias
- Upload e gerenciamento de cursos
- Upload e gerenciamento de episódios
- Visualização de estatísticas

## 📄 Licença

Este projeto está sob a licença ISC.

---

<div align="center">
  <p>Desenvolvido com ❤️ como parte do curso da One Bit Code</p>
</div>