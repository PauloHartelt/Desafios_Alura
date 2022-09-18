//Conversor da aula, melhorado:

function converterRS() {
  let valor = document.getElementById("valor").value;
  const elementoValorConvertido = document.getElementById("valorConvertido");
  if (valor < 0) {
    elementoValorConvertido.innerHTML =
      "Por favor, insira somente números positivos";
  } else if (valor == 0) {
    elementoValorConvertido.innerHTML = "Por favor, insira números não nulos";
  } else {
    conversorParaReal(valor);
  }
}

function converterYen() {
  let valor = document.getElementById("valor").value;
  const elementoValorConvertido = document.getElementById("valorConvertido");

  if (valor < 0) {
    elementoValorConvertido.innerHTML =
      "Por favor, insira somente números positivos";
  } else if (valor == 0) {
    elementoValorConvertido.innerHTML = "Por favor, insira números não nulos";
  } else {
    conversorParaIene(valor);
  }
}

function converterBit() {
  const valor = document.getElementById("valor").value;
  const elementoValorConvertido = document.getElementById("valorConvertido");
  if (valor < 0) {
    elementoValorConvertido.innerHTML =
      "Por favor, insira somente números positivos";
  } else if (valor == 0) {
    elementoValorConvertido.innerHTML = "Por favor, insira números não nulos";
  } else {
    conversorParaBit(valor);
  }
}

//////////Utils:

function conversorParaBit(valorEmString) {
  let valorNumber = parseFloat(valorEmString);
  let escolhaMoeda = document.getElementById("moeda-select").value;

  if (escolhaMoeda === "bitcoins") {
    let conversao = valorNumber;
    const elementoValorConvertido = (document.getElementById(
      "valorConvertido"
    ).innerHTML = `O resultado em Bitcoins é BTC ${conversao.toLocaleString(
      "en-US"
    )}`);
  } else if (escolhaMoeda === "reais") {
    let conversao = valorNumber * 111112.27;
    const elementoValorConvertido = (document.getElementById(
      "valorConvertido"
    ).innerHTML = `O resultado em Reais é R$ ${conversao.toLocaleString(
      "pt-BR"
    )}`);
  } else {
    let conversao = valorNumber * 3082283.4;
    const elementoValorConvertido = (document.getElementById(
      "valorConvertido"
    ).innerHTML = `O resultado em Yenes é ¥ ${conversao.toLocaleString(
      "ja-JP"
    )}`);
  }
}

function conversorParaIene(valorEmString) {
  let valorNumber = parseFloat(valorEmString);
  let escolhaMoeda = document.getElementById("moeda-select").value;
  if (escolhaMoeda === "ienes") {
    let conversao = valorNumber;
    const elementoValorConvertido = (document.getElementById(
      "valorConvertido"
    ).innerHTML = `O resultado em Yenes é ¥ ${conversao.toLocaleString(
      "ja-JP"
    )}`);
  } else if (escolhaMoeda === "reais") {
    let conversao = valorNumber * 27.68;
    const elementoValorConvertido = (document.getElementById(
      "valorConvertido"
    ).innerHTML = `O resultado em Reais é R$ ${conversao.toLocaleString(
      "pt-BR"
    )}`);
  } else {
    let conversao = valorNumber * 3072664.31;
    const elementoValorConvertido = (document.getElementById(
      "valorConvertido"
    ).innerHTML = `O resultado em Bitcoins BTC ${conversao.toLocaleString(
      "en-US"
    )}`);
  }
}

function conversorParaReal(valorEmString) {
  let valorNumber = parseFloat(valorEmString);
  let escolhaMoeda = document.getElementById("moeda-select").value;

  if (escolhaMoeda === "reais") {
    let conversao = valorNumber;
    const elementoValorConvertido = (document.getElementById(
      "valorConvertido"
    ).innerHTML = `O resultado em Reais é R$ ${conversao.toLocaleString(
      "pt-BR"
    )}`);
  } else if (escolhaMoeda === "ienes") {
    let conversao = valorNumber * 0.036;
    const elementoValorConvertido = (document.getElementById(
      "valorConvertido"
    ).innerHTML = `O resultado em Yenes é ¥ ${conversao.toLocaleString(
      "ja-JP"
    )}`);
  } else {
    let conversao = valorNumber * 111213.07;
    const elementoValorConvertido = (document.getElementById(
      "valorConvertido"
    ).innerHTML = `O resultado em Bitcoins BTC ${conversao.toLocaleString(
      "en-US"
    )}`);
  }
}