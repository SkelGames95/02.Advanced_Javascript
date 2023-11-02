const person = {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
};

// const { id, firstName, lastName, age, name = "N/A", surname = "N/A", old = "N/A" } = person;
// console.log(id, firstName, lastName, age, name, surname, old);

// ||

const person2 = {
    id: 1,
    name: 'Mario',
    surname: 'Rossi',
    old: 25
};

const { id, name, surname, old } = person2;
console.log(id, name, surname, old);