let numbers = [];

let number1 = prompt("Enter 1st number: ")
let number2 = prompt("Enter 2nd number: ")
let number3 = prompt("Enter 3rd number: ")
let number4 = prompt("Enter 4th number: ")
let number5 = prompt("Enter 5th number: ")

numbers.push(number1, number2, number3, number4, number5);

for (let i = 4; i >= 0; i-- ) {
    console.log(numbers[i]);
}