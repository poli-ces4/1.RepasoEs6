const estudiante = { nombre: "Juan", apellido: "Perez", edad: 10 };

//ES5
/*
const nombre = estudiante.nombre;
const edad = estudiante.edad;
console.log(nombre);
console.log(edad);
*/
//ES6
const { nombre, edad } = estudiante;
console.log(nombre);
console.log(edad);

const jugadores = ["Messi", "Ronaldo", "Neymar"];
const [, x, y] = jugadores;
console.log(x);
console.log(y);
let a = "Messi";
let b = "Ronaldo";
[b, a] = [a, b];
console.log(a);
console.log(b);
