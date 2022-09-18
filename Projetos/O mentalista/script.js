const numeroSecreto = parseInt(Math.random() * 11);
let numTentativas = 3;

function Chutar() {
  let elementoResultado = document.getElementById("resultado");

  let chute = parseInt(document.getElementById("valor").value);

  if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else if (chute == numeroSecreto) {
    elementoResultado.innerHTML = `Acertou, o número é ${numeroSecreto}`;
    numTentativas = 3;
    setTimeout(() => {
      window.location.reload(true);
    }, 1000);
  } else {
    numTentativas = numTentativas - 1;

    console.log(numTentativas);
    console.log(numeroSecreto);
    if (numeroSecreto > chute) {
      elementoResultado.innerHTML = `Errou, o número secreto é maior que ${chute}`;
    } else if (numeroSecreto < chute) {
      elementoResultado.innerHTML = `Errou, o número secreto é menor que ${chute}`;
    }
  }

  if (numTentativas === 0) {
    elementoResultado.innerHTML =
      "Foi esgotado o número de tentativas, tente novamente.";
    numTentativas = 3;
    setTimeout(() => {
      window.location.reload(true);
    }, 1000);
  }
}