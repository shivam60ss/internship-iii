

const form = document.getElementById("search-form");
const container = document.getElementById("container");

form.addEventListener("submit", async (e) => {
    e.preventDefault(); // stop page reload
    let search = e.target.children[0].value.trim();

    try {
        let res = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=dc4d1ded`);
        // localStorage.setItem("movies",JSON.stringify(res.data.search)) ///
        console.log(res.data.Search);
        createCard(res.data.Search);
    } catch (err) {
        console.error("Error fetching data:", err);
        container.innerHTML = "<p style='color:red;'>Something went wrong. Try again!</p>";
    }
});

function createCard(movies) {
    container.innerHTML = ""; // Clear previous cards


    movies.forEach(movie => {
        const div = document.createElement("div");
        div.className = "card";

        const img = document.createElement("img");
        img.src = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150";
        img.className = "movie-banner";

        div.innerHTML = `<h2>${movie.Title}</h2> <span>${movie.Year}</span>`;
        div.prepend(img);

        container.append(div);
    });
}

// if(localStorage.getItem("movies")){
//     createCard();
// }

// localStorage.removeItem("name");
