/* =========================================================
   CINEVERSE - COMMIT 8
   ADVANCED SEARCH + FILTERING
   NO API / NO TMDB
   ========================================================= */

const movies = [
    {
        id: 1,
        title: "Beyond The Void",
        genre: "Sci-Fi",
        year: 2026,
        rating: "8.7",
        duration: "2h 18m",
        image: "https://images.unsplash.com/photo-1534791547706-9f5e3c5f1847?auto=format&fit=crop&w=900&q=85",
        description: "A deep-space mission discovers a mysterious signal beyond the known universe.",
        trailer: "https://www.youtube.com/embed/ScMzIvxBSi4"
    },

    {
        id: 2,
        title: "Dark Future",
        genre: "Action",
        year: 2025,
        rating: "8.4",
        duration: "2h 05m",
        image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85",
        description: "A soldier enters a future ruled by machines and fights to restore humanity.",
        trailer: "https://www.youtube.com/embed/ScMzIvxBSi4"
    },

    {
        id: 3,
        title: "Lost Galaxy",
        genre: "Sci-Fi",
        year: 2025,
        rating: "9.0",
        duration: "2h 25m",
        image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=900&q=85",
        description: "A crew searches for a lost civilization hidden inside a distant galaxy.",
        trailer: "https://www.youtube.com/embed/ScMzIvxBSi4"
    },

    {
        id: 4,
        title: "Night City",
        genre: "Thriller",
        year: 2026,
        rating: "8.2",
        duration: "1h 58m",
        image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85",
        description: "A detective follows a mysterious trail through a city that never sleeps.",
        trailer: "https://www.youtube.com/embed/ScMzIvxBSi4"
    },

    {
        id: 5,
        title: "Final Mission",
        genre: "Action",
        year: 2024,
        rating: "8.1",
        duration: "2h 12m",
        image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=900&q=85",
        description: "One final mission stands between a special forces team and global disaster.",
        trailer: "https://www.youtube.com/embed/ScMzIvxBSi4"
    },

    {
        id: 6,
        title: "Cyber World",
        genre: "Technology",
        year: 2026,
        rating: "8.8",
        duration: "2h 10m",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85",
        description: "A hacker discovers a digital world hidden beneath the modern internet.",
        trailer: "https://www.youtube.com/embed/ScMzIvxBSi4"
    },

    {
        id: 7,
        title: "Shadow Protocol",
        genre: "Thriller",
        year: 2025,
        rating: "8.6",
        duration: "2h 02m",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=900&q=85",
        description: "An intelligence agent uncovers a secret protocol capable of changing the world.",
        trailer: "https://www.youtube.com/embed/ScMzIvxBSi4"
    },

    {
        id: 8,
        title: "Future Earth",
        genre: "Adventure",
        year: 2027,
        rating: "8.9",
        duration: "2h 30m",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85",
        description: "Humanity returns to Earth after decades away to rebuild civilization.",
        trailer: "https://www.youtube.com/embed/ScMzIvxBSi4"
    },

    {
        id: 9,
        title: "The Unknown",
        genre: "Mystery",
        year: 2025,
        rating: "8.3",
        duration: "1h 55m",
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85",
        description: "A mysterious disappearance reveals secrets buried for generations.",
        trailer: "https://www.youtube.com/embed/ScMzIvxBSi4"
    },

    {
        id: 10,
        title: "Infinity",
        genre: "Sci-Fi",
        year: 2026,
        rating: "9.1",
        duration: "2h 35m",
        image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=900&q=85",
        description: "A scientist discovers a way to cross the boundaries of time and space.",
        trailer: "https://www.youtube.com/embed/ScMzIvxBSi4"
    },

    {
        id: 11,
        title: "Last Code",
        genre: "Technology",
        year: 2025,
        rating: "8.5",
        duration: "2h 08m",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=85",
        description: "A programmer races against time after discovering the world's most dangerous code.",
        trailer: "https://www.youtube.com/embed/ScMzIvxBSi4"
    },

    {
        id: 12,
        title: "Silent Night",
        genre: "Horror",
        year: 2024,
        rating: "7.9",
        duration: "1h 48m",
        image: "https://images.unsplash.com/photo-1505635552518-3448f4b0d8f4?auto=format&fit=crop&w=900&q=85",
        description: "A quiet town faces a mysterious event that happens every midnight.",
        trailer: "https://www.youtube.com/embed/ScMzIvxBSi4"
    }
];


/* =========================================================
   LOCAL STORAGE
   ========================================================= */

const WATCHLIST_KEY = "cineverseWatchlist";
const CONTINUE_KEY = "cineverseContinueWatching";

let currentGenre = "All";
let currentSearch = "";


/* =========================================================
   STORAGE HELPERS
   ========================================================= */

