let obj = { // Un objeto con 2 funciones 
    nombre: 'Xico',
    edad: 20,
    apellido: 'Nava',

    keypress: function () {
        return 'se ha presionado una tecla';
    },

    mouseOver: function () {
        return 'El puntero del mouse esta arriba'
    }
}

console.log(obj.nombre);
console.log(obj['nombre']);// Se ejecuta la key, pero debe ser exacto con el nombre

let myKey = 'nombre';
console.log(obj[myKey]);// Ejecuta lo que contiene la variable myKey, pero el que tiene su nombre en el objeto

myKey = 'keypress';
console.log(obj[myKey]()); //Se invoca la funcion por el nombre de la llave que lo contiene.

myKey = 'mouseOver';//Se invoca la funcion por el nombre de la llave que lo contiene.
console.log(obj[myKey]());


let myArray = []; 
myArray.push(4); //Introducimos un numero al array
myArray.push('una cadena'); //Introducimos un string al array
myArray.push(obj);//Introducimos un objeto al array
myArray.push(function () { //Introducimos una funcion al aire en el array
    return "hola desde el array";
});
console.log(myArray);

let funcArray = [];

funcArray.push(() => {//Creamos un array de funciones y llenamos con funciones anonimas
    console.log("Function 1");
});
funcArray.push(() => {
    console.log("Function 2");
});
funcArray.push(() => {
    console.log("Function 3");
});

funcArray.forEach((item) =>{// Lo iteramos para meteer todos los textos
    item();
});