# OneBitFlix

Uma plataforma completa de streaming de cursos desenvolvida com tecnologias modernas.

## 📋 Sobre o Projeto

O OneBitFlix é uma aplicação web full-stack que permite aos usuários assistir cursos online, gerenciar favoritos, buscar conteúdo e muito mais. O projeto foi desenvolvido como parte do curso One Bit Code.

## 🏗️ Arquitetura

O projeto é dividido em duas partes principais:

- **Frontend** (`onebitflix-front/`): Interface do usuário desenvolvida com Next.js
- **Backend** (`onebitflix-backend/`): API REST desenvolvida com Node.js e Express

## 🚀 Tecnologias Utilizadas

### Frontend
- Next.js 15
- React 18
- TypeScript
- SCSS Modules
- Axios
- Reactstrap

### Backend
- Node.js
- Express.js
- TypeScript
- Sequelize ORM
- PostgreSQL
- AdminJS
- JWT Authentication

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- PostgreSQL
- Git

## 🛠️ Como executar

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd Projeto-OneBitFlix
```

### 2. Instale as dependências

```bash
# Backend
cd onebitflix-backend
npm install

# Frontend
cd ../onebitflix-front
npm install
```

### 3. Configure o banco de dados

```sql
CREATE DATABASE onebitflix_development;
```

### 4. Configure as variáveis de ambiente

#### Backend (.env)
```env
DATABASE_URL=postgres://usuario:senha@localhost:5432/onebitflix_development
ADMINJS_COOKIE_PASSWORD=sua-senha-adminjs
JWT_KEY=sua-chave-jwt
PORT=3001
```

#### Frontend (.env)
```env
NEXT_PUBLIC_BASEURL=http://localhost:3001
```

### 5. Execute as migrações e seeders

```bash
cd onebitflix-backend
npm run migrate
npm run seed
```

### 6. Execute os servidores

#### Terminal 1 - Backend
```bash
cd onebitflix-backend
npm run dev
```

#### Terminal 2 - Frontend
```bash
cd onebitflix-front
npm run dev
```

## 🌐 Acesso à Aplicação

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **Admin Panel**: http://localhost:3001/admin

## 📁 Estrutura do Projeto

```
Projeto-OneBitFlix/
├── onebitflix-backend/     # API Backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── services/
│   │   ├── routes.ts
│   │   └── ...
│   ├── uploads/
│   └── ...
├── onebitflix-front/       # Frontend Next.js
│   ├── pages/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── ...
│   ├── public/
│   └── ...
└── README.md
```

## 🎯 Funcionalidades

### ✅ Implementadas
- Sistema de autenticação de usuários
- Visualização de cursos em destaque
- Navegação por categorias
- Sistema de favoritos
- Busca de cursos
- Player de vídeo integrado
- Painel administrativo (AdminJS)
- Interface responsiva

### 🚧 Em Desenvolvimento
- Sistema de comentários
- Avaliações de cursos
- Notificações push
- Integração com pagamentos

## 📚 Documentação

Para mais detalhes sobre cada parte do projeto:

- [📖 Documentação do Frontend](./onebitflix-front/README.md)
- [📖 Documentação do Backend](./onebitflix-backend/README.md)

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Desenvolvedores

- **Robel Silva** - Desenvolvedor Full-stack

## 🙏 Agradecimentos

- [One Bit Code](https://onebitcode.com/) - Pelo excelente curso
- Comunidade open source pelas ferramentas utilizadas