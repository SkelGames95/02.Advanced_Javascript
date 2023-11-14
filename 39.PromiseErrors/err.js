const isLogged = true;

function isLoggedIn(isLogged) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (isLogged === true) {
                resolve (Math.random());
            } else {
                reject (new Error(`User is not logged in!`));
            }
        }, 500);
    })
}

function getUserData(num) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (num > 0.5) {
                resolve ({name: "John", age: 24});
            } else {
                reject (new Error(`User data not found`));
            }
        }, 500);
    })
}

let log = isLoggedIn(isLogged)
    .then(getUserData)
    .then((userData) => console.log(userData))
    .catch((err) => console.error(err))
.finally(() => console.log(`---------------------------------`))