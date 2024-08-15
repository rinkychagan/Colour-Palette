import { useState } from "react";

export function RandomColor(props) {
  return (
    <div className="flex flex-col text-gray-400 cursor-pointer">
      <div
        className="h-72 w-40 p-4 m-4 rounded rounded-lg"
        style={{
          backgroundColor: props.cor,
        }}
        onClick={() => {
          navigator.clipboard.writeText(props.cor);
        }}
      >
        {" "}
      </div>
      <button
        className=""
        onClick={() => {
          navigator.clipboard.writeText(props.cor);
        }}
      >
        {props.cor}
      </button>
      <button onClick={props.onBlock}>
        {props.block ? "Unblock" : "Block"}
      </button>
      {/* <button onClick={handleGenerate}>Gerar cor</button> */}
    </div>
  );
}

export default RandomColor;
