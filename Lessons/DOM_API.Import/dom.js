async function loadDogImage() {
    let res = await fetch("https://dog.ceo/api/breeds/image/random");
    let json = await res.json();
    let url = json.message;
    let container = document.getElementById("dog-container");
    let img = document.createElement("img");
    img.height = "400";
    img.width = "400";
    img.src = url;
    container.appendChild(img);
}

let button = document.querySelector("button");
button.addEventListener("click", loadDogImage);

let h1 = document.querySelector("h1");
let h1OldClasses = h1.classList;
//h1.classList = h1OldClasses + "red";
//h1.style.color = "blue";