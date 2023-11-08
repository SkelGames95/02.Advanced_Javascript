// function isAdult(person) {
//     return person.age >= 18;
// }

// function isAdult({age}) {
//     if(age >= 18){
//         return person;
//     } else {
//         let person = "Your age is invalid!";
//         return person;
//     }
// }

// La prossima volta facciamo le cose semplici:
function isAdult({age}) {
    return age >= 18;
}

const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
};

console.log(isAdult(person));


// Voglio aggiungere anche il seguente messaggio/controllo al risultato:
// (appunto per live o spiegazione Stefano)
// 
//  if (person == Object){
//     console.log("Registration confirmed")
//  }