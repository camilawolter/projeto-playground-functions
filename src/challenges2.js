// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let resultado;
  
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    resultado = true;
  } else {
    resultado = false;
  }
  
  if (lineA > Math.abs(lineB- lineC) && lineB > Math.abs(lineC- lineA) && lineC > Math.abs(lineA - lineB)) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}
console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
