function setImageSrc(url) {
    let img = document.getElementById("image");
    return img.src = url;
}

fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((json) => json.message)
    .then(setImageSrc)
    .catch((err) => console.error(err))


    // async function logMovies() {
    //     const response = await fetch("http://example.com/movies.json");
    //     const movies = await response.json();
    //     console.log(movies);
    //   }