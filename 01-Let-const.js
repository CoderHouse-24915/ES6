// Let & Const Vs Var
// Let, Const & Var == Function Scope
// Let & Const == Block Scope !== VAR no
// Preferir utilizar const a no ser que queramos reasignar un nuevo valor
// a nuestra variable

function foo() {
	for (let i = 0; i < 5; i++) {
		console.log(i);
	}
	console.log('Hello', i);
}

foo();

// --------------------------------

// const x = 5;
// x = 2;

// --------------------------------

// Funciones declaradas vs expresiones funcionales
// Declarative function
// function foo () {
//  console.log("Foo")
// }

// Expresion funcional
// foo()
// let foo = function() {
//   console.log("Foo")
// }

// const dni = 22222222;
// dni = 2222223;
// console.log(dni);

// const name; // ESTO NO ES POSIBLE

// VAR YA NO LO UTILIZAMOS
