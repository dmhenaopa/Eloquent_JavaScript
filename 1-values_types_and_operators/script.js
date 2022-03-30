/* STRINGS */
console.log('Esta es \nuna prueba'); //Caracteres especiales en single quotes
console.log("Esta es \nuna prueba"); //Caracteres especiales en double quotes
console.log(`Esta es \nuna prueba`); //Caracteres especiales en backticks
console.log('Esta es una prueba para imprimir el backslash: \"\\n\".'); //Para imprimir el backslash "\n"

console.log('con' + 'ca' + 'te' + 'na' + 'te'); //Uso de + para concatenar strings

//Template literal con backticks
console.log(`Los backticks permiten adicionar valores como este: ${100 / 2}`); //Backticks permiten agregar operaciones dentro del string. El resto de comillas NO.
console.log('Estas comas sencillas NO permiten lo mismo: ${100 / 2}');
console.log("Estas comas dobles tampoco: ${100 / 2}");


/* UNARY OPERATORS */
console.log(typeof 4.5); //Number
console.log(typeof 'x'); //String
console.log(typeof `Esta es una prueba ${100 / 5}`); //String
console.log(typeof `${100 / 5}`); //String


/* TERNARY OPERATOR */
console.log(true ? 1 : 2); //Si el primer valor es verdadero se ejecuta la segunda parte
console.log(false ? 1 : 2); //Si es falso, entonces se ejecuta la segunda