const direccion = {
	street: '9 de Julio',
	city: 'Buenos Aires',
	country: 'Argentina',
};

// const street = direccion.street;
// const city = direccion.city;
// const country = direccion.country;

// console.log(street, city, country);

// ************************************************************************************************ //

// Mediante destructuración, podemos obtener la información dentro de los objetos de forma más sencilla y elegante

const { street, city, country } = direccion;

console.log(street, city, country);
