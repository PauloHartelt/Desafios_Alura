/*
//Desafio 01
const notasPrimeiroBimestre = [3, 8, 10, 8];

let somatorio =
  notasPrimeiroBimestre.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
  }) / 4;

if (Math.floor(somatorio) >= 7) {
  console.log(`Parabéns, você foi aprovado(a) com ${somatorio.toFixed(1)}!`);
} else {
  console.log(`Poxa, você foi reprovado(a) com ${somatorio.toFixed(1)}`);
}
*/
//Desafio 03
const notasPrimeiroBimestre = [10, 10, 10, 10];

let somatorio =
  notasPrimeiroBimestre.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
  }) / 4;

if (Math.floor(somatorio) >= 7) {
  document.getElementById("texto").innerText = `Parabéns, você foi aprovado(a) com ${somatorio.toFixed(1)}!` 
} else {
  document.getElementById("texto").innerText = `Poxa, você foi reprovado(a) com ${somatorio.toFixed(1)}`
}
/*
//Desafio 04
const temperaturaCelsius = 7;
if (!Number(temperaturaCelsius)) {
  return console.log(
    'Por favor, insira um número válido para que eu possa calcular'
  );
}
let conversorFahrenheit = temperaturaCelsius * 1.8 + 32;

console.log(conversorFahrenheit);
*/
/*
//Desafio 05
const notasPrimeiroBimestre = [3, 8, 10, 8];

console.log(
  (
    notasPrimeiroBimestre.reduce((acumulador, valorAtual) => {
      return acumulador + valorAtual;
    }) / 4
  ).toFixed(1)
);
*/