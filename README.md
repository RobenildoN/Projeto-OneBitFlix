# 🎬 OneBitFlix

<div align="center">
  <img src="onebitflix-front/public/logoOnebitflix.svg" alt="Logo OneBitFlix" width="300px">
  <br>
  <h3>Sua plataforma de streaming de cursos de programação</h3>
</div>

## 📋 Sobre o Projeto

O **OneBitFlix** é uma plataforma de streaming focada em cursos de programação, inspirada na interface da Netflix. Este projeto full-stack permite que usuários assistam a cursos, acompanhem seu progresso, marquem favoritos e muito mais.

### ✨ Principais Funcionalidades

- 🔐 Sistema de autenticação completo (registro, login, perfil)
- 📺 Player de vídeo para assistir aos episódios dos cursos
- 🔍 Sistema de busca para encontrar cursos específicos
- ❤️ Favoritar cursos e acompanhar progresso
- 👤 Área administrativa para gerenciamento de conteúdo

## 🚀 Tecnologias Utilizadas

### Backend
- **Node.js** com **TypeScript**
- **Express.js** para API REST
- **Sequelize** como ORM
- **PostgreSQL** como banco de dados
- **AdminJS** para painel administrativo
- **JWT** para autenticação
- **Bcrypt** para criptografia de senhas

### Frontend
- **React** com **TypeScript**
- **Next.js** para renderização e roteamento
- **Bootstrap** e **Reactstrap** para componentes UI
- **SASS** para estilização
- **Axios** para requisições HTTP
- **React Player** para reprodução de vídeos
- **SWR** para gerenciamento de estado e cache

## 🗂️ Estrutura do Projeto

O projeto está dividido em duas partes principais:

### 📁 Backend (`/onebitflix-backend`)
```
/src
  /adminjs     # Configuração do painel administrativo
  /controllers # Controladores da API
  /database    # Configurações do banco de dados
  /helpers     # Funções auxiliares
  /middlewares # Middlewares do Express
  /models      # Modelos do Sequelize
  /services    # Lógica de negócio
  routes.ts    # Definição de rotas da API
  server.ts    # Ponto de entrada da aplicação
```

### 📁 Frontend (`/onebitflix-front`)
```
/pages         # Páginas da aplicação
/public        # Arquivos estáticos
/src
  /components  # Componentes React reutilizáveis
  /services    # Serviços para comunicação com a API
/styles        # Arquivos de estilo SASS
```

## 🛠️ Como Executar o Projeto

### Pré-requisitos
- Node.js
- PostgreSQL
- npm ou yarn

### Backend
```bash
# Entrar na pasta do backend
cd onebitflix-backend

# Instalar dependências
npm install

# Configurar variáveis de ambiente
# Copie o arquivo .env.example para .env e configure as variáveis

# Executar migrações do banco de dados
npx sequelize-cli db:migrate

# Iniciar o servidor em modo de desenvolvimento
npm run dev
```

### Frontend
```bash
# Entrar na pasta do frontend
cd onebitflix-front

# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm run dev
```

## 📱 Telas do Projeto

- 🏠 **Home**: Página inicial com destaque para cursos populares
- 🔐 **Login/Registro**: Autenticação de usuários
- 📺 **Cursos**: Listagem de cursos disponíveis
- 📝 **Detalhes do Curso**: Informações e episódios do curso
- 👤 **Perfil**: Gerenciamento de dados do usuário
- 🔍 **Busca**: Pesquisa de cursos

## 👨‍💻 Desenvolvido durante o curso da OneBitCode

Este projeto foi desenvolvido como parte do aprendizado na formação fullstack da OneBitCode, aplicando conceitos avançados de desenvolvimento web.

---

<div align="center">
  <p>Feito com ❤️ e muito ☕</p>
</div>