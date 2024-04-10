let num_a = +prompt("Число 1")
let operator = prompt("+-/*")
let num_b = +prompt("Число 2")

switch (operator) {
    case "+":
        alert(num_a + num_b)
        break;
    case "*":
        alert(num_a * num_b)
        break;
    case "/":
        alert(num_a / num_b)
        break;
    case "-":
        alert(num_a - num_b)
        break;

    default:
        break;
}