function getWatchlist() {
    return JSON.parse(localStorage.getItem(WATCHLIST_KEY)) || [];
}

function saveWatchlist(list) {
    localStorage.setItem(WATCHLIST_KEY, JSON.stringify(list));
}

function getContinueWatching() {
    return JSON.parse(localStorage.getItem(CONTINUE_KEY)) || [];
}

function saveContinueWatching(list) {
    localStorage.setItem(CONTINUE_KEY, JSON.stringify(list));
}


/* =========================================================
   FILTER MOVIES
   ========================================================= */

function getFilteredMovies() {

    return movies.filter(movie => {

        const matchesGenre =
            currentGenre === "All" ||
            movie.genre === currentGenre;

        const searchText = currentSearch.toLowerCase().trim();

        const matchesSearch =
            movie.title.toLowerCase().includes(searchText) ||
            movie.genre.toLowerCase().includes(searchText) ||
            movie.description.toLowerCase().includes(searchText);

        return matchesGenre && matchesSearch;
    });
}


/* =========================================================
   MOVIE CARD
   ========================================================= */

function createMovieCard(movie) {

    return `
        <article class="movie-card"
                 data-id="${movie.id}"
                 onclick="openMovieModal(${movie.id})">

            <img
                src="${movie.image}"
                alt="${movie.title}"
                loading="lazy"
                onerror="this.style.display='none'"
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

        </article>
    `;
}


/* =========================================================
   RENDER MOVIES
   ========================================================= */

function renderMovies(list = getFilteredMovies()) {

    const containers = document.querySelectorAll(
        ".movie-grid, .movies-grid"
    );

    if (!containers.length) return;

    containers.forEach(container => {

        container.innerHTML = "";

        list.forEach(movie => {
            container.insertAdjacentHTML(
                "beforeend",
                createMovieCard(movie)
            );
        });

        if (!list.length) {

            container.innerHTML = `
                <div class="empty-state">
                    <div>
                        <h3>No movies found</h3>
                        <p>Try another search or genre.</p>
                    </div>
                </div>
            `;
        }
    });
}


/* =========================================================
   SEARCH
   ========================================================= */

function searchMovies(value) {

    currentSearch = value;

    const filtered = getFilteredMovies();

    renderMovies(filtered);
}


/* =========================================================
   GENRE FILTER
   ========================================================= */

function filterByGenre(genre) {

    currentGenre = genre;

    document.querySelectorAll(".filter-btn").forEach(button => {
        button.classList.remove("active");

        if (button.dataset.genre === genre) {
            button.classList.add("active");
        }
    });

    renderMovies();
}


/* =========================================================
   CREATE FILTER BUTTONS
   ========================================================= */

function createGenreFilters() {

    const container =
        document.querySelector(".filter-container");

    if (!container) return;

    const genres = [
        "All",
        ...new Set(movies.map(movie => movie.genre))
    ];

    container.innerHTML = "";

    genres.forEach(genre => {

        const button = document.createElement("button");

        button.className =
            `filter-btn ${genre === "All" ? "active" : ""}`;

        button.dataset.genre = genre;

        button.textContent = genre;

        button.addEventListener("click", () => {
            filterByGenre(genre);
        });

        container.appendChild(button);
    });
}


/* =========================================================
   MOVIE MODAL
   ========================================================= */

