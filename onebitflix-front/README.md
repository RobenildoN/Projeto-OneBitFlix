# 🎬 OneBitFlix - Frontend

<div align="center">
  <img src="./public/logoOnebitflix.svg" alt="Logo OneBitFlix" width="300px">
  <br><br>
  <p><strong>Sua plataforma de streaming de cursos de programação</strong></p>
</div>

## 📋 Sobre o Projeto

O **OneBitFlix** é uma plataforma de streaming focada em cursos de programação, inspirada na interface da Netflix. Este repositório contém o código frontend da aplicação, desenvolvido como parte do curso da One Bit Code.

A plataforma permite aos usuários:
- 👤 Criar conta e gerenciar perfil
- 🔍 Pesquisar cursos por categoria
- ❤️ Favoritar cursos
- 📺 Assistir episódios de cursos
- 👍 Curtir conteúdos

## 🚀 Tecnologias Utilizadas

Este projeto foi desenvolvido com as seguintes tecnologias:

- **[Next.js](https://nextjs.org/)** (v15.1.5) - Framework React para renderização do lado do servidor
- **[React](https://reactjs.org/)** (v19.0.0) - Biblioteca JavaScript para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** (v5) - Superset JavaScript com tipagem estática
- **[Bootstrap](https://getbootstrap.com/)** (v5.3.3) e **[Reactstrap](https://reactstrap.github.io/)** (v9.2.3) - Framework CSS para design responsivo
- **[SASS](https://sass-lang.com/)** (v1.50.1) - Pré-processador CSS
- **[Axios](https://axios-http.com/)** (v0.26.1) - Cliente HTTP para requisições à API
- **[SWR](https://swr.vercel.app/)** (v2.3.0) - Biblioteca para busca, cache e atualização de dados
- **[React Player](https://github.com/cookpete/react-player)** (v2.16.0) - Componente para reprodução de vídeos
- **[Splide](https://splidejs.com/)** (v0.7.12) - Biblioteca para criação de carrosséis
- **[AOS](https://michalsnik.github.io/aos/)** (v2.3.4) - Biblioteca para animações de scroll

## 🗂️ Estrutura do Projeto

```
onebitflix-front/
├── pages/                  # Páginas da aplicação
│   ├── _app.tsx            # Componente principal da aplicação
│   ├── course/             # Páginas relacionadas aos cursos
│   ├── home.tsx            # Página inicial autenticada
│   ├── index.tsx           # Página inicial não autenticada
│   ├── login.tsx           # Página de login
│   ├── profile.tsx         # Página de perfil do usuário
│   ├── register.tsx        # Página de registro
│   └── search.tsx          # Página de busca
├── public/                 # Arquivos estáticos
├── src/
│   ├── components/         # Componentes reutilizáveis
│   │   ├── common/         # Componentes comuns (header, footer, etc)
│   │   ├── episodeList/    # Componentes de listagem de episódios
│   │   ├── homeAuth/       # Componentes da página inicial autenticada
│   │   ├── homeNoAuth/     # Componentes da página inicial não autenticada
│   │   ├── profile/        # Componentes da página de perfil
│   │   └── searchCard/     # Componentes de cards de busca
│   └── services/           # Serviços de comunicação com a API
│       ├── api.ts          # Configuração do Axios
│       ├── authService.ts  # Serviço de autenticação
│       ├── categoriesService.ts # Serviço de categorias
│       ├── courseService.ts # Serviço de cursos
│       ├── episodesService.ts # Serviço de episódios
│       └── profileService.ts # Serviço de perfil
└── styles/                 # Arquivos de estilo SCSS
```

## 🔧 Instalação e Execução

Para executar este projeto localmente, siga os passos abaixo:

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/onebitflix-front.git
cd onebitflix-front
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Acesse a aplicação em [http://localhost:3000](http://localhost:3000)

## 🔨 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa a verificação de linting

## 📝 Licença

Este projeto está sob a licença MIT.

---

<div align="center">
  <p>Desenvolvido com ❤️ como parte do curso da One Bit Code</p>
</div>
