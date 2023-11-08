let num1 = 10;
let num2 = 20;
console.log('Before swap: ', num1, num2); // Before swap: 10 20

// Variable swapping
let temp = num2;
num2 = num1;
num1 = temp;

console.log('After swap: ', num1, num2); // After swap: 20 10
console.log("----------------------------------------------")

let obj = {a: 10, b:20};

console.log('Before swap:');
console.log(obj);

let {b, a} = obj;

console.log('After swap:');
console.log(b + ", " + a);

console.log("----------------------------------------------")

let arr = [10, 20];

console.log('Before swap:');
console.log(arr);

let [d, c] = arr;

console.log('After swap:');
console.log(c + ", " + d);

console.log("----------------------------------------------")

let num3 = 10;
let num4 = 20;
console.log('Before swap: ', num1, num2); // Before swap: 10 20

// Variable swapping
[num4, num3] = [num3, num4];

console.log('After swap: ', num3, num4); // After swap: 20 10
console.log("----------------------------------------------")