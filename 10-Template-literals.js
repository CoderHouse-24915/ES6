// function datosUsuario(name, lastName, age, city) {
// 	return (
// 		'El nombre del usuario es ' +
// 		name +
// 		' ' +
// 		lastName +
// 		', su edad es de ' +
// 		age +
// 		' años y vive en la ciudad de ' +
// 		city
// 	);
// }

// console.log(datosUsuario('Micaela', 'Perez', 20, 'Mar del Plata'));

// ************************************************************************************************ //

// Mediante el uso de los template literals, es mucho más fácil concatenar strings junto con variables de js

// console.log(datosUsuario('Ezequiel', 'Garcia', 25, 'Bariloche'));

const datosUsuario = (name, lastName, age, city) => {
	return `El nombre del usuario es ${name} ${lastName}, su edad es de ${age} años y vive en la ciudad de ${city}`;
};

console.log(datosUsuario('Micaela', 'Perez', 20, 'Mar del Plata'));
