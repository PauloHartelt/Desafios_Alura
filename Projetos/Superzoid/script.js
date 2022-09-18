let carta1 = {
  nome: "Freakazoid",
  url:
    "https://m.media-amazon.com/images/M/MV5BNTQ2ODQ5MzE0OV5BMl5BanBnXkFtZTcwMDAxMzYwNA@@._V1_.jpg",
  atributos: {
    ataque: 7,
    defesa: 7,
    inteligencia: 7
  }
};

let carta2 = {
  nome: "The Lobe",
  url:
    "https://m.media-amazon.com/images/M/MV5BMTQzNTM4NTkwN15BMl5BanBnXkFtZTgwMjk3NDMwMjE@._V1_.jpg",
  atributos: {
    ataque: 2,
    defesa: 2,
    inteligencia: 10
  }
};

let carta3 = {
  nome: "Longhorn",
  url:
    "https://64.media.tumblr.com/51c1450e632062db836b25b668d50306/tumblr_nmsszkOM361qfe9fvo7_1280.png",
  atributos: {
    ataque: 9,
    defesa: 5,
    inteligencia: 2
  }
};

let cartas = [carta1, carta2, carta3];

let cartaMaquina;

let cartaJogador;

function sortearCarta() {
  let numeroCartaMaquina = parseInt(Math.random() * cartas.length);

  cartaMaquina = cartas[numeroCartaMaquina];

  let numeroCartaJogador = parseInt(Math.random() * cartas.length - 1);

  let cartasRestantes = cartas.filter((carta, index) => {
    return index !== numeroCartaMaquina;
  });

  cartaJogador = cartasRestantes[numeroCartaJogador];

  console.log(cartaJogador);

  document.getElementById("carta-jogador").src = cartaJogador.url;

  document.getElementById("btnSortear").disabled = true;

  document.getElementById("btnJogar").disabled = false;

  exibirOpcoes();
}

function exibirOpcoes() {
  let opcoes = document.getElementById("opcoes");

  let opcoesTexto = "";

  for (let atributo in cartaJogador.atributos) {
    opcoesTexto +=
      `<input type='radio' name='atributo' id='${atributo}' value='${atributo}'>` +
      atributo;
  }
  opcoes.innerHTML = opcoesTexto;
  document.getElementById("ataque").checked = "checked";
}

function obtemAtributoSelecionado() {
  let radioAtributos = document.getElementsByName("atributo");
  for (let atributoSelecionado of radioAtributos) {
    if (atributoSelecionado.checked) {
      return atributoSelecionado.value;
    }
  }
}

function jogar() {
  let atributoSelecionado = obtemAtributoSelecionado();

  let elementoResultado = document.getElementById("resultado");

  let valorCartaJogador = cartaJogador.atributos[atributoSelecionado];

  let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = "Melhor do que angú de bofe!";
  } else if (valorCartaJogador < valorCartaMaquina) {
    elementoResultado.innerHTML = "Eu quero uma bunda nova!";
  } else {
    elementoResultado.innerHTML = "Empatou! Legal...";
  }
  console.log(cartaMaquina);
}