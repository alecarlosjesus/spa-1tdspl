import { createElement } from "react"

export default function Cabecalho(props) {
    {
      /* Vamos criar um cabecalho com um header, um titulo h1 e 
        uma lista ul com itens com links*/
    }
    let newItem;
  
    return(
      <>
          <header>
      <h1>Vite + React / coded by LeoYuuki</h1>
      <ul>
            {props.children.map((item,indice) => {
                createElement('li', {key: indice}, item);
                return  item;
            })
        }
      </ul>
    </header>
      </>
    )
  }
  