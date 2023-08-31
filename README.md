# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Passos realizados na criação de Rotas com Router-DOM

- Instalação do Router-DOM
- Criação da pasta routes com as rotas[Home,Produtos, EditarProdutos e Erro404]
- Alterar o arquivo main.jsx, adicionando os imports para os objetos de rotas e o createBrowserRouter e RouterProvider.
- Criando o objeto de rotas e adicionando apenas a rota App e exibindo com o RouterProvider.
- Adicionando o atributo children no objeto de rotas e adicionar as rotas Home, Produtos, EditarProdutos e Erro404.
- Alterando o componente que será renderizado pelo ReactDom.render para o RouterProvider com o objeto de rotas(router).
- Iniciando o componente Outlet para renderizar as rotas filhas.
- Criando rotas com o componente Link.
