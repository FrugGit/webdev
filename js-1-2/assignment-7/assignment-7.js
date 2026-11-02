let rolls = Number(prompt("How many times do you want to roll the dice?"));

let sum = 0;

for (let i = 0; i < rolls; i++) {
    let number = Math.floor(Math.random() * 6) + 1;
    sum += number;
}

document.querySelector("#target").innerHTML = sum;