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
      </Cabecalho>
    </>
  );
}
