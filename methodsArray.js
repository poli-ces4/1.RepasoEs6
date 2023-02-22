let teams = ["Nacional", "Medellin"];

for (let i = 0; i < teams.length; i++) {
  console.log(teams[i]);
}
teams.forEach((team) => {
  console.log(team);
});

console.log(teams);

/**push-pop-shift son mutables */
teams.push("Envigado");
console.log(teams);
let primerItem = teams.shift();
console.log(primerItem);
console.log(teams);
let ultimoItem = teams.pop();
console.log(ultimoItem);
console.log(teams);

/**Inmutables */

//MAP >> recorre, iterar, extraer informacion

let estudiantes = ["Ana", "Pedro", "Juan"];
let nombres = estudiantes.map((estudiante) => `${estudiante} -`);
console.log(nombres);
console.log(estudiantes);

let productos = [
  { name: "Libro", cost: 20 },
  { name: "Revista", cost: 30 },
  { name: "PDF", cost: 40 },
];

let nombresPdtos = productos.map((producto) => producto.name);
console.log(nombresPdtos);

let ivaPdtos = productos.map((pdto) => {
  return { ...pdto, iva: 19 };
});
console.log(ivaPdtos);
console.log(productos);
/*ES6*/

const universidad = [
  {
    nombre: "Tecnica Sistemas",
    ciudad: "Medellin",
    graduados: 100,
    desertaron: 20,
    year: 2021,
  },
  {
    nombre: "Tecnica Sistemas",
    ciudad: "Rionegro",
    graduados: 40,
    desertaron: 2,
    year: 2021,
  },
  {
    nombre: "Tecnica Sistemas",
    ciudad: "Uraba",
    graduados: 30,
    desertaron: 0,
    year: 2021,
  },
  {
    nombre: "Tecnologia Sistemas",
    ciudad: "Medellin",
    graduados: 200,
    desertaron: 40,
    year: 2021,
  },
  {
    nombre: "Tecnologia Sistemas",
    ciudad: "Rionegro",
    graduados: 80,
    desertaron: 4,
    year: 2021,
  },
  {
    nombre: "Tecnologia Sistemas",
    ciudad: "Uraba",
    graduados: 60,
    desertaron: 1,
    year: 2021,
  },
];

//Map
const ciudadesName = universidad.map((programa) => programa.ciudad);
console.log(ciudadesName);
//Every
const sinDesercion = universidad.every((p) => p.desertaron === 0);
console.log(sinDesercion);
//Some
const conDesercion = universidad.some((p) => p.desertaron > 0);
console.log(conDesercion);
//Filter
const programasSinDesercion = universidad
  .filter((p) => p.desertaron === 0)
  .map((p) => p.nombre);
console.log(programasSinDesercion);

const programasUraba = universidad
  .filter((p) => p.ciudad === "Uraba")
  .map((p) => p.nombre);
console.log(programasUraba);
//Reduce

const graduadosRionegro = universidad
  .filter((p) => p.ciudad === "Rionegro")
  .reduce((contador, p) => (contador += p.graduados), 0);
console.log(graduadosRionegro);

const programasMasGraduados = universidad.reduce((prev, act) => {
  return prev.graduados > act.graduados ? prev : act;
});
console.log(programasMasGraduados.nombre);

const palabras = ["Aplica", "ciertas", "acciones", "sobre"];
const frase = palabras.reduce((frase, p) => `${(frase += p)} `, "");
console.log(frase);

const total = universidad.reduce(
  (prev, act) => {
    return {
      graduados: prev.graduados + act.graduados,
      desertaron: prev.desertaron + act.desertaron,
    };
  },
  { graduados: 0, desertaron: 0 }
);

console.log(total);
//{graduados:510,desertaron:29}
//Find solo devuelve la primer coincidencia
