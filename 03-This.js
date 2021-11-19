// This es una palabra reservada en Js, que suele confundir muchos a los devs
// Su comportamiento en Js es algo diferente de otros lenguajes de programación
// En otros lenguajes this hace referencia SIEMPRE al objeto

const person = {
	name: 'Daniel',
	walk() {
		console.log(this.name);
	},
};

// person.walk();

const walk = person.walk;
// console.log(walk);
walk();

// Window object reference

function foo() {
	console.log('Hello');
}
