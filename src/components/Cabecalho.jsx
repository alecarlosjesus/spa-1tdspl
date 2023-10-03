import { createElement } from "react";

export default function Cabecalho(props) {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/cadastrar">Cadastrar Produtos</Link>
          </li>{" "}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/cadastrar">Cadastrar Produtos</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