function openMovieModal(id) {

    const movie = movies.find(item => item.id === id);

    if (!movie) return;

    let modal = document.querySelector("#movieModal");

    if (!modal) {

        modal = document.createElement("div");

        modal.id = "movieModal";
        modal.className = "modal";

        document.body.appendChild(modal);
    }

    const watchlist = getWatchlist();

    const isSaved = watchlist.includes(movie.id);

    modal.innerHTML = `

        <div class="modal-content">

            <button
                class="modal-close"
                onclick="closeMovieModal()">
                ×
            </button>

            <iframe
                class="modal-video"
                src="${movie.trailer}"
                title="${movie.title} Trailer"
                allowfullscreen>
            </iframe>

            <div class="modal-body">

                <h2>${movie.title}</h2>

                <p style="margin-bottom:15px;">
                    ${movie.genre}
                    • ${movie.year}
                    • ${movie.duration}
                    • ⭐ ${movie.rating}
                </p>

                <p>
                    ${movie.description}
                </p>

                <div style="
                    display:flex;
                    gap:12px;
                    margin-top:25px;
                    flex-wrap:wrap;
                ">

                    <button
                        class="btn btn-primary"
                        onclick="toggleWatchlist(${movie.id})">

                        ${isSaved
                            ? "✓ Remove from My List"
                            : "+ Add to My List"}

                    </button>

                    <button
                        class="btn btn-secondary"
                        onclick="startWatching(${movie.id})">

                        ▶ Start Watching

                    </button>

                </div>

            </div>

        </div>
    `;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeMovieModal() {

    const modal = document.querySelector("#movieModal");

    if (!modal) return;

    modal.classList.remove("active");

    const iframe = modal.querySelector("iframe");

    if (iframe) {
        iframe.src = "";
    }

    document.body.style.overflow = "";
}


/* =========================================================
   WATCHLIST
   ========================================================= */

function toggleWatchlist(id) {

    let list = getWatchlist();

    if (list.includes(id)) {

        list = list.filter(movieId => movieId !== id);

        showToast("Removed from My List");

    } else {

        list.push(id);

        showToast("Added to My List");
    }

    saveWatchlist(list);

    renderWatchlist();

    openMovieModal(id);
}


function renderWatchlist() {

    const container =
        document.querySelector("#watchlistGrid");

    if (!container) return;

    const list = getWatchlist();

    const selectedMovies =
        movies.filter(movie => list.includes(movie.id));

    container.innerHTML = "";

    if (!selectedMovies.length) {

        container.innerHTML = `
            <div class="empty-state">
                <div>
                    <h3>Your list is empty</h3>
                    <p>Add movies to watch later.</p>
                </div>
            </div>
        `;

        return;
    }

    selectedMovies.forEach(movie => {

        container.insertAdjacentHTML(
            "beforeend",
            createMovieCard(movie)
        );
    });
}


/* =========================================================
   CONTINUE WATCHING
   ========================================================= */

function startWatching(id) {

    const movie = movies.find(item => item.id === id);

    if (!movie) return;

    let list = getContinueWatching();

    const existing =
        list.find(item => item.id === id);

    if (!existing) {

        list.push({
            id: id,
            progress: 5
        });

    } else {

        existing.progress =
            Math.min(existing.progress + 5, 95);
    }

    saveContinueWatching(list);

    renderContinueWatching();

    closeMovieModal();

    showToast(`Continuing ${movie.title}`);
}


function renderContinueWatching() {

    const container =
        document.querySelector("#continueGrid");

    if (!container) return;

    const list = getContinueWatching();

    container.innerHTML = "";

    if (!list.length) {

        container.innerHTML = `
            <div class="empty-state">
                <div>
                    <h3>No movies started yet</h3>
                    <p>Your progress will appear here.</p>
                </div>
            </div>
        `;

        return;
    }

    list.forEach(item => {

        const movie =
            movies.find(m => m.id === item.id);

        if (!movie) return;

        container.insertAdjacentHTML(
            "beforeend",

            `
            <article
                class="movie-card continue-card"
                onclick="openMovieModal(${movie.id})">

                <img
                    src="${movie.image}"
                    alt="${movie.title}"
                    onerror="this.style.display='none'"
                >

                <div class="movie-info">

                    <div class="movie-title">
                        ${movie.title}
                    </div>

                    <div class="movie-meta">
                        ${item.progress}% watched
                    </div>

                </div>

                <div class="progress-container">

                    <div
                        class="progress-bar"
                        style="width:${item.progress}%">
                    </div>

                </div>

            </article>
            `
        );
    });
}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

    let toast =
        document.querySelector("#cineToast");

    if (!toast) {

        toast = document.createElement("div");

        toast.id = "cineToast";

        toast.className = "toast";

        document.body.appendChild(toast);
    }

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(window.cineToastTimer);

    window.cineToastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2200);
}


/* =========================================================
   NAVIGATION
   ========================================================= */

function setupNavigation() {

    document.querySelectorAll("[data-scroll]").forEach(link => {

        link.addEventListener("click", event => {

            event.preventDefault();

            const target =
                document.querySelector(
                    link.dataset.scroll
                );

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
}


/* =========================================================
   SEARCH INPUT AUTO DETECTION
   ========================================================= */

function setupSearch() {

    const input =
        document.querySelector(
            "#movieSearch, .search-input"
        );

    if (!input) return;

    input.addEventListener("input", event => {

        searchMovies(event.target.value);
    });
}


/* =========================================================
   ESC KEY
   ========================================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeMovieModal();
    }
});


/* =========================================================
   MODAL BACKGROUND CLICK
   ========================================================= */

document.addEventListener("click", event => {

    if (event.target.classList.contains("modal")) {
        closeMovieModal();
    }
});


/* =========================================================
   IMAGE FALLBACK
   ========================================================= */

document.addEventListener("error", event => {

    if (
        event.target.tagName === "IMG" &&
        event.target.classList.contains("movie-image")
    ) {

        event.target.style.display = "none";
    }

}, true);


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    createGenreFilters();

    renderMovies();

    renderWatchlist();

    renderContinueWatching();

    setupSearch();

    setupNavigation();

    console.log(
        "CineVerse loaded successfully."
    );

});