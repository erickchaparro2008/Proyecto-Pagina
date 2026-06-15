// 1. Redirección de MUSIC a Spotify
const musicLink = document.querySelector("#music-link");
musicLink.addEventListener("click", function(event) {
    event.preventDefault(); 
    window.location.href = "https://youtube.com/playlist?list=PL9A1600EA18716662&si=WAtf9losPoDxq9C8";
});

// 2. Redirección de VIDEOS a YouTube
const videosLink = document.querySelector("#videos-link");
videosLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "https://www.youtube.com/@daftpunk";
});

// 3. Redirección de SHOP a su archivo correcto
const shopLink = document.querySelector("#shop-link");
shopLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "shop.html";
});

// 4. Redirección de FOLLOW a su archivo correcto
const followLink = document.querySelector("#follow-link");
followLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "index_follow.html"; // Corregido el nombre y la extensión
});

// 5. El título principal "DAFT PUNK" redirige al Home
const mainTitle = document.querySelector("#main-title");
mainTitle.addEventListener("click", function() {
    window.location.href = "index.html"; 
});

// 6. Redirección a login
const loginLink = document.querySelector("#login-link");

loginLink.addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "login.html";
});

// Mostrar bienvenida
window.addEventListener("DOMContentLoaded", function() {
    const usuario = localStorage.getItem("usuario");
    const nombre = localStorage.getItem("nombre");

    const welcomeText = document.querySelector("#welcome-text");

    if(usuario && nombre){
        welcomeText.textContent = "BIENVENIDO " + nombre + " (" + usuario + ")";
    }
});
