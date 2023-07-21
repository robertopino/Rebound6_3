// 1.- Crear tres variables, una con cada palabra clave: var, let, const; y construir una porción de código donde la ejecución tenga un error por el alcance de cada una de éstas, ya sea porque la definición es al interior de una función, de un bloque o fuera de ellos.

// Ejemplo alcance (scope) de la variable definida con la palabra reservada "var"
// function ejemploVar() {
//   if (true) {
//     var x = 10; // Variable definida con "var" tiene alcance de función
//   }
//   console.log(x); // La variable "x" es accesible fuera del bloque if debido a su alcance de función
// }

// ejemploVar(); // Resultado: 10
// console.log(x); // Error: x is not defined

// // Ejemplo alcance (scope) de la variable definida con la palabra reservada "let"
// function ejemploLet() {
//   if (true) {
//     let y = 20; // Variable definida con "let" tiene alcance de bloque
//   }
//   console.log(y); // Error: y is not defined
// }
// ejemploLet();

// // Ejemplo alcance (scope) de la variable definida con la palabra reservada "const"
// const z = 30; // Variable constante definida fuera de cualquier bloque

// function ejemploConst() {
//   if (true) {
//     const z = 40; // Variable definida con "const" tiene alcance de bloque
//     console.log(z); // Resultado: 40 (Accede a la variable definida dentro del bloque)
//   }
//     console.log(z); // Resultado: 30 (Accede a la variable definida fuera del bloque)
// }

// ejemploConst();
// console.log(z); // Resultado: 30 (Accede a la variable definida fuera de la función)

// 2.- Crear una función utilizando el formato tradicional con la palabra clave function, y luego volver a escribirla utilizando la sintaxis de función de flecha, y guardando la declaración dentro de una variable. La función debe recibir, al menos, dos argumentos.
// Función tradicional que suma dos números
function suma(a, b) {
  return a + b;
}

console.log(suma(3, 5)); // Resultado: 8

// Función de flecha que suma dos números y se guarda en una variable "sumaDos"
// const sumaDos = (a, b) => {
//   return a + b;
// };

// console.log(sumaDos(3, 5)); // Resultado: 8
