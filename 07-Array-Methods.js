// --> Callbacks

// Un callback es una funcion que puede ser pasada por parametro dentro de otra funcion

// JavaScript soporta las funciones de primera clase (high order functions - hof),
// por lo que pasar funciones como parámetros de otras funciones es algo muy corriente

//Las funciones conocidas como callback, son funciones que se pasan como parámetros de otras funciones y que se ejecutan dentro de éstas.

// Array Methods

const items = [
	{ nombre: 'Bicicleta', precio: 500 },
	{ nombre: 'Monitor', precio: 300 },
	{ nombre: 'Celular', precio: 80 },
	{ nombre: 'Teclado', precio: 50 },
	{ nombre: 'Mouse', precio: 30 },
	{ nombre: 'Headset', precio: 20 },
	{ nombre: 'Laptop', precio: 700 },
];

items;

// --> Filter
// Retorna los elementos que cumplan la condicion

// let filteredItems = items.filter(function (item) {
// 	return item.precio <= 51;
// });

//console.log(filteredItems);

// const filteredItems = items.filter((item) => {
//   return item.precio <= 100;
// });

// console.log(filteredItems);
// console.log(items);

// ************************************************************************************************ //

// --> Map
// Toma un array y devuelve uno nuevo
// Es muy conveniente cuando tenemos un objeto y queremos obtener una de sus propiedades y devolver un nuevo array

// [elNombreDelArray].(metodo)

const itemsNames = items.map((item) => {
	return '$ ' + item.precio + ' ' + item.nombre;
});

console.log(itemsNames);

// ************************************************************************************************ //

// --> Find
// Devuelve el elemento que coincide con un valor dentro del Array

// const findItem = items.find((item) => {
//   return item.precio === 20;
// });

// console.log(findItem);

// ************************************************************************************************ //

// --> forEach
// --> forEach es una metodo de array que no devuelve nada

// const forEach = items.forEach((item) => {
//   return item.precio;
// });

// console.log(forEach);
// EL CODIGO DE ARRIBA NO FUNCIONA, CON FOREACH NO DEVOLVEMOS

// items.forEach((item) => {
//   console.log(item.nombre);
// });

// ************************************************************************************************ //

// --> Some
// Some devuelve un booleano TRUE o FALSE

// const someItem = items.some(function (item) {
//   return item.nombre === 'Teclado'; // Esto nos va a dar TRUE
// });

// console.log(someItem);

// Ejemplo

// const itemBarato = items.some((item) => {
//   return item.precio < 100; // Esto nos va a dar FALSE
// });

// console.log(itemBarato);

// ************************************************************************************************ //

// --> Every
// Devuelve TRUE o FALSE siempre y cuando la condicion se cumpla para todos los elementos dentro del array

// const itemBarato = items.every((item) => {
//   return item.precio < 800; // Esto nos va a dar TRUE porque todos los elementos tienen un precio < a 800
// });

// console.log(itemBarato);

// ************************************************************************************************ //

// --> Reduce
// Reduce nos permite - por ejemplo - sumar valores dentro de un array de Objetos
// Reduce admite 2 parametros
// El primero de esos parametros va a corresponder al valorTotal de la suma
// El segundo parametro que le pasamos representa c/u de los objetos en cada iteración
// Por ultimo, luego de la funcion de Callback dentro de reduce, debemos colocar un numero que da inicio
// al valor de la suma

// const total = items.reduce((currentTotal, item) => {
//   return item.precio + currentTotal;
// }, 0);

// console.log(total);

// ************************************************************************************************ //

// --> Includes
// Devuelve TRUE o FALSE si encuentra el valor que pasamos por parametro dentro del Array

// const numbers = [1, 2, 3, 4, 5, 6, 'c'];

// // const incluyeCinco = numbers.includes(5); // Esto va a dar TRUE porque 5 existe dentro de nuestro array de numeros

// const incluyeDiez = numbers.includes(10); // Esto va a dar FALSE porque 10 no existe dentro de nuestro array de numeros

// console.log(incluyeDiez);
