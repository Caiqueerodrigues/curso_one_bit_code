"use strict";

var visorResultado = document.getElementById("resultado");
var mediaSimples = function mediaSimples() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  console.log(numbers);
  var soma = numbers.reduce(function (accum, num) {
    return accum + num;
  }, 0);
  console.log(soma);
  console.log(numbers.length);
  visorResultado.innerText = "A m\xE9dia SIMPLES \xE9: ".concat(soma / numbers.length);
  return;
};
var mediaPonderada = function mediaPonderada() {
  for (var _len2 = arguments.length, entradas = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entradas[_key2] = arguments[_key2];
  }
  var soma = entradas.reduce(function (accum, _ref) {
    var number = _ref.number,
      peso = _ref.peso;
    return accum + number * (peso !== null && peso !== void 0 ? peso : 1);
  }, 0);
  var somaPesos = entradas.reduce(function (accum, entradas) {
    var _entradas$peso;
    return accum + ((_entradas$peso = entradas.peso) !== null && _entradas$peso !== void 0 ? _entradas$peso : 1);
  }, 0);
  visorResultado.innerText = "A soma PONDERADA \xE9: ".concat(soma / somaPesos);
};

//minha RESOLUCAO
var mediana = function mediana() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var numberOrdenad = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });
  var lenght = Math.ceil(numbers.length / 2 - 1);
  if (numbers.length % 2 !== 0) {
    visorResultado.innerText = "A MEDIANA \xE9: ".concat(numberOrdenad[lenght]);
  } else {
    var resultadoMediana = (numberOrdenad[lenght] + numberOrdenad[lenght + 1]) / 2;
    visorResultado.innerText = "A MEDIANA \xE9: ".concat(resultadoMediana);
  }
  console.log({
    numbers: numbers
  }, lenght, numbers.length % 2);
};
var moda = function moda() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  var quantidades = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  //ordem descrecente
  quantidades.sort(function (a, b) {
    b[1] - a[1];
  });
  visorResultado.innerText = "O n\xFAmero que mais se REPETIU \xE9: ".concat(quantidades[0][0]);
};
