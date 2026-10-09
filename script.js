
"use strict";

const MOVIES = [
  {
    id: 1, title: "Neon Horizon", year: 2025, genre: "Sci-Fi",
    rating: "8.6", duration: "2h 08m",
    description: "A lone explorer discovers a mysterious signal that could change humanity's future.",
    color: "#6657ff", trailer: "https://www.youtube-nocookie.com/embed/ScMzIvxBSi4"
  },
  {
    id: 2, title: "Shadow Protocol", year: 2024, genre: "Action",
    rating: "8.1", duration: "1h 58m",
    description: "An intelligence agent must uncover a conspiracy before the city falls into chaos.",
    color: "#ed496d", trailer: "https://www.youtube-nocookie.com/embed/ScMzIvxBSi4"
  },
  {
    id: 3, title: "Beyond Earth", year: 2025, genre: "Adventure",
    rating: "8.4", duration: "2h 15m",
    description: "A daring crew journeys beyond the known frontier in search of a new beginning.",
    color: "#24b8a9", trailer: "https://www.youtube-nocookie.com/embed/ScMzIvxBSi4"
  },
  {
    id: 4, title: "Silent Echo", year: 2023, genre: "Drama",
    rating: "7.9", duration: "1h 52m",
    description: "A musician returns home and discovers the truth behind a long-forgotten memory.",
    color: "#d39b48", trailer: "https://www.youtube-nocookie.com/embed/ScMzIvxBSi4"
  },
  {
    id: 5, title: "Quantum Run", year: 2025, genre: "Sci-Fi",
    rating: "8.7", duration: "2h 03m",
    description: "A brilliant scientist races against time when an experiment fractures reality.",
    color: "#4287f5", trailer: "https://www.youtube-nocookie.com/embed/ScMzIvxBSi4"
  },
  {
    id: 6, title: "Final Strike", year: 2024, genre: "Action",
    rating: "7.8", duration: "1h 49m",
    description: "An elite team has one mission and one night to prevent a global disaster.",
    color: "#ed7549", trailer: "https://www.youtube-nocookie.com/embed/ScMzIvxBSi4"
  },
  {
    id: 7, title: "Lost Kingdom", year: 2023, genre: "Adventure",
    rating: "8.0", duration: "2h 11m",
    description: "A hidden kingdom awaits a traveller brave enough to uncover its ancient secret.",
    color: "#8e68cf", trailer: "https://www.youtube-nocookie.com/embed/ScMzIvxBSi4"
  },
  {
    id: 8, title: "Last Letter", year: 2024, genre: "Drama",
    rating: "8.2", duration: "1h 56m",
    description: "An unexpected letter connects two strangers and changes both of their lives.",
    color: "#c75e8d", trailer: "https://www.youtube-nocookie.com/embed/ScMzIvxBSi4"
  }
];

const $ = (selector) => document.querySelector(selector);
const STORAGE = {
  list: "cineverseWatchlist",
  progress: "cineverseProgress",
  users: "cineverseDemoUsers",
  session: "cineverseDemoSession"
};

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.warn("Could not read local storage:", error);
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn("Could not save data:", error);
  }
}

let watchlist = readStorage(STORAGE.list, []);
let progress = readStorage(STORAGE.progress, {});
let currentMovieId = null;
let authMode = "register";

function getMovie(id) {
  return MOVIES.find(movie => movie.id === Number(id));
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
}

function isSaved(id) {
  return watchlist.includes(Number(id));
}

