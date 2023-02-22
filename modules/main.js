import Animal from "./Animal.js";
import token, { API_KEY, PERFILES } from "./helper.js";
//import token, * as HELPERS from "./helper.js";

const animal = new Animal("Leon");
console.log(animal.name);
console.log(token());
console.log(API_KEY);
console.log(PERFILES[1]);
