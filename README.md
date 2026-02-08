#💳 Payment Dashboard — Digital Banking Frontend

Interface web desenvolvida em React + TypeScript + Vite que simula o painel de um banco digital, permitindo autenticação de usuários e visualização de informações financeiras integradas à Payment API.

O projeto foi construído com foco em arquitetura frontend escalável, organização de código e boas práticas modernas de desenvolvimento, servindo como demonstração técnica de um sistema financeiro completo (frontend + backend).

#🧠 Conceitos e Boas Práticas Demonstradas

✔ Arquitetura de pastas escalável (pages, components, services, hooks)
✔ Separação entre componentes globais e componentes de página
✔ Tipagem forte com TypeScript
✔ Consumo de API REST com camada de services
✔ Gerenciamento de rotas com React Router
✔ Estrutura pronta para autenticação com JWT
✔ Uso de Material UI para interface profissional
✔ Organização pensada para sistemas de médio/grande porte

#🎨 Prototipação do Projeto

# layout da aplicação foi baseado em um protótipo criado no Figma:

🔗 https://www.figma.com/design/7DNneB8hEGVbkdxHPNpPiy/payment-dashboard?node-id=2-3&t=Kp9YyncXc924VwxY-0

🗺️ Estrutura do Projeto
src/
│
├── assets/          # Imagens e ícones
├── components/      # Componentes reutilizáveis globais
├── pages/           # Páginas da aplicação
├── routes/          # Configuração de rotas
├── services/        # Comunicação com a API
├── hooks/           # Hooks customizados
├── contexts/        # Contextos globais (Auth, etc)
├── types/           # Tipagens globais
├── utils/           # Funções utilitárias
│
├── App.tsx
└── main.tsx

⚙️ Tecnologias Utilizadas

React 18

TypeScript

Vite

React Router DOM

Material UI

Axios (para integração com backend)

#⚙️ Como Rodar o Projeto
✅ Pré-requisitos

Antes de iniciar, você precisa ter instalado:

Node.js 18 ou superior

npm ou yarn

Git

#📥 Clonar o Repositório
git clone https://github.com/Gabrqueiroz/payment-dashboard.git
cd payment-dashboard

▶️ Instalar Dependências
npm install

▶️ Executar a Aplicação
npm run dev


O projeto estará disponível em:

http://localhost:5173

🔌 Integração com o Backend

Este frontend consome a API do projeto:

👉 Payment API (Spring Boot)
Certifique-se de que o backend esteja rodando em:

http://localhost:8080


A comunicação entre frontend e backend é feita via serviços responsáveis pelas requisições HTTP.

📈 Próximas Evoluções

Autenticação com JWT e controle de sessão
Dashboard com resumo financeiro
Listagem de transações
Transferências entre contas
Proteção de rotas autenticadas
Validações de formulário
Testes de interface
Deploy em nuvem (Vercel / Netlify)

👨‍💻 Autor

Gabriel Queiroz
Frontend & Backend Developer — React | TypeScript | Java | Spring Boot
