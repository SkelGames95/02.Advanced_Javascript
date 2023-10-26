class Person {
    constructor (firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const developer = new Person('Mario', 'Rossi');
console.log(developer.firstName + " " + developer.lastName);

let man = new Person("Marco", "Polenta");
console.log(man.firstName + " " + man.lastName);