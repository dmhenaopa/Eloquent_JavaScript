/* BINDING NAMES aka variables*/
let value;
console.log(value); //Undefined porque no se ha asignado valor
let newValue = 10;
console.log(newValue); //10

/* FUNCTIONS */
console.log(typeof Number('5')); //Convertir a número
console.log(typeof String(5)); //Convertir a string
console.log(typeof Boolean('true')); //Convertir a booleano

if (10 < 100) {
    console.log('Linea 13');
} else {
    console.log('Linea 15');
}

if (10 <= 2) {
    console.log('Linea 19');
} else if (10 === 10) {
    console.log('Linea 21');
} else {
    console.log('Linea 23')
}

/* LOOPS */
let number = 0;
while (number <= 10) {
    console.log(number);
    number++;
}