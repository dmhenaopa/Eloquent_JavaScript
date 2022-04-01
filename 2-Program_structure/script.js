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

/* EXERCISES */
// Looping a triangle
let toPrint = '#';
for (let i = 0; i <= 6; i++) {
    console.log(toPrint);
    toPrint += '#';
}

// FizzBuzz
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
    
}


// Ternary operator
for (let i = 0; i <= 100; i++) {
    ((i % 3 === 0) && (i % 5 === 0)) ? console.log('FizzBuzz') :
        (i % 3 === 0) ? console.log('Fizz') :
            (i % 5 === 0) ? console.log('Buzz'): console.log(i);
}

// Chessboard
const even = ' # # # #';
const odd = '# # # # ';

for (let i = 0; i <= 7; i++) {
    if (i % 2 === 0) {
        console.log(even);
    } else {
        console.log(odd);
    }
}

const size = 8;
for (let i = 0; i < size; i++) {
    let toPrint = "";
    for (let j = 0; j < size; j++) {
        if (i % 2 === 0 && j % 2 === 0) {
            toPrint += " ";
        } else if (i % 2 === 0 && j % 2 !== 0) {
            toPrint += "#";
        } else if (i % 2 !== 0 && j % 2 === 0) {
            toPrint += "#";
        }
        else if (i % 2 !== 0 && j % 2 !== 0) {
            toPrint += " ";
        }
    }
    console.log(toPrint);
}

// Ternary operator
const sizeTernary = 8;
for (let i = 0; i < sizeTernary; i++) {
    let toPrint = "";
    for (let j = 0; j < sizeTernary; j++) {
        ((i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0)) ? toPrint += " " : toPrint += "#";
    }
    console.log(toPrint);
}