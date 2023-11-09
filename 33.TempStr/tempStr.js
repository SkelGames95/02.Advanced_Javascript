// date le backtick già applicate, non ho capito se l'esercizio vada fatto così:

`class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName; 
    }
}

const developer = new Person("Mario", "Rossi");

console.log(developer.firstName + " " + developer.lastName); `

// o così:

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName; 
    }
}

const developer = new Person("Mario", "Rossi");

console.log(`${developer.firstName} ${developer.lastName}`);

// ma penso sia più probabile la seconda opzione!