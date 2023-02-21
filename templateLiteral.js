const pais = "Colombia";
const capital = "Bogota";
const moneda = "Peso Colombiano";

const mensaje =
  "El pais de " +
  pais +
  " donde la capital es: " +
  capital +
  " su divisa es el " +
  moneda;

console.log(mensaje);

const mensaje2 = `El pais de ${pais}
donde la capital es ${capital} su divisa es el ${moneda}`;

console.log(mensaje2);
