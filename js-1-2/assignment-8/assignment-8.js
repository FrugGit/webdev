let start = Number(prompt("Enter the start year: "));
let end = Number(prompt("Enter the end year: "));

let years = [];

for (let i = start; i <= end; i++) {
    if (i % 400 === 0) {
        years.push(i);
    }
    else if (i % 100 === 0) {

    }
    else if (i % 4 === 0) {
        years.push(i);
    }
}

let output = "<ul>";

for (let year of years) {
    output += "<li>" + year + "</li>";
}

output += "</ul>";

document.querySelector("#target").innerHTML = output;