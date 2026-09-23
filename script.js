// CineVerse - First Commit


// Watchlist

let watchlist =
    JSON.parse(localStorage.getItem("cineverseWatchlist")) || [];


function addToWatchlist(movie) {

    if (!watchlist.includes(movie)) {

        watchlist.push(movie);

        localStorage.setItem(
            "cineverseWatchlist",
            JSON.stringify(watchlist)
        );

        alert(movie + " added to your watchlist!");

        displayWatchlist();

    } else {

        alert(movie + " is already in your watchlist.");

    }
}


// Display Watchlist

function displayWatchlist() {

    const container =
        document.getElementById("watchlistItems");

    if (watchlist.length === 0) {

        container.innerHTML =
            '<p class="empty">Your watchlist is empty.</p>';

        return;
    }

    container.innerHTML = "";

    watchlist.forEach(function(movie) {

        const item = document.createElement("div");

        item.className = "movie-card";

        item.style.padding = "20px";
        item.style.marginBottom = "10px";

        item.innerHTML = `
            <h3>${movie}</h3>

            <button onclick="removeFromWatchlist('${movie}')">
                Remove
            </button>
        `;

        container.appendChild(item);

    });
}


// Remove from Watchlist

function removeFromWatchlist(movie) {

    watchlist =
        watchlist.filter(function(item) {
            return item !== movie;
        });

    localStorage.setItem(
        "cineverseWatchlist",
        JSON.stringify(watchlist)
    );

    displayWatchlist();
}


// Play Movie

function playMovie(movie) {

    alert(
        "Playing: " + movie +
        "\n\nTrailer/player feature will be added in a future version."
    );

}


// Theme

const themeButton =
    document.getElementById("themeBtn");


themeButton.addEventListener("click", function() {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {

        themeButton.textContent = "☀️";

        localStorage.setItem(
            "cineverseTheme",
            "light"
        );

    } else {

        themeButton.textContent = "🌙";

        localStorage.setItem(
            "cineverseTheme",
            "dark"
        );
    }

});


// Load Saved Theme

const savedTheme =
    localStorage.getItem("cineverseTheme");

if (savedTheme === "light") {

    document.body.classList.add("light-theme");

    themeButton.textContent = "☀️";
}


// Load Watchlist

displayWatchlist();

