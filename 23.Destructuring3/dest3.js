// function isAdult(person) {
//     return person.age >= 18;
// }



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

// inizialmente risolto con questo metodo:

// function isAdult({age}) {
//     if(age >= 18){
//         return person;
//     } else {
//         let person = "Your age is invalid!";
//         return person;
//     }
// }

// non hai capito bene l'ambito in cui si usa la funzione, il nome stesso della funzione indica
// che quella funzione farà semplicemente un controllo sull' età e ritorna un boolean. Questo perché la funzione
// isAdult() la possiamo usare in un contesto dove ci serve più volte fare un controllo del genere e abbiamo una
// funzione dedicata allo scopo, poi una volta preso il valore che ritorna la funzione isAdult() possiamo mettere
// tutti i messaggi che vogliamo ma in un'altra funzione. Per come l'hai fatta tu la funzione mi sta ritornando
// una variabile che sta fuori dalla funzione e non ha molto senso e per di più non è una buona pratica, quella
// variabile fuori dalla funzione serve per passarla alla funzione come parametro proprio per fare un controllo,
// ecco il motivo dei tre punti.

// Voglio aggiungere anche il seguente messaggio/controllo al risultato:

//  if (person == Object){
//     console.log("Registration confirmed")
//  }

// potrebbe essere un controllo da fare ma non dentro la funzione isAdult() e magari potresti farlo con il typeof.

