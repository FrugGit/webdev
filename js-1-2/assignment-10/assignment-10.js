let dice = Number(prompt("Enter number of dice: "))
let sum = Number(prompt("Enter sum of dice: "))
let repetitions = 10000;
let successes = 0;

for (let i = 0; i < repetitions; i++) {
    let total = 0;

    for (let j = 0; j < dice; j++) {
        let number = Math.floor(Math.random() * 6) + 1;
        total += number;
    }

    if (total === sum) {
        successes += 1;
    }
}

let probability = (successes / repetitions) * 100;

document.querySelector("#target").innerHTML = "Probability to get sum " + sum + " with " + dice + " dice " + " is " + probability.toFixed(2) + "%"