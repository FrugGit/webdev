const names = [];

const amount = Number(prompt("Enter number of participants: "));

for (let i = 0; i < amount; i++) {
  const name = prompt("Enter name of " + i + 1 + ". participant: ");
  names.push(name);
}

names.sort();

for (name of names) {
  target.innerHTML += "<li>" + name + "</li>";
}
