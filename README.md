# 🏥 Hospital São Lucas - Sistema de Gestão

## 📋 Sobre o Projeto

O **Hospital São Lucas** é um sistema de gestão hospitalar desenvolvido como parte do projeto da Sprint 03 da disciplina Front-End Design Engineering da FIAP. O projeto foi completamente migrado de HTML/CSS/JavaScript para React + Vite + TypeScript, seguindo as melhores práticas de desenvolvimento moderno.

## 🎯 Objetivos

- Migrar completamente o projeto para React + Vite + TypeScript
- Implementar uma arquitetura SPA (Single Page Application)
- Criar componentes reutilizáveis e modulares
- Utilizar apenas TailwindCSS para estilização
- Implementar sistema de autenticação e dashboard
- Garantir responsividade em todos os dispositivos

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18.2.0** - Biblioteca para construção de interfaces
- **Vite 4.5.0** - Build tool e servidor de desenvolvimento
- **TypeScript 5.2.2** - Superset do JavaScript com tipagem estática
- **TailwindCSS 3.3.5** - Framework CSS utilitário
- **React Router DOM 6.20.1** - Roteamento para aplicações React
- **React Hook Form 7.48.2** - Biblioteca para gerenciamento de formulários
- **Zod 3.22.4** - Validação de schemas TypeScript

### Desenvolvimento
- **ESLint** - Linter para JavaScript/TypeScript
- **PostCSS** - Processador CSS
- **Autoprefixer** - Adiciona prefixos CSS automaticamente

## 👥 Integrantes da Equipe

| Nome | RM | Turma |
|------|----|-------|
| Enzo Luiz | 566053 | 1TDSPH |
| Luiz Gustavo Guedes | 565843 | 1TDSPH |

## 📁 Estrutura do Projeto

```
HospitalWebsite/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Cabeçalho da aplicação
│   │   └── Footer.tsx         # Rodapé da aplicação
│   ├── context/
│   │   └── AppContext.tsx     # Contexto global da aplicação
│   ├── data/
│   │   └── mockData.ts        # Dados mockados para demonstração
│   ├── pages/
│   │   ├── Home.tsx           # Página inicial
│   │   ├── Servicos.tsx       # Página de serviços
│   │   ├── Sobre.tsx          # Página sobre o hospital
│   │   ├── Integrantes.tsx    # Página da equipe médica
│   │   ├── FAQ.tsx            # Perguntas frequentes
│   │   ├── Contato.tsx        # Página de contato
│   │   ├── Login.tsx          # Página de login
│   │   ├── Register.tsx       # Página de cadastro
│   │   └── Dashboard.tsx      # Dashboard do sistema
│   ├── types/
│   │   └── index.ts           # Definições de tipos TypeScript
│   ├── App.tsx                # Componente principal da aplicação
│   ├── main.tsx               # Ponto de entrada da aplicação
│   └── index.css              # Estilos globais e TailwindCSS
├── .gitignore                 # Arquivos ignorados pelo Git
├── index.html                 # HTML principal
├── package.json               # Dependências e scripts
├── tailwind.config.js         # Configuração do TailwindCSS
├── tsconfig.json              # Configuração do TypeScript
├── vite.config.ts             # Configuração do Vite
└── README.md                  # Este arquivo
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação
1. Clone o repositório:
```bash
git clone https://github.com/Challenge1TDSPH-ENZO-LUIZ/Site_1TDSPH.git
```

2. Navegue até o diretório do projeto:
```bash
cd Site_1TDSPH
```

3. Instale as dependências:
```bash
npm install
```

4. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

5. Acesse a aplicação em: `http://localhost:5173`

### Scripts Disponíveis
- `npm run dev` - Executa o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter ESLint

## 📱 Funcionalidades Implementadas

### Páginas Principais
- ✅ **Home** - Página inicial com hero section e informações gerais
- ✅ **Serviços** - Apresentação dos serviços oferecidos pelo hospital
- ✅ **Sobre** - História, missão e valores do hospital
- ✅ **Integrantes** - Equipe médica e administrativa
- ✅ **FAQ** - Perguntas frequentes com accordion interativo
- ✅ **Contato** - Formulário de contato com validação

### Sistema de Autenticação
- ✅ **Login** - Autenticação de usuários (Paciente, Médico, Admin)
- ✅ **Cadastro** - Registro de novos usuários
- ✅ **Dashboard** - Painel personalizado por tipo de usuário

