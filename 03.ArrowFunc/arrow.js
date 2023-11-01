const sum = (a, b) =>  a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const log = (value) => console.log(value);

const calculate = (callback) => callback();

const result = calculate(() =>
    divide(subtract(multiply(sum(2, 4), sum(5, 2)),2),5));

log(result);

let x = (((2 + 4) * (5 + 2) - 2) / 5); // ho fatto una prova per vedere se si potesse fare nel pratico senza dover ricorrere a tutta questa procedura
console.log(x);

log(divide(subtract(multiply(sum(2, 4), sum(5, 2)),2),5))  // right result requested