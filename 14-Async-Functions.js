// --> setTimeOut Function

// La funcion de tipo setTimeOut es una funcion que acepta dos parametros:
// El primer parametro es la funcion que queremos que se ejecute
// Y el segundo parametro son los milisegundos que va a tardar en llamarse la
// funcion que pasamos como primer parametro

// const asyncFuncion = () => {
//   setTimeout(function () {
//     console.log('Hola');
//   }, 3000);
// };

// asyncFuncion();

// ************************************************************************************************ //

// --> setInterval Function
// La función setInterval asi como setTimeOut, es una función que acepta dos parametros:
// El primer parámetro es la función que queremos ejecutar
// Y el segundo parametro es cada cuantos segundos se ejecutará esa función

const intervalFunction = () => {
  setInterval(function () {
    console.log('Hello World');
  }, 1000);
};

intervalFunction();
