# 📝 Gerenciador de Tarefas

![Banner do Projeto](https://img.shields.io/badge/Status-Em_Desenvolvimento-green?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=yellow)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-F56565?style=for-the-badge)

---

## 🚀 Demo Online

[![Deploy Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://task-manager-react-ts-six.vercel.app/)

👉 **Acesse a aplicação em produção:**  
🔗 https://task-manager-react-ts-six.vercel.app/

---

## 📋 Sobre o Projeto

O **Gerenciador de Tarefas** é uma aplicação web desenvolvida com **React**, **Vite** e **TypeScript**, com foco em organização de tarefas, boas práticas de componentização e uso de ferramentas modernas do ecossistema frontend.

A aplicação permite ao usuário criar, visualizar, concluir e excluir tarefas, além de testar consumo de API REST e persistência de dados no navegador.

---

## ✨ Funcionalidades

- ➕ Criar tarefas com **título** e **descrição**
- 👀 Visualizar **detalhes da tarefa** em uma rota dedicada
- ✅ Marcar tarefas como **concluídas**
- 🗑️ Excluir tarefas
- 💾 Persistência automática com **LocalStorage**
- 🌐 Teste de consumo de API REST usando **JSONPlaceholder**
- 🧭 Navegação entre páginas com **React Router DOM**
- 🎨 Interface estilizada com **Tailwind CSS**
- 🔐 Identificação única de tarefas com **UUID**

---

## 🛠️ Tecnologias Utilizadas

- **React**
- **Vite**
- **TypeScript**
- **React Router DOM**
- **Tailwind CSS**
- **Lucide React**
- **UUID**
- **LocalStorage**
- **JSONPlaceholder (API REST de testes)**

---

## 🧩 Destaques Técnicos

- Tipagem forte com **TypeScript**
- Estado inicial carregado via **lazy initialization**
- Persistência de dados com **useEffect**
- Manipulação imutável de estado (`map` e `filter`)
- Componentes reutilizáveis
- Código organizado e legível
- Preparado para integração com backend real

---

## 💾 Persistência de Dados

As tarefas são armazenadas automaticamente no **LocalStorage** sempre que o estado é atualizado, garantindo que os dados não sejam perdidos ao recarregar a página.

```ts
useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);
```

### 🌐 Consumo de API (Teste)

Foi realizado um teste de consumo de API REST utilizando o JSONPlaceholder, simulando o carregamento inicial de tarefas.

```ts
fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
```

### 🚀 Como Executar o Projeto

```bash
# Clone o repositório
git clone https://github.com/GLemes25/task-manager-react-ts.git

# Acesse a pasta
cd seu-repositorio

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

### 🔮 Possíveis Evoluções

- Integração com backend próprio
- Autenticação de usuários
- Edição de tarefas
- Filtros por status
- Paginação
- Testes automatizados
- Deploy em produção

### 👤 Autor

## Gabriel Lemes de Oliveira

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/gabriel-lemes-G25)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:gabriellemes924@gmail.com)
[![Whatsapp](https://img.shields.io/badge/Whatsapp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/5567991179190)
