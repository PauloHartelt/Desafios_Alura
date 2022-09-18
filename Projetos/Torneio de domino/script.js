let lucas = {
  nome: "Lucas",
  url:
    "https://images.unsplash.com/photo-1560525821-d5615ef80c69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

let matheus = {
  nome: "Matheus",
  url:
    "https://images.unsplash.com/photo-1624884252467-9e57b4b0f751?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGplc3VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

let rodrigo = {
  nome: "Rodrigo",
  url:
    "https://images.unsplash.com/photo-1620648378507-4ad3fac3bb51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=451&q=80",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

let andre = {
  nome: "André",
  url:
    "https://images.unsplash.com/photo-1617573211120-1165b16c2900?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

let jogadores = [lucas, matheus, rodrigo, andre];

function calculaPontos(jogador) {
  let pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

function exibeJogadoresNaTela(jogadores) {
  let elemento = "";

  for (let i = 0; i < jogadores.length; i++) {
    elemento +=
      "<tr><td><img src='" +
      jogadores[i].url +
      "'/>" +
      `${jogadores[i].nome} </td>`;
    elemento += `<td> ${jogadores[i].vitorias} </td>`;
    elemento += `<td> ${jogadores[i].empates} </td>`;
    elemento += `<td> ${jogadores[i].derrotas} </td>`;
    elemento += `<td> ${jogadores[i].pontos} </td>`;
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento += "<td><button onClick='adicionarEmpate()'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarImagem(" + i + ")'>Add img</button></td>";
    elemento += "</tr>";
  }

  let tabelaJogadores = (document.getElementById(
    "tabelaJogadores"
  ).innerHTML = elemento);
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  let jogador = jogadores[i];

  jogador.vitorias++;

  jogador.pontos = calculaPontos(jogador);

  for (let jogadoresExcluidos of jogadores) {
    if (jogadoresExcluidos.nome !== jogador.nome) {
      jogadoresExcluidos.derrotas++;
      jogadoresExcluidos.pontos = calculaPontos(jogadoresExcluidos);
    }
  }
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate() {
  jogadores.map((jogador) => {
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
  });
  exibeJogadoresNaTela(jogadores);
}

function adicionarImagem(i) {
  let jogador = jogadores[i];

  for (let jogador of jogadores) {
    if (document.getElementById("input").value == jogador.url) {
      document.getElementById("input").value = "";
      return (document.getElementById("mensagem").innerHTML =
        "Se ligue! Já tem essa imagem!");
    }
  }
  jogador.url = document.getElementById("input").value;
  document.getElementById("input").value = "";
  exibeJogadoresNaTela(jogadores);
}

function zerarPontos() {
  jogadores.map((jogador) => {
    jogador.vitorias = 0;
    jogador.empates = 0;
    jogador.derrotas = 0;
    jogador.pontos = calculaPontos(jogador);
  });
  exibeJogadoresNaTela(jogadores);
}

function checarFraude() {
  let somaVitorias = 0;
  let somaDerrotas = 0;
  for (let jogador of jogadores) {
    somaVitorias += jogador.vitorias;
    somaDerrotas += jogador.derrotas;
  }

  if (somaVitorias * (jogadores.length - 1) !== somaDerrotas) {
    document.getElementById("mensagem").innerHTML = "Tem gato nesse jogo...";
  }
}

function adicionarJogador() {
  let player = {
    nome: "",
    url: "",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  let inputNome = document.getElementById("input").value.toLowerCase();

  let letraMaiuscula = inputNome.charAt(0).toUpperCase();
  let restoDoNome = inputNome.slice(1);

  for (let jogador of jogadores) {
    if (letraMaiuscula + restoDoNome == jogador.nome) {
      document.getElementById("input").value = "";
      return (document.getElementById("mensagem").innerHTML =
        "Se ligue! Já tem esse nome!");
    }
  }

  player.nome = letraMaiuscula + restoDoNome;
  document.getElementById("input").value = "";
  jogadores.push(player);

  exibeJogadoresNaTela(jogadores);
}