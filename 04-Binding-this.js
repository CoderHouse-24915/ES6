const person = {
	name: 'Daniel',
	walk() {
		console.log(this);
	},
};

// person.walk();

//onst walk = person.walk;
//console.log(walk)
//walk();

//walk() --> hace referencia al objeto global

// Como resolver el problema de obtener una referencia el objeto actual?
// const walk = person.walk;
// En Js las funciones son objetos
// const walk = person.walk.bind;
// Podemos utilizar el metodo bind para enlazar un metodo a un objeto
// const walk = person.walk.bind(person);
// walk();

// Si pasamos el objeto persona va a devolver una nueva instancia de la funcion walk
// y setear "this" al objeto persona

// **********************

const persona = {
	name: 'Daniel',
	foo: function () {
		var self = this;
		setTimeout(function () {
			console.log('this', self.name);
		}, 2000);
	},
};

persona.foo();

// **********************

const persona = {
	name: 'Daniel',
	foo: function () {
		// var self = this;
		setTimeout(
			function () {
				console.log('this', this.name);
			}.bind(this),
			2000
		);
	},
};

persona.foo();
