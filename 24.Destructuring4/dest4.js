const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
};

const { id, firstName: name, lastName: surname, age: old } = person;
console.log(id, name, surname, old);



// const person2 = {
//     id: 1,
//     name: 'Mario',
//     surname: 'Rossi',
//     old: 25
// };

// const { id, name, surname, old } = person2;
// console.log(id, name, surname, old);