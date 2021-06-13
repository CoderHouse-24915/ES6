// const person = {
//   talk() {
//     console.log('this', this);
//   },
// };

// person.talk();

// setTimeout es una funcion que acepta 2 parametros y
// se va a ejecutar a los "n" milisegundos que le pasemos
// como segundo parametro
// setTimeout(function () {
//   console.log("Hola desde el futuro");
// }, 1000);

// const person = {
//   talk() {
//     setTimeout(function () {
//       console.log('this', this);
//     }, 1000);
//   },
// };

// Un callback es una funcion que se pasa por parametro
// dentro de otra función
// person.talk();

// Obtenemos el objeto window!
// La razon es por que aqui esta funcion callback no es parte de un objeto
// Es una funcion standalone
// Cuando llamamos a una funcion de forma standalone fuera de un objeto
// por default "this" retorn el objeto window
// Como obtener una referencia a "this" dentro del objeto

// const person = {
//   talk() {
//     var self = this;
//     setTimeout(function () {
//       console.log('self', self);
//     }, 1000);
//   },
// };

// person.talk();

// De esta manera obtenemos una referencia al objeto persona
// Eso era antes
// Ahora podemos utilizar las funciones arrow, ya que estas no sobreescriben el
// valor de 'this'

const person = {
	talk() {
		setTimeout(() => {
			console.log('this', this);
		}, 1000);
	},
};

person.talk();

const persona = {
	name: 'Daniel',
	foo: function () {
		setTimeout(() => {
			console.log('this', this.name);
		}, 2000);
	},
};

persona.foo();
