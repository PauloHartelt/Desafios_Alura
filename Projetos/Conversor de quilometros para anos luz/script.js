function converterQuilometros() {
  const valorQuilometros = document.getElementById("km");

  let valorKm = valorQuilometros.value;

  if (valorKm <= 0) {
    const elementoValorConvertido = document.getElementById("kmConvertido");
    elementoValorConvertido.innerHTML = "Foguete só vai pra frente...";
  } else {
    let valorEmQuilometros = parseFloat(valorKm);

    let conversaoLuz = valorEmQuilometros * 0.0000000000001057;

    let distanciaEntreEstrelas = 4.25 / conversaoLuz;

    const elementoValorConvertido = document.getElementById("kmConvertido");

    elementoValorConvertido.innerHTML = `Trânsito espacial de ${conversaoLuz.toFixed(
      2
    )} ${Math.floor(conversaoLuz) >= 2 ? "anos-luz" : "ano-luz"}, ${
      Math.floor(distanciaEntreEstrelas) >= 2 ? "faltam" : "falta"
    }
${distanciaEntreEstrelas.toFixed(2)} ${
      Math.floor(distanciaEntreEstrelas) >= 2 ? "horas" : "hora"
    } para a próxima estrela`;
  }
}