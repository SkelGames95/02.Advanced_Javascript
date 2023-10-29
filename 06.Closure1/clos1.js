function printName() {
    let helloName = "Hello John";
    // return helloName;
    function inner() {
    return helloName;
}
return inner;
}

const getName = printName();
console.log(getName());

// la inner contiene il return della variabile, la printName contiene il return dell'inner,
// ma per leggere il contenuto della variabile va creata una variabile esterna che corrisponda
// alla funzione principale e possa presentare un altro set di "()" da sovrascrivere con il
// contenuto della variabile.