/* =========================================================
   CINEVERSE
   COMMIT 11
   TRENDING + RECOMMENDATIONS + TOP RATED
========================================================= */


/* =========================================================
   MOVIES
========================================================= */

const movies = [

    {
        id: 1,
        title: "Beyond The Void",
        genre: "Sci-Fi",
        year: 2026,
        duration: "2h 18m",
        rating: "8.7",
        popularity: 99,
        added: "2026-09-28",
        image:
            "https://images.unsplash.com/photo-1534791547706-9f5e3c5f1847?auto=format&fit=crop&w=1200&q=85",
        description:
            "A deep-space mission discovers a mysterious signal beyond the known universe. What begins as a scientific expedition becomes a fight for survival.",
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
        popularity: 96,
        added: "2026-09-24",
        image:
            "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85",
        description:
            "A soldier enters a future ruled by machines and fights to restore humanity.",
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
        popularity: 98,
        added: "2026-09-25",
        image:
            "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=85",
        description:
            "A crew searches for a lost civilization hidden inside a distant galaxy.",
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
        popularity: 93,
        added: "2026-09-30",
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
        popularity: 89,
        added: "2026-09-20",
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
        popularity: 97,
        added: "2026-09-29",
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
        popularity: 94,
        added: "2026-09-22",
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
        popularity: 91,
        added: "2026-10-01",
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
        popularity: 88,
        added: "2026-09-18",
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
        popularity: 100,
        added: "2026-09-27",
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
        popularity: 92,
        added: "2026-10-02",
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
        popularity: 84,
        added: "2026-09-15",
        image:
            "https://images.unsplash.com/photo-1505635552518-3448f4b0d8f4?auto=format&fit=crop&w=1200&q=85",
        description:
            "A quiet town faces a mysterious event that happens every midnight.",
        trailer:
            "https://www.youtube.com/embed/ScMzIvxBSi4"
    }

];


/* =========================================================
   STORAGE
========================================================= */

const WATCHLIST_KEY =
    "cineverse_watchlist_v2";

const CONTINUE_KEY =
    "cineverse_continue_v2";

const HISTORY_KEY =
    "cineverse_history_v1";

const RATINGS_KEY =
    "cineverse_ratings_v1";


function getStorage(
    key,
    fallback
) {

    try {

        return JSON.parse(
            localStorage.getItem(key)
        ) || fallback;

    } catch {

        return fallback;

    }

}


