const first = [1, 2, 3];
const second = [4, 5, 6];

// Si quisieramos combinar estos dos arrays

// const combined = first.concat(second);

// Esta es la forma de combinar "old school"

// console.log(combined);

// ************************************************************************************************ //

// const combined = [...first, ...second];

// Spread operator se representa con 3 puntos

// console.log(combined);

// Parece que no es mucha la diferecia...pero que pasa si quisieramos agregar
// un elemento en medio, por ej?

const combined = [...first, 'a', true, 898, ...second, 'b'];

console.log(combined);
