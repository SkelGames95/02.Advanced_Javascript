// function printAsyncName(callback, string) {
//     setTimeout (callback, 1000);
//     setTimeout (console.log(string), 2000);
// }

// let id = function callback() {
//     console.log("Hello");
// }

// let name = "Charles";

// printAsyncName(id, name)

function printAsyncName(callback, name) {
    setTimeout(() => callback(), 1000);
    setTimeout(() => console.log(name), 2000);
}

function helloCallback() {
    console.log("Hello");
}

printAsyncName(helloCallback, "Charles");