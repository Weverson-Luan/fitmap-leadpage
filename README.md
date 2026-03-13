# 🏋️ FitMap - Lead Page

> Plataforma que conecta alunos e personal trainers, facilitando a contratação de serviços de treinamento personalizado.

![FitMap](https://img.shields.io/badge/status-in%20development-yellow)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📖 Visão Geral

**FitMap** é uma plataforma inovadora que conecta **alunos** em busca de treinamento físico personalizado com **personal trainers** qualificados. É um marketplace de fitness que facilita a descoberta, agendamento e pagamento de aulas de treinamento.

### Problema Resolvido

- ✅ Alunos têm dificuldade em encontrar personal trainers qualificados
- ✅ Personals enfrentam desafios para expandir sua base de clientes
- ✅ Falta de plataforma centralizada para gerenciar aulas e pagamentos
- ✅ Processo de contratação manual e desorganizado

### Solução

Uma plataforma web e mobile que:

- Conecta alunos com personals verificados
- Permite agendamento de aulas de forma simples
- Gerencia pagamentos de forma segura
- Oferece histórico de treinos e avaliações
- Facilita a comunicação entre alunos e personals

---

## 📁 Estrutura do Projeto

Este repositório contém a **Lead Page** - página inicial que apresenta a plataforma e convida usuários a se registrarem.

```
fitmap-leadpage/
├── public/              # Arquivos estáticos
├── src/
│   ├── components/      # Componentes React reutilizáveis
│   ├── pages/           # Páginas principais
│   ├── styles/          # Estilos globais e temas
│   ├── hooks/           # Custom hooks
│   └── App.jsx          # Componente raiz
├── package.json         # Dependências do projeto
└── README.md            # Este arquivo
```

---

## 🎯 Funcionalidades da Lead Page

### 1. **Hero Section**

- Apresentação visual impactante da plataforma
- Call-to-action principal para registro
- Destaque dos principais benefícios

### 2. **Seção de Funcionalidades**

- Conexão com personals verificados
- Agendamento flexível de aulas
- Pagamento seguro e transparente
- Histórico de sessões e avaliações
- Comunicação direta com trainers

### 3. **Testimoniais e Avaliações**

- Histórias reais de alunos
- Depoimentos de personals
- Ratings e reviews da plataforma

### 4. **Planos e Preços**

- Comparação de pacotes
- Estrutura de valores transparente
- Informações sobre comissões

### 5. **Call-to-Action**

- Botões de cadastro para alunos
- Botões de cadastro para personals
- Links para app mobile (quando disponível)

### 6. **FAQ**

- Perguntas frequentes
- Guides de uso da plataforma
- Suporte e contato

---

## 🛠️ Stack Tecnológico

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: CSS Modules / Tailwind CSS
- **Package Manager**: npm / pnpm
- **Authentication**: JWT (integração com backend)
- **API Communication**: Axios / Fetch API

---

## 🚀 Como Começar

### Pré-requisitos

- Node.js 18+ instalado
- npm ou pnpm como gerenciador de pacotes

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/fitmap-leadpage.git
cd fitmap-leadpage

# 2. Instale as dependências
npm install
# ou
pnpm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
# ou
pnpm dev
```

A aplicação estará disponível em `http://localhost:5173`

---

## 📝 Scripts Disponíveis

```bash
# Iniciar desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview

# Linting (ESLint)
npm run lint

# Formatação de código (Prettier)
npm run format
```

---

## 🔗 Integração com Backend

A Lead Page se integra com o backend FitMap para:

### Endpoints Principais

- `POST /auth/register` - Registro de novo usuário
- `POST /auth/login` - Login de usuário
- `GET /users/profile` - Perfil do usuário autenticado
- `GET /trainings` - Lista de treinos disponíveis
- `POST /trainings` - Criar novo treino

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=FitMap
VITE_APP_VERSION=1.0.0
```

---

## 👥 Personas

### Aluno

- Procura melhorar o condicionamento físico
- Quer aprender técnicas corretas de exercício
- Busca conveniência e flexibilidade de horários
- Valoriza avaliações e histórico de personals

### Personal Trainer

- Deseja expandir sua base de clientes
- Quer organizar melhor seus agendamentos
- Precisa de ferramenta para gerenciar pagamentos
- Busca visibilidade e credibilidade

---

## 🎨 Design System

### Cores Principais

- **Primary**: #1E40AF (Azul)
- **Secondary**: #FF6B35 (Laranja)
- **Success**: #10B981 (Verde)
- **Warning**: #F59E0B (Amarelo)
- **Error**: #EF4444 (Vermelho)

### Typography

- **Heading**: Roboto Bold 24px - 48px
- **Body**: Roboto Regular 14px - 16px
- **Caption**: Roboto Light 12px - 14px

---

## 📱 Responsividade

A Lead Page segue princípios mobile-first:

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

---

## 🔐 Segurança

- ✅ Proteção contra XSS
- ✅ HTTPS (em produção)
- ✅ CORS configurado corretamente
- ✅ Token JWT para autenticação
- ✅ Rate limiting em APIs

---

## 📊 Métricas e Analytics

A Lead Page integra-se com:

- Google Analytics para rastreamento
- Hotjar para heatmaps de usuário
- Conversão de leads para dashboard

---

## 🤝 Contribuindo

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Código

- ESLint configurado (execute `npm run lint`)
- Prettier para formatação (execute `npm run format`)
- Commits semânticos (feat:, fix:, docs:, etc)

---

## 📚 Documentação Adicional

- [Design Figma](https://www.figma.com/design/6reHk7X8IH4NlqakbGYhk1/Lead-Page-for-FitMap)
- [Backend API Documentation](#backend) (quando disponível)
- [Mobile App Documentation](#mobile) (quando disponível)

---

## 🐛 Reportar Bugs

1. Verifique se o bug já foi reportado
2. Descreva o comportamento esperado vs atual
3. Inclua prints ou vídeos (se possível)
4. Liste seu ambiente (browser, SO, versão)

---

## 📞 Suporte e Contato

- **Email**: suporte@fitmap.com
- **Discord**: [Link da comunidade](#)
- **Twitter**: [@FitMapBrasil](#)
- **Issues**: [GitHub Issues](#)

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 🙏 Agradecimentos

- Equipe de design do FitMap
- Comunidade de contribuidores
- Usuários beta testers

---

## 🗺️ Roadmap

- [ ] Dark mode
- [ ] Internacionalization (i18n)
- [ ] PWA (Progressive Web App)
- [ ] SEO otimizado
- [ ] Integração com Google Login
- [ ] Performance optimization

---

## 📈 Status do Projeto

- **Fase**: Desenvolvimento Ativo 🚀
- **Última Atualização**: Fevereiro 2026
- **Versão Atual**: 1.0.0 (Beta)

---

**Feito com ❤️ pelo time FitMap**
