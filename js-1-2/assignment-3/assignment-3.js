let number1 = parseInt(prompt("Anna ensimmäinen numero:"));

let number2 = parseInt(prompt("Anna toinen numero:"));

let number3 = parseInt(prompt("Anna kolmas numero:"))

let numbers_sum = number1 + number2 + number3

let numbers_prod = number1 * number2 * number3

let numbers_avg = (number1 + number2 + number3) / 3

let sum = "Sum: " + numbers_sum
let product = "Product: " + numbers_prod
let average = "Average: " + numbers_avg

document.querySelector('#sum').textContent = sum;
document.querySelector('#product').textContent = product;
document.querySelector('#average').textContent = average;
