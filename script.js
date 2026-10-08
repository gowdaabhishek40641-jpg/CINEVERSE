/* =========================================
   CINEVERSE COMMIT 10
   COMPLETE OTT INTERACTION SYSTEM
========================================= */


/* ================= MOVIE DATABASE ================= */

const movies = [

    {
        id: 1,
        title: "The Last Horizon",
        genre: "Sci-Fi",
        year: 2026,
        duration: "2h 18m",
        rating: "9.1",
        description:
            "Humanity's final journey begins beyond the edge of space. One crew must discover the truth before time runs out.",
        image:
            "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=1000&q=80",
        trailer:
            "https://www.youtube.com/embed/1La4QzGeaaQ"
    },

    {
        id: 2,
        title: "Shadow Protocol",
        genre: "Action",
        year: 2026,
        duration: "2h 05m",
        rating: "8.8",
        description:
            "An elite operative discovers a global conspiracy hidden inside the world's most powerful intelligence network.",
        image:
            "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=1000&q=80",
        trailer:
            "https://www.youtube.com/embed/EXeTwQWrcwY"
    },

    {
        id: 3,
        title: "Neon City",
        genre: "Thriller",
        year: 2025,
        duration: "1h 58m",
        rating: "8.5",
        description:
            "A detective enters a futuristic city where memories can be bought, sold and erased.",
        image:
            "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1000&q=80",
        trailer:
            "https://www.youtube.com/embed/YoHD9XEInc0"
    },

    {
        id: 4,
        title: "Beyond Earth",
        genre: "Sci-Fi",
        year: 2025,
        duration: "2h 21m",
        rating: "8.9",
        description:
            "A group of explorers discover something impossible while searching for a new home.",
        image:
            "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=1000&q=80",
        trailer:
            "https://www.youtube.com/embed/6ZfuNTqbHE8"
    },

    {
        id: 5,
        title: "The Silent War",
        genre: "Drama",
        year: 2024,
        duration: "2h 11m",
        rating: "8.4",
        description:
            "Two rival nations attempt to stop a war without firing a single shot.",
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
        trailer:
            "https://www.youtube.com/embed/zSWdZVtXT7E"
    },

    {
        id: 6,
        title: "Dark Frequency",
        genre: "Thriller",
        year: 2026,
        duration: "1h 49m",
        rating: "8.7",
        description:
            "A mysterious radio signal begins predicting crimes before they happen.",
        image:
            "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1000&q=80",
        trailer:
            "https://www.youtube.com/embed/YoHD9XEInc0"
    },

    {
        id: 7,
        title: "Velocity",
        genre: "Action",
        year: 2025,
        duration: "2h 02m",
        rating: "8.3",
        description:
            "A street racer becomes involved in an international mission that pushes speed to the limit.",
        image:
            "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=1000&q=80",
        trailer:
            "https://www.youtube.com/embed/2g811Eo7K8U"
    },

    {
        id: 8,
        title: "Lost Planet",
        genre: "Sci-Fi",
        year: 2024,
        duration: "2h 15m",
        rating: "8.6",
        description:
            "A rescue team lands on an abandoned planet and discovers that they are not alone.",
        image:
            "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1000&q=80",
        trailer:
            "https://www.youtube.com/embed/6ZfuNTqbHE8"
    },

    {
        id: 9,
        title: "Final Mission",
        genre: "Action",
        year: 2023,
        duration: "2h 08m",
        rating: "8.1",
        description:
            "A retired soldier returns for one final mission to save his team.",
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80",
        trailer:
            "https://www.youtube.com/embed/EXeTwQWrcwY"
    },

    {
        id: 10,
        title: "Echoes",
        genre: "Drama",
        year: 2024,
        duration: "1h 55m",
        rating: "8.2",
        description:
            "A musician returns to his hometown and confronts memories he tried to forget.",
        image:
            "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1000&q=80",
        trailer:
            "https://www.youtube.com/embed/zSWdZVtXT7E"
    },

    {
        id: 11,
        title: "Black Signal",
        genre: "Thriller",
        year: 2026,
        duration: "2h 00m",
        rating: "8.9",
        description:
            "A hacker intercepts a signal that reveals a secret capable of changing the world.",
        image:
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80",
        trailer:
            "https://www.youtube.com/embed/YoHD9XEInc0"
    },

    {
        id: 12,
        title: "Infinite",
        genre: "Sci-Fi",
        year: 2025,
        duration: "2h 27m",
        rating: "9.0",
        description:
            "A scientist discovers a way to see alternate versions of reality.",
        image:
            "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1000&q=80",
        trailer:
            "https://www.youtube.com/embed/1La4QzGeaaQ"
    }

];


