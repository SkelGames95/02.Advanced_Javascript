const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
};

// let {id} = person;

// function personInfo({...person}) {
//     delete person.id;
//     return person;
// }

// console.log(id, personInfo(person));


const {id, ...personInfo } = person;  

console.log(id, personInfo);

// spread operator expands elements of an iterable.
// rest operator splits/compresses elements of an iterable.
// questo nelle lezioni non è stato spiegato bene e spesso c'è stata confusione nelle definizioni,
// scambiando rest e spread come termini intercambiabili quasi equivalenti.