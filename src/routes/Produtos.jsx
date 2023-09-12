import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";

export default function Produtos() {
  return (
    <div>
      <h1>Produtos de INFORMÁTICA - FIPAPI</h1>
      <p>Os Melhores Produtos do Mercado</p>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>DESCRIÇÃO</th>
            <th>PREÇO</th>
            <th>EDITAR</th>
          </tr>
        </thead>

        <tbody>
          {ListaProdutos.map((produto, indice) => (
            <tr key={indice}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.desc}</td>
              <td>{produto.preco}</td>
              <td>
                {" "}
                <Link to={`/editar/produtos/${produto.id}`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={3}>PRODUTOS</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
