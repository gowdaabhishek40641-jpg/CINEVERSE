/* =========================================================
   CINEVERSE
   COMMIT 10
   PROFILE + WATCH HISTORY + RATINGS
   ========================================================= */


/* =========================================================
   MOVIE DATABASE
   ========================================================= */

const movies = [

    {
        id: 1,
        title: "Beyond The Void",
        genre: "Sci-Fi",
        year: 2026,
        duration: "2h 18m",
        rating: "8.7",
        image:
            "https://images.unsplash.com/photo-1534791547706-9f5e3c5f1847?auto=format&fit=crop&w=1200&q=85",
        description:
            "A deep-space mission discovers a mysterious signal beyond the known universe. What begins as a scientific expedition slowly becomes a fight for survival.",
        trailer:
            "https://www.youtube.com/embed/ScMzIvxBSi4"
    },

    {
        id: 2,
        title: "Dark Future",
        genre: "Action",
        year: 2025,
        duration: "2h 05m",
        rating: "8.4",
        image:
            "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85",
        description:
            "A soldier enters a future ruled by machines and fights to restore humanity before the last human cities disappear.",
        trailer:
            "https://www.youtube.com/embed/ScMzIvxBSi4"
    },

    {
        id: 3,
        title: "Lost Galaxy",
        genre: "Sci-Fi",
        year: 2025,
        duration: "2h 25m",
        rating: "9.0",
        image:
            "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=85",
        description:
            "A crew searches for a lost civilization hidden inside a distant galaxy and discovers something much more powerful.",
        trailer:
            "https://www.youtube.com/embed/ScMzIvxBSi4"
    },

    {
        id: 4,
        title: "Night City",
        genre: "Thriller",
        year: 2026,
        duration: "1h 58m",
        rating: "8.2",
        image:
            "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85",
        description:
            "A detective follows a mysterious trail through a city that never sleeps.",
        trailer:
            "https://www.youtube.com/embed/ScMzIvxBSi4"
    },

    {
        id: 5,
        title: "Final Mission",
        genre: "Action",
        year: 2024,
        duration: "2h 12m",
        rating: "8.1",
        image:
            "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=85",
        description:
            "One final mission stands between a special forces team and global disaster.",
        trailer:
            "https://www.youtube.com/embed/ScMzIvxBSi4"
    },

    {
        id: 6,
        title: "Cyber World",
        genre: "Technology",
        year: 2026,
        duration: "2h 10m",
        rating: "8.8",
        image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
        description:
            "A hacker discovers a digital world hidden beneath the modern internet.",
        trailer:
            "https://www.youtube.com/embed/ScMzIvxBSi4"
    },

    {
        id: 7,
        title: "Shadow Protocol",
        genre: "Thriller",
        year: 2025,
        duration: "2h 02m",
        rating: "8.6",
        image:
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=85",
        description:
            "An intelligence agent uncovers a secret protocol capable of changing the world.",
        trailer:
            "https://www.youtube.com/embed/ScMzIvxBSi4"
    },

    {
        id: 8,
        title: "Future Earth",
        genre: "Adventure",
        year: 2027,
        duration: "2h 30m",
        rating: "8.9",
        image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
        description:
            "Humanity returns to Earth after decades away to rebuild civilization.",
        trailer:
            "https://www.youtube.com/embed/ScMzIvxBSi4"
    },

    {
        id: 9,
        title: "The Unknown",
        genre: "Mystery",
        year: 2025,
        duration: "1h 55m",
        rating: "8.3",
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
        description:
            "A mysterious disappearance reveals secrets buried for generations.",
        trailer:
            "https://www.youtube.com/embed/ScMzIvxBSi4"
    },

    {
        id: 10,
        title: "Infinity",
        genre: "Sci-Fi",
        year: 2026,
        duration: "2h 35m",
        rating: "9.1",
        image:
            "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=1200&q=85",
        description:
            "A scientist discovers a way to cross the boundaries of time and space.",
        trailer:
            "https://www.youtube.com/embed/ScMzIvxBSi4"
    },

    {
        id: 11,
        title: "Last Code",
        genre: "Technology",
        year: 2025,
        duration: "2h 08m",
        rating: "8.5",
        image:
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=85",
        description:
            "A programmer races against time after discovering the world's most dangerous code.",
        trailer:
            "https://www.youtube.com/embed/ScMzIvxBSi4"
    },

    {
        id: 12,
        title: "Silent Night",
        genre: "Horror",
        year: 2024,
        duration: "1h 48m",
        rating: "7.9",
        image:
            "https://images.unsplash.com/photo-1505635552518-3448f4b0d8f4?auto=format&fit=crop&w=1200&q=85",
        description:
            "A quiet town faces a mysterious event that happens every midnight.",
        trailer:
            "https://www.youtube.com/embed/ScMzIvxBSi4"
    }

];


