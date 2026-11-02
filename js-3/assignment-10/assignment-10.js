let candidates = [];

let candidateAmount = Number(prompt("How many candidates?"));

for (let i = 0; i < candidateAmount; i++) {
    let name = prompt(`Name for candidate ${i + 1}`);

    candidates.push({
        name: name,
        votes: 0
    });
}

let voterAmount = Number(prompt("How many voters?"));

for (let i = 0; i < voterAmount; i++) {
    let vote = prompt("Who do you want to vote for?")

    if (vote !== "") {
        for (let j = 0; j < candidates.length; j++) {
            if (vote === candidates[j].name) {
                candidates[j].votes++;
            }
        }
    }
}

let winner = candidates[0];

for (let i = 0; i < candidates.length; i++) {
    if (candidates[i].votes > winner.votes) {
        winner = candidates[i];
    }
}

console.log(`The winner is ${winner.name} with ${winner.votes} votes.`)

candidates.sort((a, b) => b.votes - a.votes);

console.log("results:");

for (let i = 0; i < candidates.length; i++) {
    console.log(candidates[i].name + ": " + candidates[i].votes + " votes");
}