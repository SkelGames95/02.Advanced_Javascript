async function recover() {
    let get = await fetch ("https://jsonplaceholder.typicode.com/todos");
    let data = await get.json();
    return data;
}

recover()
    .then ((val) => console.log(val))
    .catch ((err) => console.error(err))
.finally