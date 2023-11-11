function repeatHello(callback, n) {
    let id = setInterval (() => callback(), 1000);
    setTimeout (() => clearInterval(id), 1000*n);
}

const printHello = () => console.log("Hello");

repeatHello(printHello, 10);

// mi sono permesso di aggiungere un clearInterval per non farlo andare avanti all'infinito
// e avere più controllo.