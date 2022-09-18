let listaPosters = [
  "https://images.unsplash.com/photo-1580130732455-6663b4ce9f6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=456&q=80",
  "https://images.unsplash.com/photo-1580130718646-9f6942092ad3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=409&q=80",
  "https://images.unsplash.com/photo-1580130579792-c4f6ce908069?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80",
  "https://images.unsplash.com/photo-1580130544390-ba44d5ae8103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHVibGljJTIwc2VydmljZSUyMGFubm91bmNlbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1580130544326-80fc93876841?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=390&q=80",
  "https://images.unsplash.com/photo-1580130544397-1c99e5664fad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=364&q=80",
  "https://images.unsplash.com/photo-1580130857334-2f9b6d01d99d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=432&q=80",
  "https://images.unsplash.com/photo-1580130718810-358e5e8af61b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1580130732478-4e339fb6836f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1580130601254-05fa235abeab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=368&q=80",
  "https://images.unsplash.com/photo-1580130544401-347c796dceec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHB1YmxpYyUyMHNlcnZpY2UlMjBhbm5vdW5jZW1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1578406843598-34a4518d168d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=433&q=80",
  "https://images.unsplash.com/photo-1580130775562-0ef92da028de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1662373227908-1e91c21e1502?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=374&q=80",
  "https://images.unsplash.com/photo-1662372850460-2b20d55a86f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=379&q=80"
];

function adicionarPoster() {
  const url = document.getElementById("url").value;

  let encontrado = false;

  for (let poster of listaPosters) {
    if (poster === url) {
      document.getElementById("mensagem").innerHTML = "Pôster já cadastrado!";
      encontrado = true;
    }
  }

  if (!encontrado) {
    listaPosters.push(url);
    let imgPoster = document.createElement("img");
    imgPoster.src = url;
    imgPoster.id = "imagem";
    document.body.appendChild(imgPoster);
  }
}

for (const poster of listaPosters) {
  document.write(`<img src=${poster} id="imagem">`);
}