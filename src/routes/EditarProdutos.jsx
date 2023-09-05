import { useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";

export default function EditarProdutos() {

  document.title = "Editar Produtos";

  //Receber o ID do produto pelo HOOK useParams( );
  const {id} = useParams();

  //Recuperar o produto na lista pelo ID.
  const produtoRecuperado = ListaProdutos.filter( produto => produto.id == id );

  return (
      <div>
        <h1>EditarProdutos</h1> 
        <p>Descrição : { produtoRecuperado[0].desc }</p>
        <p>Preço : { produtoRecuperado[0].preco }</p>

        <div>
          <form>
            <fieldset>
              <legend>Produto a ser Editado</legend>
              <div>
                <label htmlFor="idNome">Nome:</label>
                <input type="text" name="nome" id="idNome" defaultValue={produtoRecuperado[0].nome}/>
              </div>
              <div>
                <label htmlFor="idDesc">Descrição:</label>
                <input type="text" name="desc" id="idDesc" defaultValue={produtoRecuperado[0].desc}/>
              </div>
              <div>
                <label htmlFor="idPreco">Preço:</label>
                <input type="text" name="preco" id="idPreco" defaultValue={produtoRecuperado[0].nome}/>
              </div>
              <div>
                <button>EDITAR</button>
              </div>

            </fieldset>
          </form>
        </div>
        
      </div>
  )
}