/* =========================================================
   STORAGE KEYS
   ========================================================= */

const WATCHLIST_KEY =
    "cineverse_watchlist_v2";

const CONTINUE_KEY =
    "cineverse_continue_v2";

const HISTORY_KEY =
    "cineverse_history_v1";

const RATINGS_KEY =
    "cineverse_ratings_v1";


/* =========================================================
   STORAGE HELPERS
   ========================================================= */

function getStorage(key, fallback = []) {

    try {

        return JSON.parse(
            localStorage.getItem(key)
        ) || fallback;

    } catch {

        return fallback;

    }

}


function setStorage(key, value) {

    localStorage.setItem(
        key,
        JSON.stringify(value)
    );

}


function getWatchlist() {

    return getStorage(
        WATCHLIST_KEY,
        []
    );

}


function saveWatchlist(list) {

    setStorage(
        WATCHLIST_KEY,
        list
    );

}


function getContinue() {

    return getStorage(
        CONTINUE_KEY,
        []
    );

}


function saveContinue(list) {

    setStorage(
        CONTINUE_KEY,
        list
    );

}


function getHistory() {

    return getStorage(
        HISTORY_KEY,
        []
    );

}


function saveHistory(list) {

    setStorage(
        HISTORY_KEY,
        list
    );

}


function getRatings() {

    return getStorage(
        RATINGS_KEY,
        {}
    );

}


function saveRatings(ratings) {

    setStorage(
        RATINGS_KEY,
        ratings
    );

}


/* =========================================================
   STATE
   ========================================================= */

let currentMovie = null;

let activeGenre = "All";

let searchTerm = "";


/* =========================================================
   DOM
   ========================================================= */

const movieGrid =
    document.getElementById(
        "movieGrid"
    );

const continueGrid =
    document.getElementById(
        "continueGrid"
    );

const watchlistGrid =
    document.getElementById(
        "watchlistGrid"
    );

const historyGrid =
    document.getElementById(
        "historyGrid"
    );

const filterContainer =
    document.getElementById(
        "filterContainer"
    );

const searchInput =
    document.getElementById(
        "movieSearch"
    );

const movieCount =
    document.getElementById(
        "movieCount"
    );

const movieDialog =
    document.getElementById(
        "movieDialog"
    );

const trailerDialog =
    document.getElementById(
        "trailerDialog"
    );

const profileDialog =
    document.getElementById(
        "profileDialog"
    );


/* =========================================================
   FILTER
   ========================================================= */

function getFilteredMovies() {

    return movies.filter(movie => {

        const genreMatch =
            activeGenre === "All" ||
            movie.genre === activeGenre;

        const searchMatch =
            movie.title
                .toLowerCase()
                .includes(searchTerm) ||

            movie.genre
                .toLowerCase()
                .includes(searchTerm) ||

            movie.description
                .toLowerCase()
                .includes(searchTerm);

        return genreMatch && searchMatch;

    });

}


/* =========================================================
   MOVIE CARD
   ========================================================= */

function movieCard(
    movie,
    progress = null
) {

    return `

        <article
            class="movie-card"
            data-id="${movie.id}">

            <img
                src="${movie.image}"
                alt="${movie.title}"
                loading="lazy"
            >

            <div class="movie-info">

                <div class="movie-title">
                    ${movie.title}
                </div>

                <div class="movie-meta">
                    ${movie.genre}
                    •
                    ${movie.year}
                    •
                    ⭐ ${movie.rating}
                </div>

            </div>

            ${
                progress !== null
                    ? `
                        <div
                            class="card-progress">

                            <div
                                class="card-progress-fill"
                                style="
                                    width:${progress}%;
                                ">
                            </div>

                        </div>
                    `
                    : ""
            }

        </article>

    `;

}


/* =========================================================
   RENDER MOVIES
   ========================================================= */

