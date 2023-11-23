async function getData() {
    const post = {                  // per leggibilità, sapendo di dover fare un post si prepara il suo contenuto come costante che corrisponde all'oggetto
        title: "To Do List",
        completed: true,
    };

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {    //scrivere "link/1" ritorna l'obj corrispondente a id:1
        method: "POST",                                                             // definizione del metodo "POST" come parametro
        body: JSON.stringify(post)                                                  // il body è il contenuto di ciò che mandiamo. Parte come oggetto ma, inviandolo nel database, dobbiamo convertirlo in una stringa JSON 
    });                                                                             // si va quindi a richiamare l'oggetto con la sua variabile corrispondente
    const data = await response.json();     // ricorda: il metodo .json() equivale al parse ma viene utilizzato nelle API calls
                                            // se l'API è di tipo text basta sostituire il metodo .json() con il metodo .text() - Esiste anche il metodo .blob()
    console.log(data);
}

getData();