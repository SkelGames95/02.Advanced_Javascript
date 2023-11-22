async function recovers() {
    let get = await fetch ("https://jsonplaceholder.typicode.com/todos");
    return console.log(get);
}

recovers();