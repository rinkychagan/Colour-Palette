import { useState } from "react";

export function RandomColor(props) {
  return (
    <div style={{ backgroundColor: props.cor }}>
      <p></p>
      <button
        onClick={() => {
          navigator.clipboard.writeText(props.cor);
        }}
      >
        {props.cor}
      </button>

      <button onClick={props.onBlock}>
        {props.block ? "Desbloquear" : "Bloquear"}{" "}
      </button>

      {/* <button onClick={handleGenerate}>Gerar cor</button> */}
    </div>
  );
}

export default RandomColor;