function renderMovies() {

    const filtered =
        getFilteredMovies();

    movieGrid.innerHTML = "";

    movieCount.textContent =
        `${filtered.length} movies`;


    if (!filtered.length) {

        movieGrid.innerHTML = `

            <div class="empty-state">

                <div>

                    <h3>
                        No movies found
                    </h3>

                    <p>
                        Try another movie or genre.
                    </p>

                </div>

            </div>

        `;

        return;

    }


    filtered.forEach(movie => {

        movieGrid.insertAdjacentHTML(
            "beforeend",
            movieCard(movie)
        );

    });

}


/* =========================================================
   FILTER BUTTONS
   ========================================================= */

function createFilters() {

    const genres = [

        "All",

        ...new Set(
            movies.map(
                movie => movie.genre
            )
        )

    ];

    filterContainer.innerHTML = "";

    genres.forEach(genre => {

        const button =
            document.createElement(
                "button"
            );

        button.type = "button";

        button.className =
            "filter-btn" +
            (
                genre === "All"
                    ? " active"
                    : ""
            );

        button.textContent =
            genre;

        button.addEventListener(
            "click",
            () => {

                activeGenre =
                    genre;

                document
                    .querySelectorAll(
                        ".filter-btn"
                    )
                    .forEach(btn =>
                        btn.classList
                            .remove("active")
                    );

                button.classList.add(
                    "active"
                );

                renderMovies();

            }
        );

        filterContainer.appendChild(
            button
        );

    });

}


/* =========================================================
   ADD HISTORY
   ========================================================= */

function addToHistory(movie) {

    let history =
        getHistory();

    history =
        history.filter(
            item =>
                item.id !== movie.id
        );

    history.unshift({

        id: movie.id,

        watchedAt:
            Date.now()

    });

    history =
        history.slice(0, 10);

    saveHistory(history);

    renderHistory();

    updateProfile();

}


/* =========================================================
   OPEN DETAILS
   ========================================================= */

function openMovieDetails(id) {

    const movie =
        movies.find(
            item =>
                item.id === Number(id)
        );

    if (!movie) return;

    currentMovie = movie;


    /* HISTORY */

    addToHistory(movie);


    /* WATCHLIST */

    const watchlist =
        getWatchlist();

    const saved =
        watchlist.includes(
            movie.id
        );


    /* CONTINUE */

    const continueList =
        getContinue();

    const progressItem =
        continueList.find(
            item =>
                item.id === movie.id
        );

    const progress =
        progressItem
            ? progressItem.progress
            : 0;


    /* RATINGS */

    const ratings =
        getRatings();

    const userRating =
        ratings[movie.id] || 0;


    /* DETAILS */

    document.getElementById(
        "detailsImage"
    ).src =
        movie.image;


    document.getElementById(
        "detailsImage"
    ).alt =
        movie.title;


    document.getElementById(
        "detailsTitle"
    ).textContent =
        movie.title;


    document.getElementById(
        "detailsGenre"
    ).textContent =
        movie.genre.toUpperCase();


    document.getElementById(
        "detailsMeta"
    ).innerHTML = `

        <span>
            ⭐ ${movie.rating}
        </span>

        <span>
            ${movie.year}
        </span>

        <span>
            ${movie.duration}
        </span>

        <span>
            ${movie.genre}
        </span>

    `;


    document.getElementById(
        "detailsDescription"
    ).textContent =
        movie.description;


    /* PROGRESS */

    const slider =
        document.getElementById(
            "progressSlider"
        );

    slider.value =
        progress;


    document.getElementById(
        "progressText"
    ).textContent =
        `${progress}%`;


    /* WATCHLIST */

    document.getElementById(
        "watchlistButton"
    ).textContent =
        saved
            ? "✓ Remove from My List"
            : "+ Add to My List";


    /* RATING */

    updateRatingUI(
        userRating
    );


    movieDialog.showModal();

}


/* =========================================================
   CLOSE MOVIE DIALOG
   ========================================================= */

document
    .getElementById(
        "closeMovieDialog"
    )
    .addEventListener(
        "click",
        () => {

            movieDialog.close();

        }
    );


/* =========================================================
   MOVIE CARD CLICK
   ========================================================= */

movieGrid.addEventListener(
    "click",
    event => {

        const card =
            event.target.closest(
                ".movie-card"
            );

        if (!card) return;

        openMovieDetails(
            card.dataset.id
        );

    }
);


/* =========================================================
   CONTINUE CARD CLICK
   ========================================================= */

