class Person {
    constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    }
}

const developer = new Person(1, 'Mario', 'Rossi', 25);

// Print developer as JSON object. 

let str = JSON.stringify(developer);
console.log(str);

let obj = JSON.parse(str);
console.log(obj);

// Is JSON object intended as the second result? Is the first one called JSON string?