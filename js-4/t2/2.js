const target = document.querySelector("#target");

const first = document.createElement("li");
first.innerText = "First item";
target.appendChild(first);

const second = document.createElement("li");
second.innerText = "Second item";
target.appendChild(second);
second.classList.add("my-item");

const third = document.createElement("li");
third.innerText = "Third item";
target.appendChild(third);
