function formataNumero(valor) {
  if (typeof valor !== "number") {
    return "Número não válido.";
  }

  const numbers = valor.toString().split("").map(Number);
  let result = "";

  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
    if (
      i < numbers.length - 1 &&
      numbers[i] % 2 === 0 &&
      numbers[i + 1] % 2 === 0
    ) {
      result += "-";
    }
  }
  return result;
}

console.log(formataNumero(12344));
