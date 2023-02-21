/**
 * Operator Rest (recibir parametros)
 */

function calcularDeuda(...deudas) {
  let total = 0;
  deudas.forEach((deuda) => (total += deuda));
  return total;
}

console.log(calcularDeuda(100, 200, 300, 400));

/**
 * Operator Spread (enviar argumentos)
 */

const saldoBase = 1000;
const deudas = [100, 200, 300, 400];
const totaldeudas = [saldoBase, ...deudas];
console.log(totaldeudas);
const resultado = calcularDeuda(...totaldeudas);
console.log(resultado);
