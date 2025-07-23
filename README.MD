# CRUD Completo com Node.js, Express e MongoDB

Este projeto é um exemplo de aplicação CRUD utilizando Node.js, Express e MongoDB.

## Funcionalidades

- **Create**: Adiciona uma nova venda mensal.
- **Read**: Lista todas as vendas mensais.
- **Update**: Atualiza uma venda mensal pelo ID.
- **Delete**: Remove uma venda mensal pelo ID.

## Como rodar o projeto

1. **Clone o repositório**
2. **Instale as dependências**
   ```bash
   npm install
   ```
3. **Configure o arquivo `.env`**
   - Crie um arquivo `.env` na raiz do projeto com a variável `MONGO_URI`:
     ```
     MONGO_URI=sua_string_de_conexao_mongodb
     ```
4. **Inicie o servidor**
   ```bash
   node server.js
   ```

## Rotas da API

- `POST /vendas` – Cria uma nova venda
- `GET /vendas` – Lista todas as vendas
- `PUT /vendas/:id` – Atualiza uma venda pelo ID
- `DELETE /vendas/:id` – Remove uma venda pelo ID

## Observações

- Não esqueça de adicionar seu IP no painel do MongoDB Atlas para permitir a conexão.
- O arquivo `.env` não é enviado para o repositório por segurança.

---