function setStorage(
    key,
    value
) {

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

const trendingGrid =
    document.getElementById(
        "trendingGrid"
    );

const recommendedGrid =
    document.getElementById(
        "recommendedGrid"
    );

const topRatedGrid =
    document.getElementById(
        "topRatedGrid"
    );

const recentGrid =
    document.getElementById(
        "recentGrid"
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
   MOVIE CARD
========================================================= */

function movieCard(
    movie,
    progress = null,
    featured = false
) {

    return `

        <article
            class="
                movie-card
                ${featured ? "featured-card" : ""}
            "
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
                        <div class="card-progress">

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
   TRENDING
========================================================= */

function renderTrending() {

    const trending =
        [...movies]
            .sort(
                (a, b) =>
                    b.popularity -
                    a.popularity
            )
            .slice(0, 6);


    trendingGrid.innerHTML =
        trending
            .map(
                movie =>
                    movieCard(
                        movie,
                        null,
                        true
                    )
            )
            .join("");

}


/* =========================================================
   TOP RATED
========================================================= */

function renderTopRated() {

    const topRated =
        [...movies]
            .sort(
                (a, b) =>
                    Number(b.rating) -
                    Number(a.rating)
            )
            .slice(0, 6);


    topRatedGrid.innerHTML =
        topRated
            .map(
                movie =>
                    movieCard(movie)
            )
            .join("");

}


/* =========================================================
   RECENTLY ADDED
========================================================= */

function renderRecentlyAdded() {

    const recent =
        [...movies]
            .sort(
                (a, b) =>
                    new Date(b.added) -
                    new Date(a.added)
            )
            .slice(0, 6);


    recentGrid.innerHTML =
        recent
            .map(
                movie =>
                    movieCard(movie)
            )
            .join("");

}


/* =========================================================
   RECOMMENDATION ENGINE
========================================================= */

function getRecommendations() {

    const history =
        getHistory();

    const watchlist =
        getWatchlist();

    const ratings =
        getRatings();


    /*
       Find genres the user has interacted with.
    */

    const preferredGenres = {};


    history.forEach(item => {

        const movie =
            movies.find(
                m =>
                    m.id === item.id
            );

        if (!movie) return;

        preferredGenres[movie.genre] =
            (
                preferredGenres[movie.genre]
                || 0
            ) + 2;

    });


    watchlist.forEach(id => {

        const movie =
            movies.find(
                m =>
                    m.id === id
            );

        if (!movie) return;

        preferredGenres[movie.genre] =
            (
                preferredGenres[movie.genre]
                || 0
            ) + 3;

    });


    Object.keys(
        ratings
    ).forEach(id => {

        const movie =
            movies.find(
                m =>
                    m.id === Number(id)
            );

        if (!movie) return;

        if (
            Number(
                ratings[id]
            ) >= 4
        ) {

            preferredGenres[movie.genre] =
                (
                    preferredGenres[movie.genre]
                    || 0
                ) + 5;

        }

    });


    /*
       No user activity:
       show high-quality mixed selection.
    */

    if (
        Object.keys(
            preferredGenres
        ).length === 0
    ) {

        return [...movies]
            .sort(
                (a, b) =>
                    Number(b.rating) -
                    Number(a.rating)
            )
            .slice(0, 6);

    }


    /*
       Score movies based on
       preferred genres.
    */

    const scored =
        movies.map(movie => {

            const genreScore =
                preferredGenres[
                    movie.genre
                ] || 0;

            const ratingScore =
                Number(
                    movie.rating
                );

            const popularityScore =
                movie.popularity / 20;


            return {

                movie,

                score:
                    genreScore +
                    ratingScore +
                    popularityScore

            };

        });


    return scored
        .sort(
            (a, b) =>
                b.score -
                a.score
        )
        .map(
            item =>
                item.movie
        )
        .slice(0, 6);

}


/* =========================================================
   RENDER RECOMMENDATIONS
========================================================= */

function renderRecommendations() {

    const recommendations =
        getRecommendations();


    recommendedGrid.innerHTML =
        recommendations
            .map(
                movie =>
                    movieCard(movie)
            )
            .join("");


    const history =
        getHistory();

    const watchlist =
        getWatchlist();

    const ratings =
        getRatings();


    const hasPersonalData =
        history.length ||
        watchlist.length ||
        Object.keys(ratings).length;


    document.getElementById(
        "recommendationReason"
    ).textContent =
        hasPersonalData
            ? "Based on your activity"
            : "Popular picks for you";

}


/* =========================================================
   FILTERED MOVIES
========================================================= */

function getFilteredMovies() {

    return movies.filter(
        movie => {

            const genreMatch =
                activeGenre === "All"
                ||
                movie.genre === activeGenre;


            const searchMatch =
                movie.title
                    .toLowerCase()
                    .includes(searchTerm)

                ||

                movie.genre
                    .toLowerCase()
                    .includes(searchTerm)

                ||

                movie.description
                    .toLowerCase()
                    .includes(searchTerm);


            return (
                genreMatch &&
                searchMatch
            );

        }
    );

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
                        Try another search or genre.
                    </p>

                </div>

            </div>

        `;

        return;

    }


    movieGrid.innerHTML =
        filtered
            .map(
                movie =>
                    movieCard(movie)
            )
            .join("");

}


/* =========================================================
   FILTERS
========================================================= */

function createFilters() {

    const genres = [

        "All",

        ...new Set(
            movies.map(
                movie =>
                    movie.genre
            )
        )

    ];


    filterContainer.innerHTML = "";


    genres.forEach(
        genre => {

            const button =
                document.createElement(
                    "button"
                );

            button.type = "button";

            button.className =
                "filter-btn"
                +
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
                        .forEach(
                            item =>
                                item.classList
                                    .remove(
                                        "active"
                                    )
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

        }
    );

}


/* =========================================================
   HISTORY
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

        id:
            movie.id,

        watchedAt:
            Date.now()

    });


    history =
        history.slice(
            0,
            10
        );


    saveHistory(
        history
    );


    renderHistory();

    renderRecommendations();

    updateProfile();

}


/* =========================================================
   OPEN MOVIE
========================================================= */

function openMovieDetails(id) {

    const movie =
        movies.find(
            item =>
                item.id === Number(id)
        );


    if (!movie) return;


    currentMovie =
        movie;


    addToHistory(
        movie
    );


    const watchlist =
        getWatchlist();


    const saved =
        watchlist.includes(
            movie.id
        );


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


    const ratings =
        getRatings();


    const userRating =
        ratings[movie.id] || 0;


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


    document.getElementById(
        "progressSlider"
    ).value =
        progress;


    document.getElementById(
        "progressText"
    ).textContent =
        `${progress}%`;


    document.getElementById(
        "watchlistButton"
    ).textContent =
        saved
            ? "✓ Remove from My List"
            : "+ Add to My List";


    updateRatingUI(
        userRating
    );


    movieDialog.showModal();

}


/* =========================================================
   DIALOG EVENTS
========================================================= */

document
    .getElementById(
        "closeMovieDialog"
    )
    .addEventListener(
        "click",
        () =>
            movieDialog.close()
    );


function attachMovieClicks(
    container
) {

    container.addEventListener(
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

}


attachMovieClicks(
    movieGrid
);

attachMovieClicks(
    trendingGrid
);

attachMovieClicks(
    recommendedGrid
);

attachMovieClicks(
    topRatedGrid
);

attachMovieClicks(
    recentGrid
);

attachMovieClicks(
    continueGrid
);

attachMovieClicks(
    watchlistGrid
);

attachMovieClicks(
    historyGrid
);


/* =========================================================
   TRAILER
========================================================= */

document
    .getElementById(
        "watchTrailer"
    )
    .addEventListener(
        "click",
        playTrailer
    );


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

            if (!currentMovie)
                return;


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


            saveContinue(
                list
            );


            renderContinue();

            renderRecommendations();

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

            if (!currentMovie)
                return;


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


            saveWatchlist(
                list
            );


            renderWatchlist();

            renderRecommendations();

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

            if (!currentMovie)
                return;


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


            saveContinue(
                list
            );


            renderContinue();

            updateProfile();

            showToast(
                "Progress saved"
            );

        }
    );


/* =========================================================
   RATING
========================================================= */

document
    .querySelectorAll(
        "#ratingStars button"
    )
    .forEach(
        button => {

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


                    renderRecommendations();

                    updateProfile();


                    showToast(
                        `Rated ${rating}/5`
                    );

                }
            );

        }
    );


