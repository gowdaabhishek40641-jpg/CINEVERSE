console.log("CineVerse JavaScript loaded");

window.addEventListener("load", function () {

    console.log("Page loaded");

    const preloader = document.getElementById("preloader");

    if (preloader) {
        preloader.classList.add("hide");
    }

});


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


function displayWatchlist() {

    const container =
        document.getElementById("watchlistItems");

    if (!container) {
        return;
    }

    if (watchlist.length === 0) {

        container.innerHTML =
            '<p class="empty">Your watchlist is empty.</p>';

        return;
    }

    container.innerHTML = "";

    watchlist.forEach(function (movie, index) {

        const item = document.createElement("div");

        item.className = "movie-card";

        item.innerHTML = `
            <div class="movie-info">
                <h3>${movie}</h3>

                <button onclick="removeFromWatchlist(${index})">
                    Remove
                </button>
            </div>
        `;

        container.appendChild(item);

    });

}


function removeFromWatchlist(index) {

    watchlist.splice(index, 1);

    localStorage.setItem(
        "cineverseWatchlist",
        JSON.stringify(watchlist)
    );

    displayWatchlist();

}


function playMovie(movie) {

    alert(
        "Playing: " +
        movie +
        "\n\nTrailer feature will be added later."
    );

}


// Theme
const themeButton =
    document.getElementById("themeBtn");

if (themeButton) {

    themeButton.addEventListener("click", function () {

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

}


// Load theme
const savedTheme =
    localStorage.getItem("cineverseTheme");

if (
    savedTheme === "light" &&
    themeButton
) {

    document.body.classList.add("light-theme");

    themeButton.textContent = "☀️";

}


// Scroll animation
const revealElements =
    document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


// Navbar
const navbar =
    document.querySelector(".navbar");

window.addEventListener(
    "scroll",
    function () {

        if (!navbar) {
            return;
        }

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(0, 0, 0, 0.95)";

            navbar.style.boxShadow =
                "0 5px 30px rgba(0,0,0,0.4)";

        } else {

            navbar.style.background =
                "rgba(0, 0, 0, 0.75)";

            navbar.style.boxShadow =
                "none";

        }

    }
);


// Display watchlist
displayWatchlist();

console.log("CineVerse initialized successfully");