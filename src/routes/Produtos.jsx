import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import classes from "./Produtos.module.css";
import {AiFillEdit as Editar} from "react-icons/ai";

export default function Produtos() {
  return (
    <div>
      <h1>Produtos de INFORMÁTICA - FIPAPI</h1>
      <p>Os Melhores Produtos do Mercado</p>

      <table className={classes.estilo}>
        <thead>
          <tr>
            <th className={classes.tableHeaders}>ID</th>
            <th className={classes.tableHeaders}>NOME</th>
            <th className={classes.tableHeaders}>DESCRIÇÃO</th>
            <th className={classes.tableHeaders}>PREÇO</th>
            <th className={classes.tableHeaders}>EDITAR</th>
          </tr>
        </thead>

        <tbody>
          {ListaProdutos.map((produto, indice) => (
            <tr key={indice} className={classes.tableLine}>
              <td className={classes.tableData}>{produto.id}</td>
              <td className={classes.tableData}>{produto.nome}</td>
              <td className={classes.tableData}>{produto.desc}</td>
              <td className={classes.tableData}>{produto.preco}</td>
              <td className={classes.tableData}>
                <Link to={`/editar/produtos/${produto.id}`}> <Editar/> </Link>
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
