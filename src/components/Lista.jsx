import { Link } from "react-router-dom";
import Cabecalho from "./Cabecalho";

export default function Lista() {
  return (
    <>
      <Cabecalho>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/produtos">Produtos</Link>
        </li>
        <li>
          <Link to="/editar/produtos/1">Produto - 1</Link>
        </li>
        <li>
          <Link to="/editar/produtos/2">Produto - 2</Link>
        </li>
        <li>
          <Link to="/editar/produtos/3">Produto - 3</Link>
        </li>
      </Cabecalho>
    </>
  );
}
