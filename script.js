"use strict";

/* =========================================================
   CINEVERSE — COMMIT 5
   MOVIE DETAILS + CINEMATIC PLAYER
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("🎬 CineVerse Commit 5 started");


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const preloader =
        document.getElementById("preloader");

    const themeButton =
        document.getElementById("themeBtn");

    const navbar =
        document.querySelector(".navbar");

    const watchlistContainer =
        document.getElementById("watchlistItems");


    /* =====================================================
       MOVIE DATABASE
    ===================================================== */

    const movies = {

        "Beyond The Void": {
            title: "Beyond The Void",
            genre: "Sci-Fi",
            year: "2026",
            duration: "2h 18m",
            description:
                "A mysterious journey beyond the limits of known space begins when a forgotten signal reaches Earth.",
            image:
                "https://images.unsplash.com/photo-1446776877081-d282a0f896e2",
            trailer:
                "https://www.youtube.com/embed/ScMzIvxBSi4"
        },

        "Lost Galaxy": {
            title: "Lost Galaxy",
            genre: "Sci-Fi",
            year: "2026",
            duration: "1h 48m",
            description:
                "A deep-space crew discovers an abandoned galaxy hiding a dangerous secret.",
            image:
                "https://images.unsplash.com/photo-1485846234645-a62644f84728",
            trailer:
                "https://www.youtube.com/embed/ScMzIvxBSi4"
        },

        "Dark Future": {
            title: "Dark Future",
            genre: "Series",
            year: "2026",
            duration: "S1 • E4",
            description:
                "In a surveillance-driven future, one hacker discovers a secret capable of changing civilization.",
            image:
                "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
            trailer:
                "https://www.youtube.com/embed/ScMzIvxBSi4"
        },

        "Last Mission": {
            title: "Last Mission",
            genre: "Action",
            year: "2026",
            duration: "2h 05m",
            description:
                "One final mission. One impossible decision. A former agent returns for a dangerous rescue.",
            image:
                "https://images.unsplash.com/photo-1440404653325-ab127d49abc1",
            trailer:
                "https://www.youtube.com/embed/ScMzIvxBSi4"
        },

        "Cyber World": {
            title: "Cyber World",
            genre: "Action",
            year: "2026",
            duration: "2h 02m",
            description:
                "A digital city becomes the battlefield between a rogue AI and the last human resistance.",
            image:
                "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
            trailer:
                "https://www.youtube.com/embed/ScMzIvxBSi4"
        },

        "Infinity": {
            title: "Infinity",
            genre: "Sci-Fi",
            year: "2026",
            duration: "2h 12m",
            description:
                "Scientists discover a portal that may connect humanity to an infinite number of realities.",
            image:
                "https://images.unsplash.com/photo-1500534623283-312aade485b7",
            trailer:
                "https://www.youtube.com/embed/ScMzIvxBSi4"
        },

        "Night City": {
            title: "Night City",
            genre: "Thriller",
            year: "2026",
            duration: "1h 58m",
            description:
                "A detective enters a futuristic city where every shadow hides a secret.",
            image:
                "https://images.unsplash.com/photo-1485230405346-71acb9518d9c",
            trailer:
                "https://www.youtube.com/embed/ScMzIvxBSi4"
        },

        "Space Journey": {
            title: "Space Journey",
            genre: "Sci-Fi",
            year: "2026",
            duration: "2h 10m",
            description:
                "A crew travels beyond the solar system in search of a new home for humanity.",
            image:
                "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4",
            trailer:
                "https://www.youtube.com/embed/ScMzIvxBSi4"
        },

        "Final Code": {
            title: "Final Code",
            genre: "Action",
            year: "2026",
            duration: "1h 55m",
            description:
                "A cybersecurity specialist races against time to stop a global digital attack.",
            image:
                "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
            trailer:
                "https://www.youtube.com/embed/ScMzIvxBSi4"
        },

        "Shadow": {
            title: "Shadow",
            genre: "Thriller",
            year: "2026",
            duration: "2h",
            description:
                "A mysterious figure begins appearing at crime scenes before the crimes even happen.",
            image:
                "https://images.unsplash.com/photo-1542206395-9feb3edaa68d",
            trailer:
                "https://www.youtube.com/embed/ScMzIvxBSi4"
        },

        "Dark Protocol": {
            title: "Dark Protocol",
            genre: "Series",
            year: "2026",
            duration: "2 Seasons",
            description:
                "A secret intelligence program resurfaces and threatens to expose the world's hidden networks.",
            image:
                "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85",
            trailer:
                "https://www.youtube.com/embed/ScMzIvxBSi4"
        },

        "The Unknown": {
            title: "The Unknown",
            genre: "Mystery",
            year: "2026",
            duration: "1 Season",
            description:
                "A group of strangers wake up in an unknown facility with no memory of how they arrived.",
            image:
                "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0",
            trailer:
                "https://www.youtube.com/embed/ScMzIvxBSi4"
        },

        "Future Earth": {
            title: "Future Earth",
            genre: "Series",
            year: "2026",
            duration: "3 Seasons",
            description:
                "Humanity rebuilds civilization on a transformed Earth after a global environmental collapse.",
            image:
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            trailer:
                "https://www.youtube.com/embed/ScMzIvxBSi4"
        }

    };


    /* =====================================================
       PRELOADER
    ===================================================== */

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (preloader) {
                preloader.classList.add("hide");
            }

        }, 700);

    });


    /* =====================================================
       CREATE MOVIE MODAL
    ===================================================== */

    function createMovieModal() {

        if (document.getElementById("movieModal")) {
            return;
        }

        const modal =
            document.createElement("div");

        modal.id = "movieModal";

        modal.innerHTML = `

            <div class="movie-modal-backdrop"></div>

            <div class="movie-modal">

                <button
                    type="button"
                    class="movie-modal-close"
                    id="movieModalClose"
                    aria-label="Close"
                >
                    ×
                </button>

                <div class="movie-modal-player">

                    <div
                        class="player-loader"
                        id="playerLoader"
                    >
                        <div class="player-spinner"></div>
                        <span>Loading trailer...</span>
                    </div>

                    <iframe
                        id="movieTrailer"
                        src=""
                        title="CineVerse Trailer"
                        frameborder="0"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowfullscreen
                    ></iframe>

                </div>

                <div class="movie-modal-content">

                    <div class="movie-modal-meta">

                        <span id="modalGenre">
                            Sci-Fi
                        </span>

                        <span id="modalYear">
                            2026
                        </span>

                        <span id="modalDuration">
                            2h
                        </span>

                    </div>

                    <h2 id="modalTitle">
                        Movie Title
                    </h2>

                    <p id="modalDescription">
                        Movie description.
                    </p>

                    <div class="movie-modal-actions">

                        <button
                            type="button"
                            id="modalPlayButton"
                            class="modal-play"
                        >
                            ▶ Watch Trailer
                        </button>

                        <button
                            type="button"
                            id="modalListButton"
                            class="modal-list"
                        >
                            + My List
                        </button>

                    </div>

                </div>

            </div>
        `;

        document.body.appendChild(modal);


        /* Close button */

        const closeButton =
            document.getElementById(
                "movieModalClose"
            );

        closeButton.addEventListener(
            "click",
            closeMovieModal
        );


        /* Backdrop */

        const backdrop =
            modal.querySelector(
                ".movie-modal-backdrop"
            );

        backdrop.addEventListener(
            "click",
            closeMovieModal
        );


        /* ESC */

        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Escape" &&
                    modal.classList.contains("active")
                ) {

                    closeMovieModal();

                }

            }
        );

    }


    /* =====================================================
       OPEN MOVIE
    ===================================================== */

    function openMovieModal(movieName) {

        const movie =
            movies[movieName];

        if (!movie) {

            console.warn(
                "Movie not found:",
                movieName
            );

            return;

        }


        createMovieModal();


        const modal =
            document.getElementById(
                "movieModal"
            );

        const title =
            document.getElementById(
                "modalTitle"
            );

        const genre =
            document.getElementById(
                "modalGenre"
            );

        const year =
            document.getElementById(
                "modalYear"
            );

        const duration =
            document.getElementById(
                "modalDuration"
            );

        const description =
            document.getElementById(
                "modalDescription"
            );

        const trailer =
            document.getElementById(
                "movieTrailer"
            );

        const loader =
            document.getElementById(
                "playerLoader"
            );

        const listButton =
            document.getElementById(
                "modalListButton"
            );


        title.textContent =
            movie.title;

        genre.textContent =
            movie.genre;

        year.textContent =
            movie.year;

        duration.textContent =
            movie.duration;

        description.textContent =
            movie.description;


        loader.classList.remove(
            "hidden"
        );

        trailer.classList.remove(
            "loaded"
        );


        trailer.src =
            movie.trailer +
            "?autoplay=1&rel=0";


        trailer.onload = () => {

            loader.classList.add(
                "hidden"
            );

            trailer.classList.add(
                "loaded"
            );

        };


        listButton.onclick = () => {

            addToWatchlist(
                movie.title
            );

        };


        modal.classList.add(
            "active"
        );


        document.body.classList.add(
            "modal-open"
        );


        setTimeout(() => {

            modal
                .querySelector(".movie-modal")
                ?.classList.add("show");

        }, 20);

    }


    /* =====================================================
       CLOSE MOVIE MODAL
    ===================================================== */

    function closeMovieModal() {

        const modal =
            document.getElementById(
                "movieModal"
            );

        if (!modal) {
            return;
        }


        const trailer =
            document.getElementById(
                "movieTrailer"
            );


        modal
            .querySelector(".movie-modal")
            ?.classList.remove("show");


        setTimeout(() => {

            modal.classList.remove(
                "active"
            );

            document.body.classList.remove(
                "modal-open"
            );


            if (trailer) {
                trailer.src = "";
            }

        }, 300);

    }


    /* =====================================================
       GLOBAL PLAY FUNCTION
    ===================================================== */

    window.playMovie = function(movieName) {

        openMovieModal(movieName);

    };


    /* =====================================================
       WATCHLIST
    ===================================================== */

    let watchlist = [];

    try {

        const saved =
            localStorage.getItem(
                "cineverseWatchlist"
            );

        if (saved) {

            const parsed =
                JSON.parse(saved);

            if (Array.isArray(parsed)) {
                watchlist = parsed;
            }

        }

    } catch (error) {

        console.error(
            "Watchlist error:",
            error
        );

    }


    function saveWatchlist() {

        localStorage.setItem(
            "cineverseWatchlist",
            JSON.stringify(watchlist)
        );

    }


    window.addToWatchlist = function(movieName) {

        if (!movieName) {
            return;
        }


        if (
            watchlist.some(
                movie =>
                    movie.toLowerCase() ===
                    movieName.toLowerCase()
            )
        ) {

            showToast(
                `"${movieName}" is already in My List`
            );

            return;

        }


        watchlist.push(movieName);

        saveWatchlist();

        displayWatchlist();

        showToast(
            `"${movieName}" added to My List ✓`
        );

    };


    window.removeFromWatchlist =
        function(index) {

            if (
                index < 0 ||
                index >= watchlist.length
            ) {
                return;
            }


            watchlist.splice(
                index,
                1
            );

            saveWatchlist();

            displayWatchlist();

            showToast(
                "Removed from My List"
            );

        };


    function displayWatchlist() {

        if (!watchlistContainer) {
            return;
        }


        watchlistContainer.innerHTML = "";


        if (watchlist.length === 0) {

            watchlistContainer.innerHTML =
                `
                <p class="empty">
                    Your watchlist is empty.
                </p>
                `;

            return;

        }


        const grid =
            document.createElement("div");

        grid.className =
            "movie-container";


        watchlist.forEach(
            (movieName, index) => {

                const card =
                    document.createElement(
                        "div"
                    );

                card.className =
                    "movie-card";


                card.innerHTML = `

                    <div class="image-wrapper">

                        <img
                            src="${movies[movieName]?.image || "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"}"
                            alt="${movieName}"
                        >

                        <div class="image-overlay">
                            ▶
                        </div>

                    </div>

                    <div class="movie-info">

                        <h3>
                            ${movieName}
                        </h3>

                        <p>
                            Saved to My List
                        </p>

                        <button
                            type="button"
                            class="watch-button"
                        >
                            Watch
                        </button>

                        <button
                            type="button"
                            class="remove-button"
                        >
                            Remove
                        </button>

                    </div>

                `;


                const watchButton =
                    card.querySelector(
                        ".watch-button"
                    );


                const removeButton =
                    card.querySelector(
                        ".remove-button"
                    );


                watchButton.addEventListener(
                    "click",
                    () => {

                        openMovieModal(
                            movieName
                        );

                    }
                );


                removeButton.addEventListener(
                    "click",
                    () => {

                        removeFromWatchlist(
                            index
                        );

                    }
                );


                grid.appendChild(card);

            }
        );


        watchlistContainer.appendChild(
            grid
        );

    }


    /* =====================================================
       TOAST
    ===================================================== */

    function showToast(message) {

        let toast =
            document.getElementById(
                "cineverseToast"
            );


        if (!toast) {

            toast =
                document.createElement(
                    "div"
                );

            toast.id =
                "cineverseToast";

            document.body.appendChild(
                toast
            );

        }


        toast.textContent =
            message;


        toast.classList.add(
            "show"
        );


        clearTimeout(
            toast.timer
        );


        toast.timer =
            setTimeout(() => {

                toast.classList.remove(
                    "show"
                );

            }, 2800);

    }


    /* =====================================================
       THEME
    ===================================================== */

    function applyTheme(theme) {

        if (theme === "light") {

            document.body.classList.add(
                "light-theme"
            );

            if (themeButton) {
                themeButton.textContent =
                    "☀️";
            }

        } else {

            document.body.classList.remove(
                "light-theme"
            );

            if (themeButton) {
                themeButton.textContent =
                    "🌙";
            }

        }

    }


    const savedTheme =
        localStorage.getItem(
            "cineverseTheme"
        ) || "dark";


    applyTheme(savedTheme);


    if (themeButton) {

        themeButton.addEventListener(
            "click",
            () => {

                const light =
                    document.body.classList.contains(
                        "light-theme"
                    );


                const newTheme =
                    light
                        ? "dark"
                        : "light";


                applyTheme(
                    newTheme
                );


                localStorage.setItem(
                    "cineverseTheme",
                    newTheme
                );

            }
        );

    }


    /* =====================================================
       NAVBAR
    ===================================================== */

    function updateNavbar() {

        if (!navbar) {
            return;
        }


        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(0,0,0,0.96)";

            navbar.style.boxShadow =
                "0 10px 40px rgba(0,0,0,0.45)";

        } else {

            navbar.style.background =
                "rgba(0,0,0,0.75)";

            navbar.style.boxShadow =
                "none";

        }

    }


    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );


    updateNavbar();


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    if (
        "IntersectionObserver"
        in window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "active"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            element => {

                observer.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            element => {

                element.classList.add(
                    "active"
                );

            }
        );

    }


    /* =====================================================
       3D CARD EFFECT
    ===================================================== */

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
                        ((y -
                            rect.height / 2) /
                            (rect.height / 2)) *
                        -3;

                    const rotateY =
                        ((x -
                            rect.width / 2) /
                            (rect.width / 2)) *
                        3;


                    card.style.transform =
                        `
                        perspective(900px)
                        rotateX(${rotateX}deg)
                        rotateY(${rotateY}deg)
                        translateY(-8px)
                        scale(1.02)
                        `;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform =
                        "";

                }
            );

        });


    /* =====================================================
       SMOOTH NAVIGATION
    ===================================================== */

    document
        .querySelectorAll(
            'nav a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const id =
                        link.getAttribute(
                            "href"
                        );

                    const target =
                        document.querySelector(
                            id
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    const offset =
                        navbar
                            ? navbar.offsetHeight
                            : 0;


                    window.scrollTo({

                        top:
                            target.offsetTop -
                            offset,

                        behavior:
                            "smooth"

                    });

                }
            );

        });


    /* =====================================================
       INITIALIZE
    ===================================================== */

    displayWatchlist();

    console.log(
        "✅ CineVerse Commit 5 initialized"
    );

});