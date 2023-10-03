import { createElement } from "react";

export default function Cabecalho(props) {
  return (
    <>
      <header>
        <ul>
          {props.children.map((item, indice) => {
            createElement("li", { key: indice }, item);
            return item;
          })}
        </ul>
      </header>
    </>
  );
}
