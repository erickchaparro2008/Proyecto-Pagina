// 1. Redirección de MUSIC a Spotify
const musicLink = document.querySelector("#music-link");
musicLink.addEventListener("click", function(event) {
    event.preventDefault(); 
    window.location.href = "https://open.spotify.com/playlist/0yYci7meoKNEI0wSFFxJiu?si=IZLruEv3SSCJBccIcVll-w&pt=06835c5f7a6e2c9c6dec83d13d195412&pi=1vWh0ys7SV6d-";
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
    window.location.href = "index_shop.html"; // Corregido el nombre
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
