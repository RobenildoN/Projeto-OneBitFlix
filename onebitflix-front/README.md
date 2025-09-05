# OneBitFlix - Frontend

Este é o frontend da plataforma OneBitFlix, uma aplicação de streaming de cursos desenvolvida com Next.js, React e TypeScript.

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [PostgreSQL](https://www.postgresql.org/) (para o banco de dados)
- [Git](https://git-scm.com/)

## 🚀 Como executar

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd Projeto-OneBitFlix
```

### 2. Instale as dependências

```bash
# Instalar dependências do backend
cd onebitflix-backend
npm install

# Instalar dependências do frontend
cd ../onebitflix-front
npm install
```

### 3. Configure o banco de dados

Certifique-se de que o PostgreSQL está rodando e crie o banco de dados:

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

### 5. Execute as migrações e seeders (Backend)

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
O backend estará disponível em: http://localhost:3001

#### Terminal 2 - Frontend
```bash
cd onebitflix-front
npm run dev
```
O frontend estará disponível em: http://localhost:3000

## 🏗️ Estrutura do Projeto

```
onebitflix-front/
├── pages/                 # Páginas Next.js
│   ├── _app.tsx          # Configuração global da aplicação
│   ├── index.tsx         # Página inicial
│   ├── login.tsx         # Página de login
│   └── ...
├── src/
│   ├── components/       # Componentes React
│   │   ├── common/       # Componentes compartilhados
│   │   ├── homeAuth/     # Componentes da home autenticada
│   │   └── ...
│   ├── services/         # Serviços de API
│   └── styles/           # Estilos globais
├── public/               # Arquivos estáticos
└── ...
```

## 🛠️ Tecnologias Utilizadas

- **Next.js** - Framework React para produção
- **React** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset JavaScript com tipagem
- **SCSS** - Pré-processador CSS
- **Axios** - Cliente HTTP
- **Reactstrap** - Componentes Bootstrap para React
- **@splidejs/react-splide** - Carrossel/slider

## 📱 Funcionalidades

- ✅ Visualização de cursos em destaque
- ✅ Sistema de autenticação
- ✅ Navegação por categorias
- ✅ Player de vídeo integrado
- ✅ Sistema de favoritos
- ✅ Busca de cursos
- ✅ Interface responsiva

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Build para produção
npm run start    # Inicia o servidor de produção
npm run lint     # Executa o linter
```

## 🌐 Acesso à Aplicação

Após executar os comandos acima, acesse:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **Admin Panel**: http://localhost:3001/admin

## 📝 Notas de Desenvolvimento

- O projeto utiliza SSR (Server-Side Rendering) com Next.js
- As APIs são consumidas através do Axios
- O estado global é gerenciado com Context API
- Os estilos são escritos em SCSS modules

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request
