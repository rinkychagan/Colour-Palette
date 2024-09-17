import { useEffect, useState } from "react";
import RandomColor from "./RandomColor";

export function PrettyColors() {
  const [batata, setBatata] = useState([]);
  const [palette, setPalette] = useState([]);

  useEffect(() => {
    let arr = fazCor();
    setPalette(arr);
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
    setPalette(arr);
    setBatata(
      batata.map((e, j) =>
        e.block === false ? { cor: arr[j], block: false } : e
      )
    );
  }

  return (
    <div className="h-screen flex items-center justify-center flex-col px-4 sm:px-6 lg:px-8">
      <div className="bg-white bg-opacity-40 backdrop-blur-md p-6 sm:p-8 lg:p-10 flex flex-col items-center rounded-xl shadow-lg border border-4">
        <h1 className="text-3xl sm:text-4xl text-white mb-6 sm:mb-8 font-bold text-center">
          Colour Palette Generator
        </h1>

        <div className="flex flex-nowrap">
          {batata &&
            batata.map((e, i) => (
              <RandomColor
                key={i}
                block={e.block}
                cor={e.cor}
                onBlock={() => handleBlock(i)}
                palette={palette}
              />
            ))}
        </div>

        <button
          className="bg-gray-900 hover:bg-gray-600 p-4 rounded-lg text-white font-bold mt-6 transition-colors duration-300 ease-in-out shadow-md"
          onClick={() => handleClick()}
        >
          Randomize
        </button>
      </div>
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
