let number = Number(prompt("Enter an integer: "))
let isPrime = true;

for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
        }
}

if (number <= 1) {
    document.querySelector("#target").innerHTML = number + " is not a prime number.";
}

else if (isPrime) {
    document.querySelector("#target").innerHTML = number + " is a prime number.";
}

else {
    document.querySelector("#target").innerHTML = number + " is not a prime number."
}