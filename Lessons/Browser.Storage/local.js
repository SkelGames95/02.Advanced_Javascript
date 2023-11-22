let names = ["bg", "text"];

loadStorage();      // utility function to load the Storage (look down)

let inputs = document.querySelectorAll("input[type='color']");

inputs.forEach((input, i) => {
    input.addEventListener("change", (evt) => {     // function that let to perform actions when a value changes
        let val = evt.target.value;     // let's give a variable to the event target value
        localStorage.setItem(names[i], val);        //with cookies we need to callback a function whereas with local storage code we need a single line
        document.documentElement.style.setProperty(`--${names[i]}`, val);
    })
})

function loadStorage() {
    names.forEach((name) => {       // go through each of the names for the item I want to iterate through
        let val = localStorage.getItem(name);  // get the item using a built-in function
        document.getElementById(name).setAttribute("value", val);   // take that value from ID and set the input to substitute the value of that item (in this case the used color)
        document.documentElement.style.setProperty(`--${name}`, val);   // setting the css variable in the stylesheet to change the color
    })
}

// val is the value of the item to be changed