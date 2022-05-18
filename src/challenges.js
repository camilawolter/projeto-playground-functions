// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(nomes) {
  return nomes[nomes.length -1] + ', ' + nomes[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}

// Desafio 6
function highestCount(numeros) {
  let maiorNumero = numeros[0];
  let contador = 0;

  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] > maiorNumero) {
      maiorNumero = numeros[index];
    }
  }
  for (let index = 0; index < numeros.length; index += 1) {
    if (maiorNumero === numeros[index]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode(letras) {
  let vogais = letras.split('');

  for (let index = 0; index < vogais.length; index += 1) {
    if (vogais[index] === 'a') {
      vogais[index] = 1;
    } else if (vogais[index] === 'e') {
      vogais[index] = 2;
    } else if (vogais[index] === 'i') {
      vogais[index] = 3;
    } else if (vogais[index] === 'o') {
      vogais[index] = 4;
    } else if (vogais[index] === 'u') {
      vogais[index] = 5;
    }
  }
  return vogais.join('');
}
function decode(letras) {
  let vogais = letras.split('');

  for (let index = 0; index < vogais.length; index += 1) {
    if (vogais[index] == 1) {
      vogais[index] = 'a';
    } else if (vogais[index] == 2) {
      vogais[index] = 'e';
    } else if (vogais[index] == 3) {
      vogais[index] = 'i';
    } else if (vogais[index] == 4) {
      vogais[index] = 'o'
    } else if (vogais[index] == 5) {
      vogais[index] = 'u'
    }
  }
  return vogais.join('');
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
