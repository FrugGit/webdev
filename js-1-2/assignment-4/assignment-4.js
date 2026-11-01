let student = prompt("Enter your name: ")
let random = Math.floor(Math.random() * 4) + 1
let house;

if (random === 1) {
    house = "Gryffindor"
}

else if (random === 2) {
    house = "Ravenclaw"
}

else if (random === 3) {
    house = "Hufflepuff"
}

else {
    house = "Slytherin"
}

document.querySelector('#target').textContent = student + ", you are " + house + ".";