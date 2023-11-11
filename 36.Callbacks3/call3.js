function repeatHello(callback) {
    let id = setInterval (() => callback(), 1000);
    setTimeout (() => clearInterval(id), 5100);
}

const printHello = () => console.log("Hello");

repeatHello(printHello);

// Ho impostato 5100 anziché 5000 perché per la natura approssimativa del tempo impostato non riusciva a stampare 5 volte "Hello".

// Si usa una arrow function per assicurarci che mantenga il contesto in cui è stata creata, avendo le arrow function un lexical scoping.