function updateRatingUI(
    rating
) {

    document
        .querySelectorAll(
            "#ratingStars button"
        )
        .forEach(
            button => {

                const value =
                    Number(
                        button.dataset.rating
                    );


                button.classList.toggle(
                    "active",
                    value <= rating
                );

            }
        );


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


    continueGrid.innerHTML =
        list
            .map(
                item => {

                    const movie =
                        movies.find(
                            m =>
                                m.id === item.id
                        );


                    return movie
                        ? movieCard(
                            movie,
                            item.progress
                        )
                        : "";

                }
            )
            .join("");

}


/* =========================================================
   WATCHLIST
========================================================= */

function renderWatchlist() {

    const list =
        getWatchlist();


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


    watchlistGrid.innerHTML =
        selected
            .map(
                movie =>
                    movieCard(movie)
            )
            .join("");

}


/* =========================================================
   HISTORY
========================================================= */

function renderHistory() {

    const history =
        getHistory();


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


    historyGrid.innerHTML =
        history
            .map(
                item => {

                    const movie =
                        movies.find(
                            m =>
                                m.id === item.id
                        );


                    return movie
                        ? movieCard(movie)
                        : "";

                }
            )
            .join("");

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

    if (!getHistory().length) {

        showToast(
            "Watch history is already empty"
        );

        return;

    }


    if (
        !confirm(
            "Clear your complete watch history?"
        )
    ) {

        return;

    }


    localStorage.removeItem(
        HISTORY_KEY
    );


    renderHistory();

    renderRecommendations();

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
                    behavior:
                        "smooth"
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
        () =>
            profileDialog.close()
    );


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


    if (!history.length) {

        container.innerHTML = `

            <div class="profile-item">

                <span
                    class="profile-item-subtitle">

                    No recent activity yet.

                </span>

            </div>

        `;

        return;

    }


    container.innerHTML =
        history
            .slice(0, 5)
            .map(
                item => {

                    const movie =
                        movies.find(
                            m =>
                                m.id === item.id
                        );


                    if (!movie)
                        return "";


                    const date =
                        new Date(
                            item.watchedAt
                        );


                    return `

                        <div
                            class="profile-item">

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

                    `;

                }
            )
            .join("");

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


    container.innerHTML =
        ratedMovies
            .map(
                movie => {

                    const rating =
                        ratings[
                            movie.id
                        ];


                    return `

                        <div
                            class="profile-item">

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

                    `;

                }
            )
            .join("");

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
        () =>
            openMovieDetails(1)
    );


/* =========================================================
   TOAST
========================================================= */

function showToast(
    message
) {

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
            () =>
                toast.classList.remove(
                    "show"
                ),
            2200
        );

}


/* =========================================================
   ESCAPE
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

renderTrending();

renderRecommendations();

renderTopRated();

renderRecentlyAdded();

renderContinue();

renderWatchlist();

renderHistory();

updateProfile();


console.log(
    "CineVerse Commit 11 loaded successfully."
);