import { useParams } from 'react-router-dom';
import { ListaProdutos } from '../components/ListaProdutos';

export default function ExcluirProdutos() {

    document.title = "Excluir Produtos";

    //Receber o ID do produto pelo HOOK useParams( );
    const {id} = useParams();

    //Recuperar o produto na lista pelo ID.
    const produto = ListaProdutos.filter( produto => produto.id == id);



  return (
    <>
        <div>
            <h1>Excluir Produtos</h1>
        </div>
        
    </>
  )
}