/* ================= STORAGE ================= */

const STORAGE = {

    watchlist: "cineverseWatchlist",

    progress: "cineverseProgress"

};


function readStorage(key, fallback) {

    try {

        const data =
            localStorage.getItem(key);

        return data
            ? JSON.parse(data)
            : fallback;

    } catch {

        return fallback;

    }

}


function writeStorage(key, value) {

    try {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    } catch (error) {

        console.error(
            "Storage error:",
            error
        );

    }

}


/* ================= STATE ================= */

let currentMovieId = null;

let currentGenre = "All";

let currentSearch = "";


/* ================= ELEMENTS ================= */

const movieGrid =
    document.getElementById("movieGrid");

const continueGrid =
    document.getElementById("continueGrid");

const watchlistGrid =
    document.getElementById("watchlistGrid");

const movieSearch =
    document.getElementById("movieSearch");

const movieCount =
    document.getElementById("movieCount");

const movieModal =
    document.getElementById("movieModal");

const playerModal =
    document.getElementById("playerModal");

const trailerFrame =
    document.getElementById("trailerFrame");

const detailsImage =
    document.getElementById("detailsImage");

const detailsTitle =
    document.getElementById("detailsTitle");

const detailsGenre =
    document.getElementById("detailsGenre");

const detailsMeta =
    document.getElementById("detailsMeta");

const detailsDescription =
    document.getElementById("detailsDescription");

const listButton =
    document.getElementById("listButton");

const playerTitle =
    document.getElementById("playerTitle");

const movieProgress =
    document.getElementById("movieProgress");

const progressValue =
    document.getElementById("progressValue");

const toast =
    document.getElementById("toast");


/* ================= GET MOVIE ================= */

function getMovie(id) {

    return movies.find(
        movie => movie.id === Number(id)
    );

}


/* ================= MOVIE CARD ================= */

function createMovieCard(
    movie,
    progress = null
) {

    const progressData =
        progress ??
        readStorage(
            STORAGE.progress,
            {}
        )[movie.id] ??
        0;

    return `

        <article
            class="movie-card"
            data-movie-id="${movie.id}">

            <div
                class="movie-poster"
                style="
                    background-image:
                    url('${movie.image}')
                ">
            </div>

            <div class="movie-info">

                <h3>
                    ${movie.title}
                </h3>

                <div class="movie-meta">

                    ${movie.year}
                    •
                    ${movie.duration}
                    •
                    ${movie.genre}

                </div>

                <span class="movie-rating">
                    ★ ${movie.rating}
                </span>

            </div>

            ${
                progressData > 0
                ? `
                    <div class="progress-bar">

                        <div
                            class="progress-fill"
                            style="
                                width:${progressData}%
                            ">
                        </div>

                    </div>
                `
                : ""
            }

        </article>

    `;

}


/* ================= RENDER MOVIES ================= */

function renderMovies() {

    let filtered =
        movies.filter(movie => {

            const genreMatch =
                currentGenre === "All" ||
                movie.genre === currentGenre;

            const searchMatch =
                movie.title
                    .toLowerCase()
                    .includes(
                        currentSearch
                    ) ||
                movie.genre
                    .toLowerCase()
                    .includes(
                        currentSearch
                    );

            return genreMatch &&
                   searchMatch;

        });


    movieGrid.innerHTML =
        filtered.length

        ? filtered
            .map(createMovieCard)
            .join("")

        : `
            <p style="color:#777">
                No movies found.
            </p>
        `;


    movieCount.textContent =
        `${filtered.length} Movies`;

}


