import { useEffect, useState } from "react";
import RandomColor from "./RandomColor";

export function PrettyColors() {
  const [batata, setBatata] = useState();
  useEffect(() => {
    let arr = fazCor();
    setBatata(
      arr.map((cor) => {
        return { cor: cor, block: false };
      })
    );
  }, []);

  function handleBlock(i) {
    setBatata(
      batata.map((e, j) => (j === i ? { cor: e.cor, block: !e.block } : e))
    );
  }

  function handleClick() {
    let arr = fazCor();
    setBatata(
      batata.map((e, j) =>
        e.block === false ? { cor: arr[j], block: false } : e
      )
    );
  }

  return (
    <div>
      {batata &&
        batata.map((e, i) => (
          <RandomColor
            block={e.block}
            cor={e.cor}
            onBlock={() => handleBlock(i)}
          ></RandomColor>
        ))}
      <button onClick={() => handleClick()}>djhasdkjshakj</button>
    </div>
  );
}

function fazCor() {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(
      rgbToHex(
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256)
      )
    );
  }
  return arr;
}
const rgbToHex = (r, g, b) =>
  "#" +
  [r, g, b]
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("");
