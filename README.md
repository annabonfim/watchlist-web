# 🎬 Watchlist Web

Frontend da aplicação **Watchlist**, desenvolvido com **Angular**, com o objetivo de permitir que o usuário:

- ➕ adicione filmes e séries à lista
- 📋 visualize os itens cadastrados
- ✅ marque um item como assistido
- 🔄 alterne entre assistido e não assistido

Este projeto consome uma API backend desenvolvida em **Java + Spring Boot**.

---

## ✨ Funcionalidades

- Cadastro de novos itens na watchlist
- Listagem dos itens salvos
- Alteração do status de assistido / não assistido
- Integração com backend local via API REST
- Interface simples e intuitiva

---

## 🛠️ Tecnologias utilizadas

- Angular
- TypeScript
- HTML
- CSS
- HttpClient

---

## 📦 Backend da aplicação

Para que este frontend funcione corretamente, é necessário rodar o backend localmente.

Repositório do backend:  
[watchlist-api](https://github.com/annabonfim/watchlist-api)

---

## ▶️ Como rodar o projeto

### 1. Clone o repositório do frontend

```bash
git clone https://github.com/annabonfim/watchlist-web.git
cd watchlist-web
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Suba o backend localmente

Antes de rodar o frontend, clone e execute o backend:

```bash
git clone https://github.com/annabonfim/watchlist-api.git
cd watchlist-api
```

Depois, rode a aplicação backend pela sua IDE.

A API deve estar disponível em:

```bash
http://localhost:8080
```

### 4. Rode o frontend

Volte para a pasta do frontend e execute:

```bash
ng serve
```

ou

```bash
npm start
```

Depois acesse no navegador:

```bash
http://localhost:4200
```

---

## 🔌 Integração com o backend

O frontend está configurado para consumir a API local no endpoint base:

```bash
http://localhost:8080/watchlists
```

Principais operações utilizadas:

- `GET /watchlists`
- `POST /watchlists`
- `PATCH /watchlists/{id}`

---

## 📁 Estrutura do projeto

```bash
src/
 └── app/
     ├── form/
     ├── list/
     ├── list-item/
     ├── service/
     ├── app.ts
     ├── app.html
     └── app.config.ts
```

---

## 📌 Observações

- O backend precisa estar rodando localmente para que os dados apareçam no frontend.
- Caso a API não esteja ativa, a aplicação não conseguirá carregar ou atualizar os itens da watchlist.
- Verifique se a porta do backend está correta (`8080`), pois ela é usada nas chamadas da aplicação Angular.

---

## 🚀 Objetivo do projeto

Este projeto foi desenvolvido com foco em praticar:

- criação de componentes no Angular
- comunicação entre componentes
- integração frontend + backend
- consumo de API REST
- atualização dinâmica da interface

---
