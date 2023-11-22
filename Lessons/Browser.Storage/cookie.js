// document.cookie = "our_cookie=hello";
// document.cookie = "bg=#eeeeee";
// document.cookie = "text=#111111";
//console.log(document.cookie);

let names = ["bg", "text"];

loadCookies();      // utility function to load cookies that already exist (look down)

function getCookie(name) {      // this function get the value attached to the cookie
    const cookieValue = document.cookie
        .split(`; `)
        .find((row) => row.startsWith(`${name}=`))      // find the row that starts with the name of our interest
        ?.split(`=`)[1];
    return cookieValue;     // tere's a lot of string manipulation before this return
}

function setCookie(name, value) {       // function for setting a cookie from name and value parameters
    document.cookie = `${name}=${value}`;
}

//console.log(getCookie("our_cookie"));

let inputs = document.querySelectorAll("input[type='color']");

inputs.forEach((input, i) => {
    input.addEventListener("change", (evt) => {     // function that let to perform actions when a value changes
        let val = evt.target.value;
        setCookie(names[i], val);       // callback to setCookie function
        document.documentElement.style.setProperty(`--${names[i]}`, val);
    })
})

function loadCookies() {
    names.forEach((name) => {       // go through each of the names for the cookies I want to iterate through
        let val = getCookie(name);  // get the cookie using the function already established
        document.getElementById(name).setAttribute("value", val);   // take that value and set the input to substitute the value of that cookie (in this case the used color)
        document.documentElement.style.setProperty(`--${name}`, val);   // setting the css variable in the stylesheet to change the color
    })
}

// val is the value of the cookie to be changed