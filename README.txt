# Sistema de Gerenciamento de Usuários

## Descrição
Sistema de gerenciamento de usuários desenvolvido com React.js, Node.js e PostgreSQL.
Permite cadastrar, listar, editar e excluir usuários.

## Tecnologias Utilizadas
- Frontend:
  - React.js
  - Reactstrap (UI components)
  - React Router (navegação)
  - Font Awesome (ícones)
  - React Hook Form (formulários)
  - Zod (validação)

- Backend:
  - Node.js
  - Express
  - PostgreSQL
  - Sequelize (ORM)
  - Docker (opcional)

## Funcionalidades
- Cadastro de usuários
- Listagem de usuários
- Edição de usuários
- Exclusão de usuários
- Validação de formulários
- Interface responsiva

## Estrutura do Projeto
```
web/                    # Frontend (React)
  ├── src/
  │   ├── components/  # Componentes reutilizáveis
  │   ├── pages/       # Páginas da aplicação
  │   ├── services/    # Serviços de API
  │   └── App.js       # Configuração principal
server/                 # Backend (Node.js)
  ├── src/
  │   ├── controllers/ # Controladores
  │   ├── models/      # Modelos do banco
  │   ├── routes/      # Rotas da API
  │   └── app.js       # Configuração principal
```

## Configuração do Ambiente

### Frontend
1. Navegue até a pasta web:
   ```bash
   cd web
   ```
2. Instale as dependências:
   ```bash
   yarn install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   yarn start
   ```

### Backend
1. Navegue até a pasta server:
   ```bash
   cd server
   ```
2. Instale as dependências:
   ```bash
   yarn install
   ```
3. Configure o arquivo .env com as credenciais do banco de dados
4. Inicie o servidor:
   ```bash
   yarn start
   ```

## Requisitos
- Node.js (versão 14 ou superior)
- PostgreSQL
- NPM ou Yarn

## Contribuição
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença
Este projeto está sob a licença MIT. 

