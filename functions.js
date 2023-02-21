/**
 * Function Declaration
 */

function jugar(valor = 10) {
  return valor * 10;
}

console.log(jugar(10));

/**
 * Function Expression
 */

const resultado = function (valor = 10) {
  return valor * 10;
};

console.log(resultado(10));
