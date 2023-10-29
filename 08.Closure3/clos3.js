function multiplyByTwo(input) {
    function inner() {
        let number = 2;
        return input * number;
    }
    return inner;
}

const result = multiplyByTwo(4)();
console.log(result);

// la sintassi della consegna, come in molte altri esercizi di Javascript in particolare, lascia spazio a molti dubbi e non è definita in modo corretto. Di seguito l'analisi di chat.gpt dove si
// evince che il valore da dare alle variabili è sottinteso e non è specificato correttamente l'uso dei vari fattori:

// The assignment is asking you to create a closure in JavaScript that consists of two nested functions: multiplyByTwo and inner. Here's an explanation:
// Outer Function (multiplyByTwo): You need to define a function called multiplyByTwo that takes one parameter. This function will return another function, creating a closure.
// The inner function is not executed immediately; it's only returned as a result. Inner Function (inner): Inside the multiplyByTwo function, you should create an inner function called inner.
// This inner function will be responsible for taking an input (a number) and multiplying it by a variable named number. However, the number variable is not explicitly provided as an argument
// to the inner function; it's accessed from the scope of the outer multiplyByTwo function.
// Usage: After you've created the closure using multiplyByTwo, you should be able to call it with an input value. In the provided example, calling multiplyByTwo(4)() means you're calling
// multiplyByTwo with an initial value of 4, and then immediately invoking the returned inner function. This should result in the input value (4) being multiplied by the variable number
// (which is assumed to be 2), resulting in a product of 8. Here's the code from your example:

// function multiplyByTwo(number) {
//     function inner(input) {
//       return input * number;
//     }
//     return inner;
//   }

//   const result = multiplyByTwo(4)(); // This calculates 4 * 2 and returns 8
//   console.log(result); // Logs 8 to the console

// In this example, multiplyByTwo(4) creates a closure with the value 4 for the number variable, and when you invoke it with (), it immediately multiplies 4 by 2 (the assumed value of number)
// and returns 8.

// Nel pratico, la funzione definita da ChatGpt porta NaN