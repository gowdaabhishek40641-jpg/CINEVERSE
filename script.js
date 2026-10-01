document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       CINEVERSE DATABASE
    ========================================================= */

    const movies = {

        "Beyond The Void": {
            title: "Beyond The Void",
            genre: "Sci-Fi",
            type: "Movie",
            year: 2026,
            duration: "2h 08m",
            durationMinutes: 128,
            description:
                "A deep-space expedition discovers a mysterious signal beyond the known universe.",
            image:
                "https://images.unsplash.com/photo-1446776877081-d282a0f896e2",
            trailer:
                "https://www.youtube.com/embed/ScMzIvxBSi4"
        },

        "Lost Galaxy": {
            title: "Lost Galaxy",
            genre: "Adventure",
            type: "Movie",
            year: 2025,
            duration: "1h 56m",
            durationMinutes: 116,
            description:
                "A stranded crew searches for a forgotten civilization hidden inside a distant galaxy.",
            image:
                "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
            trailer:
                "https://www.youtube.com/embed/ScMzIvxBSi4"
        },

        "Dark Future": {
            title: "Dark Future",
            genre: "Action",
            type: "Movie",
            year: 2026,
            duration: "2h 14m",
            durationMinutes: 134,
            description:
                "In a controlled future city, one hacker discovers the truth behind artificial intelligence.",
            image:
                "https://images.unsplash.com/photo-1519608487953-e999c86e7455",
            trailer:
                "https://www.youtube.com/embed/ScMzIvxBSi4"
        },

        "Last Mission": {
            title: "Last Mission",
            genre: "Action",
            type: "Movie",
            year: 2024,
            duration: "1h 49m",
            durationMinutes: 109,
            description:
                "An elite operative receives one final mission that changes everything.",
            image:
                "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986",
            trailer:
                "https://www.youtube.com/embed/ScMzIvxBSi4"
        },

        "Cyber World": {
            title: "Cyber World",
            genre: "Cyberpunk",
            type: "Series",
            year: 2026,
            duration: "8 Episodes",
            durationMinutes: 420,
            description:
                "A futuristic cyber city hides a dangerous digital conspiracy.",
            image:
                "https://images.unsplash.com/photo-1519608487953-e999c86e7455",
            trailer:
                "https://www.youtube.com/embed/ScMzIvxBSi4"
        },

        "Infinity": {
            title: "Infinity",
            genre: "Sci-Fi",
            type: "Series",
            year: 2025,
            duration: "10 Episodes",
            durationMinutes: 500,
            description:
                "Scientists attempt to understand a mysterious force that could reshape reality.",
            image:
                "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3",
            trailer:
                "https://www.youtube.com/embed/ScMzIvxBSi4"
        },

        "Night City": {
            title: "Night City",
            genre: "Crime",
            type: "Series",
            year: 2026,
            duration: "12 Episodes",
            durationMinutes: 600,
            description:
                "A detective enters the darkest parts of a futuristic city.",
            image:
                "https://images.unsplash.com/photo-1519501025264-65ba15a82390",
            trailer:
                "https://www.youtube.com/embed/ScMzIvxBSi4"
        },

        "Space Journey": {
            title: "Space Journey",
            genre: "Adventure",
            type: "Movie",
            year: 2023,
            duration: "2h 01m",
            durationMinutes: 121,
            description:
                "A crew travels across unexplored space looking for a new home.",
            image:
                "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
            trailer:
                "https://www.youtube.com/embed/ScMzIvxBSi4"
        },

        "Final Code": {
            title: "Final Code",
            genre: "Technology",
            type: "Movie",
            year: 2026,
            duration: "1h 58m",
            durationMinutes: 118,
            description:
                "A programmer discovers a hidden code capable of controlling global infrastructure.",
            image:
                "https://images.unsplash.com/photo-1518770660439-4636190af475",
            trailer:
                "https://www.youtube.com/embed/ScMzIvxBSi4"
        },

        "Shadow": {
            title: "Shadow",
            genre: "Thriller",
            type: "Movie",
            year: 2024,
            duration: "1h 42m",
            durationMinutes: 102,
            description:
                "A mysterious stranger becomes connected to a series of unexplained events.",
            image:
                "https://images.unsplash.com/photo-1519681393784-d120267933ba",
            trailer:
                "https://www.youtube.com/embed/ScMzIvxBSi4"
        },

        "Dark Protocol": {
            title: "Dark Protocol",
            genre: "Cyberpunk",
            type: "Series",
            year: 2026,
            duration: "9 Episodes",
            durationMinutes: 450,
            description:
                "A secret digital protocol threatens to bring down the global network.",
            image:
                "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
            trailer:
                "https://www.youtube.com/embed/ScMzIvxBSi4"
        },

        "The Unknown": {
            title: "The Unknown",
            genre: "Mystery",
            type: "Movie",
            year: 2025,
            duration: "1h 52m",
            durationMinutes: 112,
            description:
                "A group of explorers finds something that was never supposed to be discovered.",
            image:
                "https://images.unsplash.com/photo-1534447677768-be436bb09401",
            trailer:
                "https://www.youtube.com/embed/ScMzIvxBSi4"
        },

        "Future Earth": {
            title: "Future Earth",
            genre: "Sci-Fi",
            type: "Movie",
            year: 2026,
            duration: "2h 12m",
            durationMinutes: 132,
            description:
                "Humanity attempts to rebuild civilization after a global technological collapse.",
            image:
                "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
            trailer:
                "https://www.youtube.com/embed/ScMzIvxBSi4"
        }
    };


    /* =========================================================
       STORAGE
    ========================================================= */

    let watchlist = JSON.parse(
        localStorage.getItem("cineverseWatchlist") || "[]"
    );

    let continueWatching = JSON.parse(
        localStorage.getItem("cineverseContinueWatching") || "{}"
    );


    function saveWatchlist() {

        localStorage.setItem(
            "cineverseWatchlist",
            JSON.stringify(watchlist)
        );
    }


    function saveContinueWatching() {

        localStorage.setItem(
            "cineverseContinueWatching",
            JSON.stringify(continueWatching)
        );
    }


    /* =========================================================
       TOAST
    ========================================================= */

    function showToast(message) {

        let toast = document.getElementById("cineverseToast");

        if (!toast) {

            toast = document.createElement("div");

            toast.id = "cineverseToast";

            document.body.appendChild(toast);
        }

        toast.textContent = message;

        toast.classList.add("show");

        clearTimeout(window.cineverseToastTimer);

        window.cineverseToastTimer = setTimeout(() => {

            toast.classList.remove("show");

        }, 2200);
    }


    window.showToast = showToast;


    /* =========================================================
       WATCHLIST
    ========================================================= */

    window.addToWatchlist = function(movieName) {

        if (!movies[movieName]) return;

        if (!watchlist.includes(movieName)) {

            watchlist.push(movieName);

            saveWatchlist();

            showToast(`❤️ ${movieName} added to My List`);

        } else {

            showToast(`✓ ${movieName} is already in My List`);
        }

        renderWatchlist();
    };


    window.removeFromWatchlist = function(movieName) {

        watchlist = watchlist.filter(
            item => item !== movieName
        );

        saveWatchlist();

        renderWatchlist();

        showToast(`Removed ${movieName} from My List`);
    };


    function renderWatchlist() {

        const container =
            document.getElementById("watchlistItems");

        if (!container) return;


        if (watchlist.length === 0) {

            container.innerHTML = `
                <div class="empty-watchlist">

                    <div class="empty-icon">♡</div>

                    <h3>Your List Is Empty</h3>

                    <p>
                        Add movies and series to watch them later.
                    </p>

                </div>
            `;

            return;
        }


        container.innerHTML = watchlist.map(movieName => {

            const movie = movies[movieName];

            if (!movie) return "";


            return `
                <article class="movie-card advanced-watch-card">

                    <div class="movie-image-wrapper">

                        <img
                            src="${movie.image}"
                            alt="${movie.title}"
                            loading="lazy"
                        >

                        <div class="movie-overlay">

                            <button
                                class="watch-btn"
                                onclick="playMovie('${movie.title}')"
                            >
                                ▶ Watch
                            </button>

                            <button
                                class="remove-btn"
                                onclick="removeFromWatchlist('${movie.title}')"
                            >
                                Remove
                            </button>

                        </div>

                    </div>


                    <div class="movie-info">

                        <h3>${movie.title}</h3>

                        <p>
                            ${movie.genre}
                            •
                            ${movie.year}
                        </p>

                    </div>

                </article>
            `;

        }).join("");
    }


    /* =========================================================
       CONTINUE WATCHING
    ========================================================= */

    function addContinueWatching(movieName, progress = null) {

        const movie = movies[movieName];

        if (!movie) return;


        if (progress === null) {

            progress = continueWatching[movieName]?.progress || 8;
        }


        progress = Math.min(
            Math.max(Number(progress), 0),
            99
        );


        continueWatching[movieName] = {

            title: movieName,

            progress: progress,

            lastWatched: Date.now(),

            image: movie.image,

            duration: movie.duration,

            genre: movie.genre

        };


        saveContinueWatching();

        renderContinueWatching();
    }


    window.removeContinueWatching = function(movieName) {

        delete continueWatching[movieName];

        saveContinueWatching();

        renderContinueWatching();

        showToast(`${movieName} removed from Continue Watching`);
    };


    window.resumeMovie = function(movieName) {

        if (!movies[movieName]) return;

        const saved =
            continueWatching[movieName];

        const currentProgress =
            saved?.progress || 5;


        openMovieModal(
            movieName,
            currentProgress
        );
    };


    function renderContinueWatching() {

        const container =
            document.getElementById("continueWatchingItems");

        if (!container) return;


        const items =
            Object.values(continueWatching)
                .sort(
                    (a, b) =>
                        b.lastWatched - a.lastWatched
                );


        if (items.length === 0) {

            container.innerHTML = `
                <div class="continue-empty">

                    <div class="continue-empty-icon">
                        ▶
                    </div>

                    <h3>
                        Nothing To Continue
                    </h3>

                    <p>
                        Start watching something and your
                        progress will appear here.
                    </p>

                </div>
            `;

            return;
        }


        container.innerHTML = items.map(item => {

            const movie = movies[item.title];

            if (!movie) return "";


            return `
                <article
                    class="continue-card"
                    data-movie="${movie.title}"
                >

                    <div class="continue-image">

                        <img
                            src="${movie.image}"
                            alt="${movie.title}"
                            loading="lazy"
                        >

                        <button
                            class="continue-play"
                            onclick="resumeMovie('${movie.title}')"
                            aria-label="Resume ${movie.title}"
                        >
                            ▶
                        </button>

                        <div
                            class="continue-progress"
                            style="width:${item.progress}%"
                        ></div>

                    </div>


                    <div class="continue-info">

                        <div class="continue-heading">

                            <h3>
                                ${movie.title}
                            </h3>

                            <button
                                class="continue-remove"
                                onclick="removeContinueWatching('${movie.title}')"
                                title="Remove"
                            >
                                ×
                            </button>

                        </div>


                        <p>
                            ${movie.genre}
                            •
                            ${movie.year}
                        </p>


                        <div class="continue-meta">

                            <span>
                                ${item.progress}% watched
                            </span>

                            <span>
                                ${movie.duration}
                            </span>

                        </div>


                        <button
                            class="continue-resume"
                            onclick="resumeMovie('${movie.title}')"
                        >
                            ▶ Continue Watching
                        </button>

                    </div>

                </article>
            `;

        }).join("");
    }


    /* =========================================================
       MOVIE MODAL
    ========================================================= */

    let currentMovie = null;


    function createMovieModal() {

        if (document.getElementById("movieModal")) {
            return;
        }


        const modal = document.createElement("div");

        modal.id = "movieModal";

        modal.innerHTML = `

            <div class="movie-modal-backdrop"></div>

            <div
                class="movie-modal"
                role="dialog"
                aria-modal="true"
            >

                <button
                    class="movie-modal-close"
                    id="movieModalClose"
                    aria-label="Close"
                >
                    ×
                </button>


                <div class="movie-player">

                    <div
                        class="movie-player-loader"
                        id="moviePlayerLoader"
                    >
                        <div class="movie-spinner"></div>
                        <span>Loading...</span>
                    </div>


                    <iframe
                        id="movieTrailer"
                        src=""
                        title="CineVerse Trailer"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowfullscreen
                    ></iframe>

                </div>


                <div class="movie-modal-content">

                    <div class="movie-modal-top">

                        <div>

                            <span
                                class="modal-label"
                                id="modalType"
                            >
                                MOVIE
                            </span>

                            <h2 id="modalTitle">
                                Movie Title
                            </h2>

                        </div>

                    </div>


                    <div
                        class="movie-modal-meta"
                        id="modalMeta"
                    ></div>


                    <p
                        class="movie-modal-description"
                        id="modalDescription"
                    ></p>


                    <div class="modal-progress-area">

                        <div class="modal-progress-header">

                            <span>
                                Your Progress
                            </span>

                            <strong
                                id="modalProgressText"
                            >
                                0%
                            </strong>

                        </div>


                        <input
                            type="range"
                            id="movieProgress"
                            min="0"
                            max="99"
                            value="0"
                        >

                    </div>


                    <div class="movie-modal-actions">

                        <button
                            class="modal-watch-btn"
                            id="modalWatchButton"
                        >
                            ▶ Watch / Resume
                        </button>

                        <button
                            class="modal-list-btn"
                            id="modalListButton"
                        >
                            + My List
                        </button>

                    </div>

                </div>

            </div>
        `;


        document.body.appendChild(modal);


        document
            .getElementById("movieModalClose")
            .addEventListener(
                "click",
                closeMovieModal
            );


        document
            .querySelector(".movie-modal-backdrop")
            .addEventListener(
                "click",
                closeMovieModal
            );


        document
            .getElementById("movieProgress")
            .addEventListener(
                "input",
                updateModalProgress
            );


        document
            .getElementById("modalWatchButton")
            .addEventListener(
                "click",
                () => {

                    if (!currentMovie) return;

                    const slider =
                        document.getElementById(
                            "movieProgress"
                        );

                    addContinueWatching(
                        currentMovie,
                        Number(slider.value)
                    );

                    showToast(
                        `▶ Resuming ${currentMovie}`
                    );
                }
            );


        document
            .getElementById("modalListButton")
            .addEventListener(
                "click",
                () => {

                    if (!currentMovie) return;

                    addToWatchlist(currentMovie);
                }
            );
    }


    function updateModalProgress(event) {

        const value =
            Number(event.target.value);


        document.getElementById(
            "modalProgressText"
        ).textContent = `${value}%`;


        if (currentMovie) {

            continueWatching[currentMovie] = {

                ...(continueWatching[currentMovie] || {}),

                title: currentMovie,

                progress: value,

                lastWatched: Date.now(),

                image: movies[currentMovie].image,

                duration: movies[currentMovie].duration,

                genre: movies[currentMovie].genre
            };


            saveContinueWatching();

            renderContinueWatching();
        }
    }


    function openMovieModal(movieName, progress = null) {

        const movie = movies[movieName];

        if (!movie) {

            showToast("Movie information not found");

            return;
        }


        createMovieModal();

        currentMovie = movieName;


        const modal =
            document.getElementById("movieModal");


        const iframe =
            document.getElementById("movieTrailer");


        const loader =
            document.getElementById("moviePlayerLoader");


        const saved =
            continueWatching[movieName];


        const currentProgress =
            progress !== null
                ? progress
                : saved?.progress || 0;


        document.getElementById(
            "modalTitle"
        ).textContent = movie.title;


        document.getElementById(
            "modalType"
        ).textContent = movie.type;


        document.getElementById(
            "modalMeta"
        ).innerHTML = `
            <span>${movie.genre}</span>
            <span>${movie.year}</span>
            <span>${movie.duration}</span>
        `;


        document.getElementById(
            "modalDescription"
        ).textContent =
            movie.description;


        const progressSlider =
            document.getElementById(
                "movieProgress"
            );


        progressSlider.value =
            currentProgress;


        document.getElementById(
            "modalProgressText"
        ).textContent =
            `${currentProgress}%`;


        loader.classList.remove("hidden");


        iframe.onload = () => {

            loader.classList.add("hidden");

        };


        iframe.src =
            `${movie.trailer}?autoplay=1&rel=0`;


        modal.classList.add("show");

        document.body.classList.add(
            "modal-open"
        );


        addContinueWatching(
            movieName,
            currentProgress || 1
        );
    }


    function closeMovieModal() {

        const modal =
            document.getElementById("movieModal");


        const iframe =
            document.getElementById("movieTrailer");


        if (!modal) return;


        modal.classList.remove("show");

        document.body.classList.remove(
            "modal-open"
        );


        if (iframe) {

            iframe.src = "";
        }


        currentMovie = null;
    }


    window.playMovie = function(movieName) {

        openMovieModal(movieName);
    };


    /* =========================================================
       ESCAPE KEY
    ========================================================= */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                document.getElementById("movieModal")
            ) {

                closeMovieModal();
            }

        }
    );


    /* =========================================================
       THEME
    ========================================================= */

    const themeButton =
        document.getElementById("themeToggle");


    if (themeButton) {

        const savedTheme =
            localStorage.getItem(
                "cineverseTheme"
            );


        if (savedTheme === "light") {

            document.body.classList.add(
                "light-theme"
            );
        }


        themeButton.addEventListener(
            "click",
            () => {

                document.body.classList.toggle(
                    "light-theme"
                );


                const isLight =
                    document.body.classList.contains(
                        "light-theme"
                    );


                localStorage.setItem(
                    "cineverseTheme",
                    isLight
                        ? "light"
                        : "dark"
                );
            }
        );
    }


    /* =========================================================
       NAVBAR SCROLL
    ========================================================= */

    const navbar =
        document.querySelector(".navbar");


    window.addEventListener(
        "scroll",
        () => {

            if (!navbar) return;


            navbar.classList.toggle(
                "scrolled",
                window.scrollY > 40
            );

        }
    );


    /* =========================================================
       REVEAL ANIMATIONS
    ========================================================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "active"
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            element =>
                observer.observe(element)
        );
    } else {

        revealElements.forEach(
            element =>
                element.classList.add("active")
        );
    }


    /* =========================================================
       3D CARD EFFECT
    ========================================================= */

    document
        .querySelectorAll(".movie-card")
        .forEach(card => {

            card.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        card.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left;


                    const y =
                        event.clientY -
                        rect.top;


                    const rotateX =
                        ((y / rect.height) - 0.5) * -6;


                    const rotateY =
                        ((x / rect.width) - 0.5) * 6;


                    card.style.transform =
                        `perspective(900px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)
                         translateY(-6px)`;
                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform = "";
                }
            );

        });


    /* =========================================================
       SMOOTH NAVIGATION
    ========================================================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute("href");


                    if (
                        !targetId ||
                        targetId === "#"
                    ) return;


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) return;


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            );
        });


    /* =========================================================
       IMAGE FALLBACK
    ========================================================= */

    document
        .querySelectorAll("img")
        .forEach(img => {

            img.addEventListener(
                "error",
                () => {

                    img.style.background =
                        "linear-gradient(135deg,#111,#222)";

                    img.removeAttribute("src");
                }
            );

        });


    /* =========================================================
       CREATE CONTINUE WATCHING SECTION
       ONLY IF IT DOES NOT ALREADY EXIST
    ========================================================= */

    function createContinueWatchingSection() {

        if (
            document.getElementById(
                "continueWatchingSection"
            )
        ) {
            return;
        }


        const watchlistSection =
            document.getElementById(
                "watchlistItems"
            )?.closest("section");


        if (!watchlistSection) return;


        const section =
            document.createElement("section");


        section.id =
            "continueWatchingSection";


        section.className =
            "content-section reveal";


        section.innerHTML = `

            <div class="section-header">

                <div>

                    <span class="section-kicker">
                        KEEP WATCHING
                    </span>

                    <h2>
                        Continue Watching
                    </h2>

                </div>

                <span
                    class="continue-live-indicator"
                >
                    ● LIVE PROGRESS
                </span>

            </div>


            <div
                id="continueWatchingItems"
                class="continue-grid"
            ></div>

        `;


        watchlistSection.parentNode.insertBefore(
            section,
            watchlistSection
        );
    }


    /* =========================================================
       INITIALIZE
    ========================================================= */

    createContinueWatchingSection();

    renderWatchlist();

    renderContinueWatching();

});