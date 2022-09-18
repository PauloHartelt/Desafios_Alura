let listaDeFilmes = [];

let listaDeNomes = [];

function adicionarFilme() {
  const filmeFavorito = document.getElementById("filme").value;

  const nomeDoFilme = document.getElementById("nome").value;

  if (filmeFavorito.toLowerCase().endsWith(".jpg")) {
    listaDeFilmes.push(filmeFavorito.trim());

    listaDeNomes.push(nomeDoFilme.trim());

    listarFilmesNaTela(filmeFavorito, nomeDoFilme);
  } else {
    console.error("Endereço do filme inválido");
  }
  document.getElementById("nome").value = "";

  document.getElementById("filme").value = "";
}

function removerFilme() {
  let elementoListaFilmes = document.getElementById("listaFilmes");

  if (listaDeFilmes.length === 0) {
    document.getElementById("mensagem").innerHTML = "Sem filmes para remover";
  } else {
    elementoListaFilmes.lastChild.remove();
    listaDeFilmes.pop();
  }
  listaDeNomes.pop();
  document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme, filmeNome) {
  let elementoFilmeFavorito = `<figure><img src=${filme} id="imagem"> <figcaption>${filmeNome.trim()}</figcaption></figure>`;

  let elementoListaFilmes = document.getElementById("listaFilmes");

  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
}