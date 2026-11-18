const calculation = document.getElementById("calculation");
const start = document.getElementById("start");
const result = document.getElementById("result");

let answer;

start.addEventListener("click", function () {
  const input = calculation.value;

  if (input.includes("+")) {
    const parts = input.split("+");

    const number1 = Number(parts[0]);
    const number2 = Number(parts[1]);

    answer = number1 + number2;
  } else if (input.includes("-")) {
    const parts = input.split("-");

    const number1 = Number(parts[0]);
    const number2 = Number(parts[1]);

    answer = number1 - number2;
  } else if (input.includes("*")) {
    const parts = input.split("*");

    const number1 = Number(parts[0]);
    const number2 = Number(parts[1]);

    answer = number1 * number2;
  } else if (input.includes("/")) {
    const parts = input.split("/");

    const number1 = Number(parts[0]);
    const number2 = Number(parts[1]);

    answer = number1 / number2;
  }

  result.textContent = answer;
});
