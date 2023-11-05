function sum(...arr) {
    return arr.reduce((a, b) => a+b);
}

const numbers = [1, 2, 3];
console.log(sum(numbers[0], numbers[1], numbers[2]));