function movieCard(movie) {
  const saved = isSaved(movie.id);

  return `
    <article class="movie-card">
      <div class="poster" style="--poster-glow:${movie.color}">
        <span class="poster-title">${movie.title}</span>
      </div>
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <div class="movie-meta">${movie.year} · ${movie.genre} · ★ ${movie.rating}</div>
        <div class="movie-actions">
          <button class="small-button" type="button"
            data-action="details" data-id="${movie.id}">Details</button>
          <button class="small-button ${saved ? "saved" : ""}" type="button"
            data-action="watchlist" data-id="${movie.id}"
            aria-label="${saved ? "Remove from" : "Add to"} watchlist">
            ${saved ? "♥ Saved" : "♡ List"}
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderMovies() {
  const search = ($("#searchInput").value || "").trim().toLowerCase();
  const genre = $("#genreFilter").value;

  const filtered = MOVIES.filter(movie => {
    const matchesSearch =
      movie.title.toLowerCase().includes(search) ||
      movie.genre.toLowerCase().includes(search);
    const matchesGenre = genre === "All" || movie.genre === genre;
    return matchesSearch && matchesGenre;
  });

  $("#movieGrid").innerHTML = filtered.map(movieCard).join("");
  $("#emptyMessage").classList.toggle("hidden", filtered.length > 0);
  renderWatchlist();
}

function renderWatchlist() {
  const movies = watchlist.map(getMovie).filter(Boolean);
  $("#watchlistGrid").innerHTML = movies.map(movieCard).join("");
  $("#watchlistEmpty").classList.toggle("hidden", movies.length > 0);
}

function renderContinueWatching() {
  const entries = MOVIES.filter(movie => Number(progress[movie.id]) > 0);
  $("#continueGrid").innerHTML = entries.map(movie => {
    const percent = Math.min(100, Math.max(0, Number(progress[movie.id]) || 0));
    return `
      <article class="progress-card">
        <h3>${movie.title}</h3>
        <p>${movie.genre} · ${movie.duration}</p>
        <label class="progress-label" for="progress-${movie.id}">
          Progress: <span id="progress-label-${movie.id}">${percent}%</span>
        </label>
        <input id="progress-${movie.id}" type="range" min="0" max="100"
          value="${percent}" data-action="progress" data-id="${movie.id}">
        <p>Move the slider to update your watch progress.</p>
      </article>
    `;
  }).join("");

  $("#continueEmpty").classList.toggle("hidden", entries.length > 0);
}

function toggleWatchlist(id) {
  id = Number(id);
  watchlist = isSaved(id)
    ? watchlist.filter(item => item !== id)
    : [...watchlist, id];

  writeStorage(STORAGE.list, watchlist);
  renderMovies();
  if (currentMovieId === id) showDetails(id);
}

function showDetails(id) {
  const movie = getMovie(id);
  if (!movie) return;

  currentMovieId = movie.id;
  const saved = isSaved(movie.id);
  const percent = Math.min(100, Math.max(0, Number(progress[movie.id]) || 0));

  $("#detailsContent").innerHTML = `
    <div class="details-layout">
      <div class="details-poster" style="background:
        radial-gradient(circle at top right, ${movie.color}, transparent 65%), #191b2c">
        ${movie.title}
      </div>
      <div class="details-copy">
        <p class="eyebrow">CINEVERSE ORIGINAL COLLECTION</p>
        <h2 id="detailsTitle">${movie.title}</h2>
        <p>${movie.year} · ${movie.genre} · ${movie.duration} · ★ ${movie.rating}</p>
        <p>${movie.description}</p>
        <button class="primary-button" type="button"
          data-action="play" data-id="${movie.id}">▶ Watch Trailer</button>
        <button class="secondary-button" type="button"
          data-action="watchlist" data-id="${movie.id}">
          ${saved ? "♥ Remove from My List" : "♡ Add to My List"}
        </button>
        <div id="trailerContainer"></div>
        <p class="progress-label">Watch progress: ${percent}%</p>
        <input type="range" min="0" max="100" value="${percent}"
          data-action="progress" data-id="${movie.id}" aria-label="Watch progress">
      </div>
    </div>
  `;

  openModal("detailsModal");
}

function saveProgress(id, value) {
  progress[id] = Number(value);
  writeStorage(STORAGE.progress, progress);
  renderContinueWatching();

  const label = document.getElementById(`progress-label-${id}`);
  if (label) label.textContent = `${value}%`;

  if (currentMovieId === Number(id)) {
    const copy = $("#detailsContent");
    const progressLabel = copy?.querySelector(".progress-label");
    if (progressLabel) progressLabel.textContent = `Watch progress: ${value}%`;
  }
}

// Movie actions are delegated so they keep working after rerendering.
document.addEventListener("click", event => {
  const closeTarget = event.target.closest("[data-close]");
  if (closeTarget) {
    closeModal(closeTarget.dataset.close);
    return;
  }

  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) return;

  const id = Number(actionButton.dataset.id);
  const action = actionButton.dataset.action;

  if (action === "details") showDetails(id);
  if (action === "watchlist") toggleWatchlist(id);

  if (action === "play") {
    const movie = getMovie(id);
    if (!movie) return;
    $("#trailerContainer").innerHTML = `
      <iframe class="trailer-frame"
        src="${movie.trailer}?autoplay=1"
        title="${movie.title} trailer"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowfullscreen loading="lazy"></iframe>
      <p>Demo trailer embed. Replace this URL with a licensed trailer for your project.</p>
    `;
    if (!Number(progress[id])) saveProgress(id, 5);
  }
});

document.addEventListener("input", event => {
  const input = event.target.closest('[data-action="progress"]');
  if (input) saveProgress(Number(input.dataset.id), input.value);
});

$("#searchInput").addEventListener("input", renderMovies);
$("#genreFilter").addEventListener("change", renderMovies);

$("#heroWatchlistButton").addEventListener("click", () => {
  $("#watchlist").scrollIntoView({ behavior: "smooth" });
});

$("#profileButton").addEventListener("click", () => {
  $("#profileMenu").classList.toggle("hidden");
});

document.addEventListener("click", event => {
  const menu = $("#profileMenu");
  if (!menu.contains(event.target) && !$("#profileButton").contains(event.target)) {
    menu.classList.add("hidden");
  }
});

function setAuthMode(mode) {
  authMode = mode;
  const registering = mode === "register";

  $("#authHeading").textContent = registering ? "Create your account" : "Welcome back";
  $("#authSubmit").textContent = registering ? "Create Account" : "Login";
  $("#nameLabel").classList.toggle("hidden", !registering);
  $("#authName").classList.toggle("hidden", !registering);
  $("#authName").required = registering;
  $("#authPassword").autocomplete = registering ? "new-password" : "current-password";
  $("#authSwitchText").textContent = registering ? "Already registered?" : "New to CINEVERSE?";
  $("#authSwitchButton").textContent = registering ? "Login" : "Create account";
  $("#authMessage").textContent = "";
}

function updateProfile() {
  const session = readStorage(STORAGE.session, null);
  const signedIn = Boolean(session && session.email);

  $("#profileLabel").textContent = signedIn ? (session.name || "Member") : "Guest";
  $("#profileEmail").textContent = signedIn ? session.email : "Not signed in";
  $("#profileAvatar").textContent = signedIn
    ? (session.name || session.email).charAt(0).toUpperCase()
    : "G";

  $("#openAuthButton").classList.toggle("hidden", signedIn);
  $("#logoutButton").classList.toggle("hidden", !signedIn);
}

$("#openAuthButton").addEventListener("click", () => {
  $("#profileMenu").classList.add("hidden");
  setAuthMode("register");
  $("#authForm").reset();
  openModal("authModal");
});

$("#closeAuthButton").addEventListener("click", () => closeModal("authModal"));

$("#authSwitchButton").addEventListener("click", () => {
  setAuthMode(authMode === "register" ? "login" : "register");
});

$("#authForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = $("#authName").value.trim();
  const email = $("#authEmail").value.trim().toLowerCase();
  const password = $("#authPassword").value;

  if (!email || password.length < 6 || (authMode === "register" && !name)) {
    $("#authMessage").textContent = "Please complete all required fields.";
    return;
  }

  const users = readStorage(STORAGE.users, []);

  if (authMode === "register") {
    if (users.some(user => user.email === email)) {
      $("#authMessage").textContent = "This email is already registered. Please log in.";
      return;
    }

    // Portfolio demo only: passwords are stored in browser storage.
    // Never use this approach for a real production account system.
    users.push({ name, email, password });
    writeStorage(STORAGE.users, users);
    writeStorage(STORAGE.session, { name, email });
  } else {
    const user = users.find(item => item.email === email && item.password === password);
    if (!user) {
      $("#authMessage").textContent = "Email or password is incorrect.";
      return;
    }
    writeStorage(STORAGE.session, { name: user.name, email: user.email });
  }

  updateProfile();
  closeModal("authModal");
  $("#authForm").reset();
});

$("#logoutButton").addEventListener("click", () => {
  localStorage.removeItem(STORAGE.session);
  updateProfile();
  $("#profileMenu").classList.add("hidden");
});

// Close open modals when Escape is pressed.
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeModal("authModal");
    closeModal("detailsModal");
    $("#profileMenu").classList.add("hidden");
  }
});

// Initial state: both modals and the profile menu remain closed.
closeModal("authModal");
closeModal("detailsModal");
$("#profileMenu").classList.add("hidden");

setAuthMode("register");
updateProfile();
renderMovies();
renderContinueWatching();