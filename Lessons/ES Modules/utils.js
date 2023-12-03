export function getCookie(name) {      // this function get the value attached to the cookie
    const cookieValue = document.cookie
        .split(`; `)
        .find((row) => row.startsWith(`${name}=`))      // find the row that starts with the name of our interest
        ?.split(`=`)[1];
    return cookieValue;     // tere's a lot of string manipulation before this return
}

export function setCookie(name, value) {       // function for setting a cookie from name and value parameters
    document.cookie = `${name}=${value}`;
}

export const KEYS = ["bg", "text", "username"];