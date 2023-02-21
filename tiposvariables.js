function explicarVar() {
  var edad = 10;
  edad = 20;
  if (true) {
    var edad = 30;
    console.log(edad);
  }
  console.log(edad);
}

explicarVar();

function explicarLet() {
  let edad = 10;
  edad = 20;
  if (true) {
    let edad = 30;
    console.log(edad);
  }
  console.log(edad);
}

explicarLet();

function explicarConst() {
  const edad = 10;
  const numeros = [1, 3];
  //edad = 20;
  if (true) {
    const edad = 30;
    console.log(edad);
  }
  console.log(edad);
  numeros.push(5);
  console.log(numeros);
}

explicarConst();