### Dashboard por Tipo de Usuário
- **Paciente**: Agendamento de consultas, visualização de prontuários
- **Médico**: Gestão de consultas, criação de prontuários médicos
- **Administrador**: Visão geral do sistema, estatísticas

## 🎨 Design e Responsividade

### Paleta de Cores
- **Primária**: Azul (#3B82F6)
- **Secundária**: Verde (#10B981)
- **Acentos**: Roxo (#8B5CF6), Laranja (#F59E0B)
- **Neutros**: Cinza (#6B7280), Branco (#FFFFFF)

### Breakpoints Responsivos
- **xs**: < 640px (Extra Small)
- **sm**: 640px+ (Small)
- **md**: 768px+ (Medium)
- **lg**: 1024px+ (Large)
- **xl**: 1280px+ (Extra Large)

## 🔧 Hooks Implementados

### React Hooks Obrigatórios
- ✅ **useState** - Gerenciamento de estado local
- ✅ **useEffect** - Efeitos colaterais e ciclo de vida
- ✅ **useNavigate** - Navegação programática
- ✅ **useParams** - Parâmetros de rota (preparado para uso futuro)

### Props e Componentização
- ✅ **Props** - Passagem de dados entre componentes
- ✅ **Componentização** - Componentes reutilizáveis e modulares
- ✅ **Rotas Estáticas e Dinâmicas** - Sistema de roteamento completo

## 📝 Formulários e Validação

### React Hook Form
- ✅ **Formulário de Contato** - Validação completa com mensagens de erro
- ✅ **Formulário de Login** - Autenticação com validação
- ✅ **Formulário de Cadastro** - Registro com validação de senhas
- ✅ **Formulários do Dashboard** - Agendamento e prontuários médicos

### Validações Implementadas
- Campos obrigatórios
- Formato de email válido
- Confirmação de senha
- Validação de CPF (estrutura básica)
- Validação de telefone

## 🗂️ Gerenciamento de Estado

### Context API
- **AppContext** - Estado global da aplicação
- Gerenciamento de usuários, consultas e prontuários
- Persistência de dados no localStorage
- Autenticação e sessão do usuário

### Tipos TypeScript
- Interfaces bem definidas para todos os dados
- Tipagem completa em toda a aplicação
- Validação de tipos em tempo de compilação

## 📊 Dados Mockados

### Usuários de Demonstração
- **Paciente**: maria@email.com / 123456
- **Médico**: joao@hospital.com / 123456
- **Admin**: admin@hospital.com / admin123

### Dados Incluídos
- Lista de serviços médicos
- Equipe médica especializada
- Perguntas frequentes
- Consultas e prontuários de exemplo

## 🎥 Vídeo de Demonstração



## 🔗 Links Importantes

- **Repositório GitHub**: https://github.com/Challenge1TDSPH-ENZO-LUIZ/Site_1TDSPH.git
- **Deploy**: [Link será adicionado após deploy]

## 📋 Checklist de Entrega

### ✅ Requisitos Obrigatórios
- [x] Migração completa para React + Vite + TypeScript
- [x] Todas as páginas obrigatórias implementadas
- [x] Componentização e modularidade
- [x] Uso de hooks obrigatórios (useState, useEffect, useNavigate, useParams)
- [x] Implementação de Props
- [x] Rotas estáticas e dinâmicas
- [x] Estilização apenas com TailwindCSS
- [x] Responsividade em todos os dispositivos
- [x] Formulários com React Hook Form
- [x] Versionamento no GitHub
- [x] README.md completo e estruturado

### ✅ Páginas Implementadas
- [x] Home (Página Inicial)
- [x] Serviços
- [x] Sobre/About
- [x] Integrantes (Equipe Médica)
- [x] FAQ (Perguntas Frequentes)
- [x] Contato
- [x] Login
- [x] Cadastro
- [x] Dashboard

### ✅ Funcionalidades Técnicas
- [x] SPA (Single Page Application)
- [x] Roteamento com React Router DOM
- [x] Gerenciamento de estado com Context API
- [x] Validação de formulários
- [x] Sistema de autenticação
- [x] Dashboard personalizado por tipo de usuário
- [x] Persistência de dados no localStorage
- [x] Design responsivo e acessível

## 🚀 Próximos Passos

- [ ] Deploy da aplicação
- [ ] Integração com API real
- [ ] Testes automatizados
- [ ] Otimizações de performance
- [ ] Implementação de PWA

## 📄 Licença

Este projeto foi desenvolvido como parte do curso de Front-End Design Engineering da FIAP.

---

**Desenvolvido com ❤️ pela equipe do Hospital São Lucas**
