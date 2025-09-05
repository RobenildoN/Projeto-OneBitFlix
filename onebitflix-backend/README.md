# OneBitFlix - Backend

Este é o backend da plataforma OneBitFlix, uma API REST desenvolvida com Node.js, Express, TypeScript e Sequelize.

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [PostgreSQL](https://www.postgresql.org/) (para o banco de dados)
- [Git](https://git-scm.com/)

## 🚀 Como executar

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd Projeto-OneBitFlix/onebitflix-backend
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

Crie um arquivo `.env` na raiz do projeto com:

```env
DATABASE_URL=postgres://usuario:senha@localhost:5432/onebitflix_development
ADMINJS_COOKIE_PASSWORD=sua-senha-adminjs
JWT_KEY=sua-chave-jwt
PORT=3001
```

### 5. Execute as migrações e seeders

```bash
npm run migrate
npm run seed
```

### 6. Execute o servidor

```bash
npm run dev
```

O servidor estará disponível em: http://localhost:3001

## 🏗️ Estrutura do Projeto

```
onebitflix-backend/
├── src/
│   ├── controllers/      # Controladores da API
│   ├── models/          # Modelos do banco de dados
│   ├── routes.ts        # Definição das rotas
│   ├── services/        # Lógica de negócio
│   ├── middlewares/     # Middlewares personalizados
│   ├── helpers/         # Funções auxiliares
│   ├── database/        # Configuração do banco
│   └── adminjs/         # Painel administrativo
├── uploads/             # Arquivos enviados
├── public/              # Arquivos estáticos
└── ...
```

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **TypeScript** - Superset JavaScript com tipagem
- **Sequelize** - ORM para PostgreSQL
- **PostgreSQL** - Banco de dados relacional
- **AdminJS** - Painel administrativo
- **JWT** - Autenticação baseada em tokens
- **Bcrypt** - Hash de senhas
- **CORS** - Controle de acesso cross-origin

## 📡 Endpoints da API

### Cursos
- `GET /courses/newest` - Lista cursos mais recentes
- `GET /courses/featured` - Lista cursos em destaque
- `GET /courses/search?name=` - Busca cursos por nome
- `GET /courses/popular` - Lista cursos populares
- `GET /courses/:id` - Detalhes de um curso específico

### Autenticação
- `POST /auth/register` - Registro de usuário
- `POST /auth/login` - Login de usuário

### Usuários
- `GET /users/current` - Dados do usuário atual
- `PUT /users/current` - Atualizar dados do usuário

### Favoritos
- `POST /favorites` - Adicionar aos favoritos
- `DELETE /favorites/:courseId` - Remover dos favoritos
- `GET /favorites` - Listar favoritos

### Likes
- `POST /likes` - Curtir um curso
- `DELETE /likes/:courseId` - Descurtir um curso

## 🔧 Scripts Disponíveis

```bash
npm run dev         # Inicia o servidor em modo desenvolvimento
npm run build       # Compila TypeScript
npm run start       # Inicia o servidor em produção
npm run migrate     # Executa migrações do banco
npm run seed        # Executa seeders
npm run create-migration # Cria nova migração
```

## 🌐 Acesso aos Serviços

Após executar o servidor, você terá acesso a:

- **API REST**: http://localhost:3001
- **Admin Panel**: http://localhost:3001/admin
- **Documentação**: http://localhost:3001/api-docs (se configurada)

## 📝 Notas de Desenvolvimento

- O projeto utiliza TypeScript para maior segurança de tipos
- As migrações do banco são gerenciadas pelo Sequelize CLI
- O AdminJS fornece uma interface administrativa completa
- A autenticação é baseada em JWT tokens
- As senhas são hasheadas com bcrypt

## 🔐 Autenticação

A API utiliza autenticação baseada em JWT. Para endpoints protegidos, inclua o header:

```
Authorization: Bearer <seu-token-jwt>
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request