continueGrid.addEventListener(
    "click",
    event => {

        const card =
            event.target.closest(
                ".movie-card"
            );

        if (!card) return;

        openMovieDetails(
            card.dataset.id
        );

    }
);


/* =========================================================
   WATCHLIST CARD CLICK
   ========================================================= */

watchlistGrid.addEventListener(
    "click",
    event => {

        const card =
            event.target.closest(
                ".movie-card"
            );

        if (!card) return;

        openMovieDetails(
            card.dataset.id
        );

    }
);


/* =========================================================
   HISTORY CARD CLICK
   ========================================================= */

historyGrid.addEventListener(
    "click",
    event => {

        const card =
            event.target.closest(
                ".movie-card"
            );

        if (!card) return;

        openMovieDetails(
            card.dataset.id
        );

    }
);


/* =========================================================
   WATCH TRAILER
   ========================================================= */

document
    .getElementById(
        "watchTrailer"
    )
    .addEventListener(
        "click",
        () => {

            if (!currentMovie) return;

            playTrailer();

        }
    );


/* =========================================================
   PLAY TRAILER
   ========================================================= */

function playTrailer() {

    if (!currentMovie) return;


    addToHistory(
        currentMovie
    );


    document.getElementById(
        "trailerFrame"
    ).src =
        `${currentMovie.trailer}?autoplay=1`;


    document.getElementById(
        "playerTitle"
    ).textContent =
        currentMovie.title;


    movieDialog.close();

    trailerDialog.showModal();

}


/* =========================================================
   CLOSE TRAILER
   ========================================================= */

document
    .getElementById(
        "closeTrailer"
    )
    .addEventListener(
        "click",
        closeTrailer
    );


function closeTrailer() {

    document.getElementById(
        "trailerFrame"
    ).src = "";

    trailerDialog.close();

}


/* =========================================================
   WATCH NOW
   ========================================================= */

document
    .getElementById(
        "watchNow"
    )
    .addEventListener(
        "click",
        () => {

            if (!currentMovie) return;


            let list =
                getContinue();


            const existing =
                list.find(
                    item =>
                        item.id ===
                        currentMovie.id
                );


            if (existing) {

                existing.progress =
                    Math.min(
                        existing.progress + 5,
                        100
                    );

            } else {

                list.push({

                    id:
                        currentMovie.id,

                    progress:
                        5

                });

            }


            saveContinue(list);

            renderContinue();

            addToHistory(
                currentMovie
            );

            updateProfile();

            showToast(
                "Added to Continue Watching"
            );

            playTrailer();

        }
    );


/* =========================================================
   WATCHLIST
   ========================================================= */

document
    .getElementById(
        "watchlistButton"
    )
    .addEventListener(
        "click",
        () => {

            if (!currentMovie) return;


            let list =
                getWatchlist();


            if (
                list.includes(
                    currentMovie.id
                )
            ) {

                list =
                    list.filter(
                        id =>
                            id !==
                            currentMovie.id
                    );

                showToast(
                    "Removed from My List"
                );

            } else {

                list.push(
                    currentMovie.id
                );

                showToast(
                    "Added to My List"
                );

            }


            saveWatchlist(list);

            renderWatchlist();

            updateProfile();

            openMovieDetails(
                currentMovie.id
            );

        }
    );


/* =========================================================
   PROGRESS
   ========================================================= */

document
    .getElementById(
        "progressSlider"
    )
    .addEventListener(
        "input",
        event => {

            document.getElementById(
                "progressText"
            ).textContent =
                `${event.target.value}%`;

        }
    );


document
    .getElementById(
        "progressSlider"
    )
    .addEventListener(
        "change",
        event => {

            if (!currentMovie) return;


            let list =
                getContinue();


            const progress =
                Number(
                    event.target.value
                );


            const existing =
                list.find(
                    item =>
                        item.id ===
                        currentMovie.id
                );


            if (existing) {

                existing.progress =
                    progress;

            } else {

                list.push({

                    id:
                        currentMovie.id,

                    progress:
                        progress

                });

            }


            saveContinue(list);

            renderContinue();

            updateProfile();

            showToast(
                "Progress saved"
            );

        }
    );


/* =========================================================
   RATING SYSTEM
   ========================================================= */

