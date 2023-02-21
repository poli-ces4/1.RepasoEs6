const saludar = function (nombre) {
  return `Hola ${nombre} donde estas?`;
};
console.log(saludar("Ana"));

const saludar2 = (nombre) => {
  return `Hola ${nombre} donde estas?`;
};

console.log(saludar2("Maria"));

const saludar3 = (nombre) => `Hola ${nombre} donde estas?`;

console.log(saludar3("Martha"));

const calcular = (valor1, valor2) => valor1 + valor2;
console.log(calcular(1, 3));
