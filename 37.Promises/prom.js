const number = 15;

let promise = new Promise((resolve, reject) => {
    if (number > 10) {
        resolve(number);
    } else {
        reject(number);
    }
})

promise
    .then((number) => console.log(number))
    .catch((err) => console.error(err))

// Qui si ferma ciò che viene richiesto dall'esercizio.

// Come faccio a identificare i casi di rejected e fulfilled direttamente in console?

// Come faccio a vedere i valori (ex. [[Prototype]]) della Promise in console? 
// Ho provato a fare il console.log delle Promises ma non sono riuscito a ottenere il risultato sperato

// Quale estensione mi consigli come browser web?

console.log("-----------------------------------");

let prom = new Promise((resolve, reject) => {
    let op = number * Math.random();
    if (op > 10) {
        resolve(op);
    } else {
        reject(console.log(`Rejected: ${op}`));
    }
})

prom
    .then((op) => console.log(op))
    .catch((err) => console.error(err))

// Ho voluto fare una prova che mi permettesse di avere a che fare con risultati aleatori
// senza poter ricorrere al simulatore della console web, ho optato per un altro metodo
// che mi sembrava relativamente efficace per identificare il caso "rejected". Che ne pensi?


// L'esercizio va bene. Per quanto riguarda i casi di fullfilled o reject te ne rendi conto in base
// alla Promise se entra nel resolve o nel reject. Per il resolve avrai il risultato nel then, mentre
// per reject invece avrai il risultato nel catch perché di solito reject ritorna un errore, in questo
// esercizio stiamo ritornando sempre il number quindi non si vede molto. Ti passo questo link: Promise
// controlla la parte 'Comprendere gli stati delle Promise' per vedere come ispezionare lo stato della
// Promise con gli strumenti di debug.

// Anche la prova che hai fatto va bene, però per vedere meglio il reject e quindi la promise che entra
// nel catch, puoi usare questo nel reject: reject(new Error(Rejected: ${op})); così ritorni un'errore
// custom e il catch stampa l'errore, perché come avevi fatto prima avevi un console.log che stampava
// undefined ed era quello del catch.