document
    .querySelectorAll(
        "#ratingStars button"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                if (!currentMovie)
                    return;


                const rating =
                    Number(
                        button.dataset.rating
                    );


                const ratings =
                    getRatings();


                ratings[currentMovie.id] =
                    rating;


                saveRatings(
                    ratings
                );


                updateRatingUI(
                    rating
                );


                updateProfile();


                showToast(
                    `Rated ${rating}/5`
                );

            }
        );

    });


function updateRatingUI(rating) {

    const buttons =
        document.querySelectorAll(
            "#ratingStars button"
        );


    buttons.forEach(button => {

        const value =
            Number(
                button.dataset.rating
            );

        button.classList.toggle(
            "active",
            value <= rating
        );

    });


    document.getElementById(
        "ratingText"
    ).textContent =
        rating
            ? `${rating}/5 stars`
            : "Not rated";

}


/* =========================================================
   CONTINUE WATCHING
   ========================================================= */

function renderContinue() {

    const list =
        getContinue();


    continueGrid.innerHTML = "";


    if (!list.length) {

        continueGrid.innerHTML = `

            <div class="empty-state">

                <div>

                    <h3>
                        Nothing to continue
                    </h3>

                    <p>
                        Start watching a movie
                        to see your progress here.
                    </p>

                </div>

            </div>

        `;

        return;

    }


    list.forEach(item => {

        const movie =
            movies.find(
                m =>
                    m.id === item.id
            );


        if (!movie) return;


        continueGrid.insertAdjacentHTML(
            "beforeend",

            movieCard(
                movie,
                item.progress
            )

        );

    });

}


/* =========================================================
   WATCHLIST
   ========================================================= */

function renderWatchlist() {

    const list =
        getWatchlist();


    watchlistGrid.innerHTML = "";


    const selected =
        movies.filter(
            movie =>
                list.includes(
                    movie.id
                )
        );


    if (!selected.length) {

        watchlistGrid.innerHTML = `

            <div class="empty-state">

                <div>

                    <h3>
                        Your list is empty
                    </h3>

                    <p>
                        Add movies using
                        "Add to My List".
                    </p>

                </div>

            </div>

        `;

        return;

    }


    selected.forEach(movie => {

        watchlistGrid.insertAdjacentHTML(
            "beforeend",

            movieCard(movie)

        );

    });

}


/* =========================================================
   HISTORY
   ========================================================= */

function renderHistory() {

    const history =
        getHistory();


    historyGrid.innerHTML = "";


    if (!history.length) {

        historyGrid.innerHTML = `

            <div class="empty-state">

                <div>

                    <h3>
                        No watch history
                    </h3>

                    <p>
                        Movies you open or watch
                        will appear here.
                    </p>

                </div>

            </div>

        `;

        return;

    }


    history.forEach(item => {

        const movie =
            movies.find(
                m =>
                    m.id === item.id
            );


        if (!movie) return;


        historyGrid.insertAdjacentHTML(
            "beforeend",

            movieCard(movie)

        );

    });

}


/* =========================================================
   CLEAR HISTORY
   ========================================================= */

document
    .getElementById(
        "clearHistory"
    )
    .addEventListener(
        "click",
        clearHistory
    );


document
    .getElementById(
        "profileClearHistory"
    )
    .addEventListener(
        "click",
        clearHistory
    );


function clearHistory() {

    const history =
        getHistory();


    if (!history.length) {

        showToast(
            "Watch history is already empty"
        );

        return;

    }


    const confirmed =
        confirm(
            "Clear your complete watch history?"
        );


    if (!confirmed) return;


    localStorage.removeItem(
        HISTORY_KEY
    );


    renderHistory();

    updateProfile();


    showToast(
        "Watch history cleared"
    );

}


/* =========================================================
   SEARCH
   ========================================================= */

searchInput.addEventListener(
    "input",
    event => {

        searchTerm =
            event.target.value
                .toLowerCase()
                .trim();

        renderMovies();

    }
);


/* =========================================================
   CLEAR SEARCH
   ========================================================= */

document
    .getElementById(
        "clearSearch"
    )
    .addEventListener(
        "click",
        () => {

            searchInput.value = "";

            searchTerm = "";

            renderMovies();

            searchInput.focus();

        }
    );


/* =========================================================
   NAV SEARCH
   ========================================================= */

document
    .getElementById(
        "focusSearch"
    )
    .addEventListener(
        "click",
        () => {

            document
                .querySelector(
                    ".search-section"
                )
                .scrollIntoView({
                    behavior: "smooth"
                });


            setTimeout(
                () =>
                    searchInput.focus(),
                500
            );

        }
    );


