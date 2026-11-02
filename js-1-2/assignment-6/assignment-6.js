let answer = confirm("Should I calculate the square root?");

let no = "The square root is not calculated.";

let neg = "The square root of a negative number is not defined"

if (answer) {
    let number = Number(prompt("Enter a number: "));
    
    if (number < 0) {
        document.querySelector("#target").innerHTML = neg;
    
    } else {
            let result = Math.sqrt(number);
            document.querySelector("#target").innerHTML = result;
    }

} else {
    document.querySelector("#target").innerHTML = no;
}