/* ================= OPEN DETAILS ================= */

function openDetails(id) {

    const movie =
        getMovie(id);

    if (!movie) return;

    currentMovieId =
        movie.id;


    detailsImage.style.backgroundImage =
        `url("${movie.image}")`;

    detailsTitle.textContent =
        movie.title;

    detailsGenre.textContent =
        movie.genre;

    detailsMeta.textContent =
        `${movie.year} • ${movie.duration} • ★ ${movie.rating}`;

    detailsDescription.textContent =
        movie.description;


    updateListButton();


    movieModal.classList.add("active");

    movieModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";

}


/* ================= CLOSE DETAILS ================= */

function closeDetails() {

    movieModal.classList.remove("active");

    movieModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

}


/* ================= OPEN PLAYER ================= */

function openPlayer(id) {

    const movie =
        getMovie(id);

    if (!movie) return;


    currentMovieId =
        movie.id;


    playerTitle.textContent =
        movie.title;

    trailerFrame.src =
        `${movie.trailer}?autoplay=1`;


    const progress =
        getProgress(movie.id);

    movieProgress.value =
        progress;

    progressValue.textContent =
        `${progress}%`;


    playerModal.classList.add("active");

    playerModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";

}


/* ================= CLOSE PLAYER ================= */

function closePlayer() {

    playerModal.classList.remove("active");

    playerModal.setAttribute(
        "aria-hidden",
        "true"
    );

    trailerFrame.src = "";

    document.body.style.overflow =
        "";

}


/* ================= WATCHLIST ================= */

function getWatchlist() {

    return readStorage(
        STORAGE.watchlist,
        []
    );

}


function isInWatchlist(id) {

    return getWatchlist()
        .includes(Number(id));

}


function toggleWatchlist() {

    if (!currentMovieId) return;


    let list =
        getWatchlist();


    if (list.includes(currentMovieId)) {

        list =
            list.filter(
                id =>
                    id !== currentMovieId
            );

        showToast(
            "Removed from My List"
        );

    } else {

        list.push(
            currentMovieId
        );

        showToast(
            "Added to My List ✓"
        );

    }


    writeStorage(
        STORAGE.watchlist,
        list
    );


    updateListButton();

    renderWatchlist();

}


function updateListButton() {

    if (!currentMovieId) return;


    listButton.textContent =
        isInWatchlist(
            currentMovieId
        )

        ? "✓ In My List"

        : "+ Add to My List";

}


/* ================= RENDER LIST ================= */

function renderWatchlist() {

    const list =
        getWatchlist();


    const selectedMovies =
        list
            .map(getMovie)
            .filter(Boolean);


    watchlistGrid.innerHTML =
        selectedMovies.length

        ? selectedMovies
            .map(createMovieCard)
            .join("")

        : `
            <p style="
                color:#777;
                grid-column:1/-1;
            ">
                Your My List is empty.
                Open a movie and add it here.
            </p>
        `;


    const section =
        document.getElementById(
            "my-list"
        );


    if (selectedMovies.length) {

        section.classList.add(
            "visible"
        );

    } else {

        section.classList.remove(
            "visible"
        );

    }

}


/* ================= CONTINUE WATCHING ================= */

function getProgress(id) {

    const progress =
        readStorage(
            STORAGE.progress,
            {}
        );

    return Number(
        progress[id] || 0
    );

}


function saveProgress() {

    if (!currentMovieId) return;


    const progress =
        readStorage(
            STORAGE.progress,
            {}
        );


    progress[currentMovieId] =
        Number(
            movieProgress.value
        );


    writeStorage(
        STORAGE.progress,
        progress
    );


    renderContinueWatching();

    renderMovies();

    showToast(
        "Watch progress saved ✓"
    );

}


