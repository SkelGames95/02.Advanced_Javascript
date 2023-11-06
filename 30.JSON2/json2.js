class Person {
    constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    }

    toJson() {
    return JSON.stringify(this);
    }

    static fromJson(json) {
        let user = JSON.parse(json);
        return new Person(user.id, user.firstName, user.lastName, user.age);
    }
}

const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);

console.log(developer);

// ho provato a costruire la funzione dopo il costruttore della classe con il metodo if visto
// durante le lezioni, ma non riuscivo ad avviare il processo in quanto Person.fromJson
// ancora non risultava essere una funzione.