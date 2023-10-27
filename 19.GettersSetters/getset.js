class Person {
    _firstName = "";
    _lastName = "";
    _age = 1;
    constructor (firstName, lastName, age){
        this._firstName = firstName;
        this._lastName = lastName;
        if(typeof(age) === "number"){
            this._age = age;
        } else {
            this._age = Number(age);
        }
    }
    set _firstName (newName){
        if (newName < 2){
            this._firstName = false;
        } else {
            this._firstName = newName;
        }
    }
    set _lastName (newLastName){
        if (newLastName < 2){
            this._lastName = false;
        } else {
            this._lastName = newLastName;
        }
    }
    set _age (newAge){
        if (newAge < 0){
            this._age = 0;
        } else if (newAge > 99) {
            this._age = 99 + "+";
        }
        else {
            this._age = newAge;
        }
    }
    get _firstName (){
        return this._firstName;
    }
    get _lastName (){
        return this._lastName;
    }
    get _age (){
        return this._age;
    }
    get fullName (){
        return (this._firstName + " " + this._lastName);
    }
    }
    
    const person = new Person('Mario', 'Rossi', 25);
    console.log(person.fullName);
    
    person._firstName = 'Maria';
    person._lastName = 'Verdi';
    console.log(person.fullName);