/* =========================================================
   PROFILE
   ========================================================= */

document
    .getElementById(
        "openProfile"
    )
    .addEventListener(
        "click",
        () => {

            updateProfile();

            profileDialog.showModal();

        }
    );


document
    .getElementById(
        "closeProfile"
    )
    .addEventListener(
        "click",
        () => {

            profileDialog.close();

        }
    );


/* =========================================================
   UPDATE PROFILE
   ========================================================= */

function updateProfile() {

    const watchlist =
        getWatchlist();

    const continueList =
        getContinue();

    const history =
        getHistory();

    const ratings =
        getRatings();


    document.getElementById(
        "profileListCount"
    ).textContent =
        watchlist.length;


    document.getElementById(
        "profileContinueCount"
    ).textContent =
        continueList.length;


    document.getElementById(
        "profileHistoryCount"
    ).textContent =
        history.length;


    document.getElementById(
        "profileRatedCount"
    ).textContent =
        Object.keys(
            ratings
        ).length;


    renderProfileRecent();

    renderProfileRatings();

}


/* =========================================================
   PROFILE RECENT
   ========================================================= */

function renderProfileRecent() {

    const container =
        document.getElementById(
            "profileRecent"
        );


    const history =
        getHistory();


    container.innerHTML = "";


    if (!history.length) {

        container.innerHTML = `

            <div class="profile-item">

                <span class="profile-item-subtitle">
                    No recent activity yet.
                </span>

            </div>

        `;

        return;

    }


    history
        .slice(0, 5)
        .forEach(item => {

            const movie =
                movies.find(
                    m =>
                        m.id === item.id
                );


            if (!movie) return;


            const date =
                new Date(
                    item.watchedAt
                );


            container.insertAdjacentHTML(
                "beforeend",

                `

                <div class="profile-item">

                    <div
                        class="profile-item-left">

                        <img
                            src="${movie.image}"
                            alt="${movie.title}"
                        >

                        <div>

                            <div
                                class="profile-item-title">

                                ${movie.title}

                            </div>

                            <div
                                class="profile-item-subtitle">

                                ${movie.genre}
                                •
                                ${date.toLocaleDateString()}

                            </div>

                        </div>

                    </div>

                    <span>
                        ▶
                    </span>

                </div>

                `

            );

        });

}


/* =========================================================
   PROFILE RATINGS
   ========================================================= */

function renderProfileRatings() {

    const container =
        document.getElementById(
            "profileRatings"
        );


    const ratings =
        getRatings();


    container.innerHTML = "";


    const ratedMovies =
        movies.filter(
            movie =>
                ratings[movie.id]
        );


    if (!ratedMovies.length) {

        container.innerHTML = `

            <div class="profile-item">

                <span
                    class="profile-item-subtitle">

                    You haven't rated any movies yet.

                </span>

            </div>

        `;

        return;

    }


    ratedMovies.forEach(movie => {

        const rating =
            ratings[movie.id];


        container.insertAdjacentHTML(
            "beforeend",

            `

            <div class="profile-item">

                <div
                    class="profile-item-left">

                    <img
                        src="${movie.image}"
                        alt="${movie.title}"
                    >

                    <div>

                        <div
                            class="profile-item-title">

                            ${movie.title}

                        </div>

                        <div
                            class="profile-item-subtitle">

                            Your rating

                        </div>

                    </div>

                </div>

                <div
                    class="profile-item-rating">

                    ${"★".repeat(rating)}
                    ${"☆".repeat(5 - rating)}

                </div>

            </div>

            `

        );

    });

}


/* =========================================================
   HERO
   ========================================================= */

document
    .getElementById(
        "heroPlay"
    )
    .addEventListener(
        "click",
        () => {

            currentMovie =
                movies[0];

            playTrailer();

        }
    );


document
    .getElementById(
        "heroDetails"
    )
    .addEventListener(
        "click",
        () => {

            openMovieDetails(1);

        }
    );


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        window.toastTimer
    );


    window.toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2200
        );

}


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !==
            "Escape"
        ) {

            return;

        }


        if (
            trailerDialog.open
        ) {

            closeTrailer();

        }

    }
);


/* =========================================================
   INITIALIZE
   ========================================================= */

createFilters();

renderMovies();

renderContinue();

renderWatchlist();

renderHistory();

updateProfile();


console.log(
    "CineVerse Commit 10 loaded successfully."
);