function renderContinueWatching() {

    const progress =
        readStorage(
            STORAGE.progress,
            {}
        );


    const entries =
        Object.entries(progress)
            .filter(
                ([, value]) =>
                    Number(value) > 0 &&
                    Number(value) < 100
            );


    const section =
        document.getElementById(
            "continue"
        );


    if (!entries.length) {

        continueGrid.innerHTML = "";

        section.classList.remove(
            "visible"
        );

        return;

    }


    section.classList.add(
        "visible"
    );


    const continueMovies =
        entries
            .map(([id]) =>
                getMovie(Number(id))
            )
            .filter(Boolean);


    continueGrid.innerHTML =
        continueMovies
            .map(movie =>
                createMovieCard(
                    movie,
                    getProgress(movie.id)
                )
            )
            .join("");

}


/* ================= SEARCH ================= */

movieSearch.addEventListener(
    "input",
    event => {

        currentSearch =
            event.target.value
                .trim()
                .toLowerCase();

        renderMovies();

    }
);


/* ================= FILTER ================= */

document
    .querySelectorAll(".filter-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".filter-btn"
                    )
                    .forEach(btn =>
                        btn.classList.remove(
                            "active"
                        )
                    );


                button.classList.add(
                    "active"
                );


                currentGenre =
                    button.dataset.genre;


                renderMovies();

            }
        );

    });


/* ================= CARD CLICK ================= */

document.addEventListener(
    "click",
    event => {

        const card =
            event.target.closest(
                ".movie-card"
            );


        if (!card) return;


        const id =
            Number(
                card.dataset.movieId
            );


        openDetails(id);

    }
);


/* ================= ACTION BUTTONS ================= */

document.addEventListener(
    "click",
    event => {

        const actionElement =
            event.target.closest(
                "[data-action]"
            );


        if (!actionElement) return;


        const action =
            actionElement.dataset.action;


        if (
            action ===
            "details-play"
        ) {

            closeDetails();

            openPlayer(
                currentMovieId
            );

        }


        if (
            action ===
            "toggle-list"
        ) {

            toggleWatchlist();

        }


        if (
            action ===
            "close-details"
        ) {

            closeDetails();

        }


        if (
            action ===
            "close-player"
        ) {

            closePlayer();

        }


        if (
            action ===
            "save-progress"
        ) {

            saveProgress();

        }


        if (
            action ===
            "clear-list"
        ) {

            clearWatchlist();

        }


        if (
            action ===
            "scroll-list"
        ) {

            document
                .getElementById(
                    "my-list"
                )
                .scrollIntoView({
                    behavior: "smooth"
                });

        }


        if (
            action ===
            "hero-play"
        ) {

            openPlayer(1);

        }


        if (
            action ===
            "hero-details"
        ) {

            openDetails(1);

        }

    }
);


/* ================= PROGRESS SLIDER ================= */

movieProgress.addEventListener(
    "input",
    () => {

        progressValue.textContent =
            `${movieProgress.value}%`;

    }
);


/* ================= CLEAR LIST ================= */

function clearWatchlist() {

    if (!getWatchlist().length) {

        showToast(
            "My List is already empty"
        );

        return;

    }


    localStorage.removeItem(
        STORAGE.watchlist
    );


    renderWatchlist();

    showToast(
        "My List cleared"
    );

}


/* ================= ESC KEY ================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape")
            return;


        closeDetails();

        closePlayer();

    }
);


/* ================= BACKDROP CLICK ================= */

movieModal.addEventListener(
    "click",
    event => {

        if (
            event.target.classList
                .contains(
                    "modal-backdrop"
                )
        ) {

            closeDetails();

        }

    }
);


playerModal.addEventListener(
    "click",
    event => {

        if (
            event.target.classList
                .contains(
                    "modal-backdrop"
                )
        ) {

            closePlayer();

        }

    }
);


/* ================= TOAST ================= */

let toastTimer;


function showToast(message) {

    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* ================= INITIALIZE ================= */

function initialize() {

    renderMovies();

    renderWatchlist();

    renderContinueWatching();

}


initialize();