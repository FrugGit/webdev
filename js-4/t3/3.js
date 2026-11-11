"use strict";
const names = ["John", "Paul", "Jones"];

const target = document.querySelector("#target");

for (name of names) {
  target.innerHTML += "<li>" + name + "</li>";
}
