const user = {
    id: 1,
    name: "John",
    age: 25,
};

function saveUser(userObj) {
    localStorage.setItem("user", JSON.stringify(userObj));
}

saveUser(user);


function loadUser(user) {
    let val = localStorage.getItem(user);
    console.log(JSON.parse(val));
}

loadUser("user");