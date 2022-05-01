/* FUNCTIONS */
// First way to declare a function
const addFirstWay = function (number1, number2) {
    return (number1 + number2);
};

console.log(addFirstWay(10, 30));

// Second way to declare a function -> NOT regular top-bottom flow
function addSecondWay (number1, number2) {
    return (number1 + number2);
}
console.log(addSecondWay(10, 30));

// Third way to declare a function - Arrow functions
const addThirdWay = (number1, number2) => {
    return (number1 + number2);
};
console.log(addThirdWay(5, 5));

const concatenate = (string1, string2) => {
    return (string1 + string2);
}
console.log(concatenate('Anda la ', 'osa'))

const thisFunction = () => {
    console.log('Esta es otra función');
};

thisFunction();