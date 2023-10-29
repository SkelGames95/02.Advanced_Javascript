function printName() {
    let helloName = "Hello John";
    // return helloName;
    function inner() {
    return helloName;
}
return inner;
}

const getName = printName();

setTimeout (function () {
    console.log(getName());
}, 1000);
