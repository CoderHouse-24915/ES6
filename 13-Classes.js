// Object-oriented programming (OOO - Programación Orientada a Objetos)

// La programación Orientada a objetos se define como un paradigma de la programación,
// una manera de programar específica, donde se organiza el código en unidades denominadas clases,
// de las cuales se crean objetos que se relacionan entre sí para conseguir los objetivos de las aplicaciones.

// En informática, una clase es una plantilla para la creación de objetos de datos según un modelo predefinido.
// Las clases se utilizan para representar entidades o conceptos, como los sustantivos en el lenguaje.
// Cada clase es un modelo que define un conjunto de variables y métodos apropiados para operar con dichos datos.
// Cada objeto creado a partir de la clase se denomina instancia de la clase.

// const person1 = {
// 	name: 'Francesca',
// 	walk() {
// 		console.log('walk method');
// 	},
// };

// const person2 = {
// 	name: 'Francesca',
// 	walk() {
// 		console.log('walk method');
// 	},
// };

// const person3 = {
// 	name: 'Francesca',
// 	walk() {
// 		console.log('walk method');
// 	},
// };

// Pascal convention - La primera letra en mayuscula
// Costructor puede tener parametros, es una palabra reservada
// Para instanciar un nuevo objeto a partir de una clase debemos
// utilizar la palabra reservada 'new'

// ************************************************************************************************ //

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	walk() {
		console.log('walk method');
	}
}

// Al momento de instanciar un objeto el metodo constructor() es llamado

const daniel = new Person('Daniel', 36);

daniel.walk();

// console.log(daniel.age);

const persona1 = new Person('Francesca', 25);
// // const persona2 = new Person('Francesca');
// // const persona2 = new Person('Francesca');

// persona.walk();
// console.log(persona.name, persona.age);

// ************************************************************************************************ //

// --> Herencia
// Cuando tenemos un metodo constructor en una clase hija debemos llamar al metodo
// constructor() del padre utilizando super()

class Teacher extends Person {
	constructor(name, degree) {
		super(name);
		this.degree = degree;
	}
	teach() {
		console.log('teach');
	}
}

const teacher = new Teacher('Daniel', 'Frontend Dev');
console.log(teacher.name);
