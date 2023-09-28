import styles from "./ModalInserir.module.css";

export default function ModalInserir(props) {
  if (props.open) {
    return (
      <div className={styles.container}>
        <h1>CADASTRO DE PRODUTOS</h1>
        <button onClick={()=> props.setOpen(false)}>CLOSE-MODAL</button>

        <div>
          <form>
            <fieldset>
              <legend>Novo Produto</legend>
              <div className="formInput">
                <label htmlFor="idNome">Nome</label>
                <input type="text" name="nome" id="idNome" placeholder="Digite o nome do produto."/>
              </div>
              <div className="formInput">
                <label htmlFor="idDesc">Descrição</label>
                <input type="text" name="desc" id="idDesc" placeholder="Digite a descrição do produto."/>
              </div>
              <div className="formInput">
                <label htmlFor="idPreco">Preço</label>
                <input type="number" name="preco" id="idPreco" placeholder="Digite o valor do produto."/>
              </div>
              <div className="formInput">
                <label htmlFor="idImg">Imagem</label>
                <input type="url" name="img" id="idImg" placeholder="Digite a url da imagem."/>
              </div>
              <div className="formInput">
                <button>CADASTRAR</button>
              </div>
            </fieldset>
          </form>
        </div>

      </div>
    );
  }
}
