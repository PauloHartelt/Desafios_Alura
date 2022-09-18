function converterCelsius() {
  const valorCelsius = document.getElementById("celsius"),
    valorKelvin = document.getElementById("kelvin"),
    valorFahrenheit = document.getElementById("fahrenheit");

  let valorC = valorCelsius.value,
    valorK = valorKelvin.value,
    valorF = valorFahrenheit.value;
  let valorEmCelsius = parseFloat(valorC),
    valorEmKelvin = parseFloat(valorK),
    valorEmFahrenheit = parseFloat(valorF);
  let conversaoKelvin = valorEmKelvin - 273,
    conversaoFahrenheit = (valorEmFahrenheit - 32) / 1.8;
  const elementoValorConvertido = document.getElementById("valorConvertido");
  elementoValorConvertido.innerHTML = `São ${
    isNaN(valorEmCelsius) ? 0 : valorEmCelsius
  }° em Celsius, ${
    isNaN(valorEmKelvin) ? 0 : conversaoKelvin.toFixed(2)
  }° em Kelvin e ${
    isNaN(valorEmFahrenheit) ? 0 : conversaoFahrenheit.toFixed(2)
  }° em Fahrenheit`;
}
function converterKelvin() {
  const valorCelsius = document.getElementById("celsius"),
    valorKelvin = document.getElementById("kelvin"),
    valorFahrenheit = document.getElementById("fahrenheit");

  let valorC = valorCelsius.value,
    valorK = valorKelvin.value,
    valorF = valorFahrenheit.value;
  let valorEmCelsius = parseFloat(valorC),
    valorEmKelvin = parseFloat(valorK),
    valorEmFahrenheit = parseFloat(valorF);

  let conversaoCelsius = valorEmCelsius + 273,
    conversaoFahrenheit = (valorEmFahrenheit + 459.67) * (5 / 9);
  const elementoValorConvertido = document.getElementById("valorConvertido");
  elementoValorConvertido.innerHTML = `São ${
    isNaN(valorEmCelsius) ? 0 : conversaoCelsius.toFixed(2)
  }° em Celsius, ${isNaN(valorEmKelvin) ? 0 : valorEmKelvin}° em Kelvin e ${
    isNaN(valorEmFahrenheit) ? 0 : conversaoFahrenheit.toFixed(2)
  }° em Fahrenheit`;
}
function converterFahrenheit() {
  const valorCelsius = document.getElementById("celsius"),
    valorKelvin = document.getElementById("kelvin"),
    valorFahrenheit = document.getElementById("fahrenheit");

  let valorC = valorCelsius.value,
    valorK = valorKelvin.value,
    valorF = valorFahrenheit.value;
  let valorEmCelsius = parseFloat(valorC),
    valorEmKelvin = parseFloat(valorK),
    valorEmFahrenheit = parseFloat(valorF);

  let conversaoCelsius = valorEmCelsius * 1.8 + 32,
    conversaoKelvin = (valorEmKelvin - 273) * 1.8 + 32;
  const elementoValorConvertido = document.getElementById("valorConvertido");
  elementoValorConvertido.innerHTML = `São ${
    isNaN(valorEmCelsius) ? 0 : conversaoCelsius.toFixed(2)
  }° em Celsius, ${
    isNaN(valorEmKelvin) ? 0 : conversaoKelvin.toFixed(2)
  }° em Kelvin e ${
    isNaN(valorEmFahrenheit) ? 0 : valorEmFahrenheit
  }° em Fahrenheit`;
}