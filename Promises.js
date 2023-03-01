//Callback= es una funcion que se pasa como parametro a otra
//funcion

function respuesta(res) {
  console.log(res);
}

function calcular(op1, op2, funcionCallback) {
  let resp = op1 + op2;
  funcionCallback(resp);
}

calcular(19, 20, respuesta);

// Las promesas es un objeto, por naturaleza son asincronas

let promesa = new Promise((res, rej) => {
  let estado = false;
  if (estado) {
    res("Resolvio la promesa");
  } else {
    rej("Se rechazo la promesa");
  }
});
/*
//Opcion 1
promesa.then(
  (valor) => console.log(valor),
  (error) => console.log(error)
);

//opcion 2
promesa
  .then((valor) => console.log(valor))
  .catch((error) => console.log(error));
*/
//Promesa con setTimeout para evidenciar
//asincronismo

let promesa2 = new Promise((res) => {
  console.log("Inicio la Promesa2");
  setTimeout(() => res("Promesa2 resuelta"), 3000);
  console.log("Fin de la Promesa2");
});

promesa2.then((valor) => console.log(valor));

//async indicar a una funcion que regresa una promesa
//await esperar el resultado de una promesa

async function funcionConAsync() {
  return "Ejemplo con async";
}

funcionConAsync().then((x) => console.log(x));

async function funcionConAsyncAwait() {
  console.log("Inicio ...");
  let miPromesa = new Promise((res) => {
    setTimeout(() => {
      res("Resolviendo Promesa");
    }, 5000);
  });
  console.log(await miPromesa);
  console.log("Fin ...");
}

funcionConAsyncAwait();
