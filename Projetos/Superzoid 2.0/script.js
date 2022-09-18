let carta1 = {
  nome: "Freakazoid",
  imagem:
    "https://m.media-amazon.com/images/M/MV5BNTQ2ODQ5MzE0OV5BMl5BanBnXkFtZTcwMDAxMzYwNA@@._V1_.jpg",
  atributos: {
    ataque: 7,
    defesa: 7,
    inteligencia: 7
  }
};

let carta2 = {
  nome: "The Lobe",
  imagem:
    "https://m.media-amazon.com/images/M/MV5BMTQzNTM4NTkwN15BMl5BanBnXkFtZTgwMjk3NDMwMjE@._V1_.jpg",
  atributos: {
    ataque: 2,
    defesa: 2,
    inteligencia: 10
  }
};

let carta3 = {
  nome: "Longhorn",
  imagem:
    "https://64.media.tumblr.com/51c1450e632062db836b25b668d50306/tumblr_nmsszkOM361qfe9fvo7_1280.png",
  atributos: {
    ataque: 10,
    defesa: 5,
    inteligencia: 1
  }
};

let carta4 = {
  nome: "Candle Jack",
  imagem:
    "https://i.pinimg.com/originals/00/95/17/00951753fd7a64216d21b649736c11fc.png",
  atributos: {
    ataque: 6,
    defesa: 7,
    inteligencia: 8
  }
};

let carta5 = {
  nome: "Cobra Queen",
  imagem:
    "https://64.media.tumblr.com/a8b85da20a8af627d5d8b7bd4701ab49/64bbf52ca4af38a3-67/s640x960/d68e7d3f96c44a35a475d91943d799b412ed7e24.jpg",
  atributos: {
    ataque: 4,
    defesa: 8,
    inteligencia: 8
  }
};

let carta6 = {
  nome: "Cave Guy",
  imagem:
    "https://64.media.tumblr.com/a3efb1c424ef367d4049fe9d509624a0/tumblr_n4imbnQXhf1rawb5do1_500.jpg",
  atributos: {
    ataque: 9,
    defesa: 1,
    inteligencia: 9
  }
};

let cartas = [carta1, carta2, carta3, carta4, carta5, carta6];

let maoMaquina, maoJogador;

let cartaMaquina, cartaJogador;

function sortearCarta() {
  let indexAtual = cartas.length,
    indexRandom;

  while (indexAtual != 0) {
    indexRandom = Math.floor(Math.random() * indexAtual);
    indexAtual--;

    [cartas[indexAtual], cartas[indexRandom]] = [
      cartas[indexRandom],
      cartas[indexAtual]
    ];
  }

  const metadeDoTotal = Math.floor(cartas.length / 2);

  maoMaquina = cartas.slice(0, metadeDoTotal);
  maoJogador = cartas.slice(-metadeDoTotal);

  resetCartas();

  document.getElementById("btnSortear").disabled = true;

  document.getElementById("btnJogar").disabled = false;

  let divResultado = (document.getElementById("resultado").innerHTML = "");

  exibirCarta("jogador");
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

  let divResultado = document.getElementById("resultado");

  let valorCartaJogador = cartaJogador.atributos[atributoSelecionado];

  let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (valorCartaJogador > valorCartaMaquina) {
    divResultado.innerHTML =
      '<p class="resultado-final">Melhor do que angu de bofe!</p>';

    maoJogador.push(cartaMaquina);

    maoMaquina = maoMaquina.filter((carta) => {
      return carta.nome !== cartaMaquina.nome;
    });

    resetCartas();

    exibirCarta("jogador");
  } else if (valorCartaJogador < valorCartaMaquina) {
    divResultado.innerHTML =
      '<p class="resultado-final">Eu quero uma bunda nova!</p>';
    maoMaquina.push(cartaJogador);

    maoJogador = maoJogador.filter((carta) => {
      return carta.nome !== cartaJogador.nome;
    });

    resetCartas();

    exibirCarta("jogador");
  } else {
    divResultado.innerHTML = '<p class="resultado-final">Empatou! Legal...</p>';
    resetCartas();
    exibirCarta("jogador");
  }
  exibirCarta("maquina");
}

function exibirCarta(parametro) {
  if (parametro === "jogador") {
    exibirCartaJogador();
  } else if (parametro === "maquina") {
    exibirCartaMaquina();
  }
}

function exibirCartaJogador() {
  let divCartaJogador = document.getElementById("carta-jogador");

  if (maoJogador.length === 0 || !cartaJogador) {
    limparTela();
    return (document.getElementById("resultado").innerHTML =
      '<p class="resultado-final">Que super herói que eu sou...</p>');
  }

  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;

  let moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

  const tagHTML = '<div class="carta-status" id="opcoes">';

  let opcoesTexto = "";

  for (let atributo in cartaJogador.atributos) {
    opcoesTexto +=
      `<input type='radio' name='atributo' id='${atributo}' value='${atributo}'>` +
      atributo +
      ": " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }
  let nome = `<p class="carta-subtitle">${cartaJogador.nome} </p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  document.getElementById("ataque").checked = "checked";
}

function exibirCartaMaquina() {
  let divCartaMaquina = document.getElementById("carta-maquina");

  if (maoMaquina.length === 0 || !cartaMaquina) {
    limparTela();

    return (document.getElementById("resultado").innerHTML =
      '<p class="resultado-final">PAMONHA!!!</p>');
  }

  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;

  let moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';

  const tagHTML = '<div class="carta-status" id="opcoes">';

  let opcoesTexto = "";

  for (let atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      `<p type='text' name='atributo' id='${atributo}' value='${atributo}'>` +
      atributo +
      ": " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  let nome = `<p class="carta-subtitle">${cartaMaquina.nome} </p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  document.getElementById("ataque").checked = "checked";
}

function resetCartas() {
  let numeroCartaJogador = parseInt(Math.random() * maoJogador.length);

  let numeroCartaMaquina = parseInt(Math.random() * maoMaquina.length);

  cartaJogador = maoJogador[numeroCartaJogador];

  cartaMaquina = maoMaquina[numeroCartaMaquina];
}

function limparTela() {
  limparCartaMaquina();

  limparCartajogador();

  document.getElementById("btnJogar").disabled = true;

  document.getElementById("btnSortear").disabled = false;
}

function limparCartaMaquina() {
  let divCartaMaquina = document.getElementById("carta-maquina");

  divCartaMaquina.style.backgroundImage = "";

  divCartaMaquina.innerHTML =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
}

function limparCartajogador() {
  let divCartaJogador = document.getElementById("carta-jogador");

  divCartaJogador.style.backgroundImage = "";

  divCartaJogador.innerHTML =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
}