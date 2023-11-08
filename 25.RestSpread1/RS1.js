// Partendo da:

// let numberStore = [0, 1, 2];
// let newNumber = 3;
// numberStore.push(newNumber);
// console.log(numberStore);



let numberStore = [0, 1, 2];
let newNumber = 3;

numberStore = [...numberStore, newNumber];

console.log(numberStore);

// Inizialmente risolto così:

// let  newNumber = [3];
// let numberStore = [1, 2, ...newNumber];

// console.log(numberStore);



// Visto il codice di partenza sarebbe stato più giusto fare così: 

// numberStore = [...numberStore, newNumber];

// perché è il valore della variabile newNumber che vogliamo aggiungere 
// dentro numberStore, quest'ultimo è già un array e quindi usiamo lo spread operator.