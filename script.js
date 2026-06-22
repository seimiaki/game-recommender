const button = document.getElementById("recommend-btn");
const clickSound = new Audio("assets/sounds/click.mp3");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("close-btn");
const categoryButtons = document.querySelectorAll(".category-btn");

const navbar = document.querySelector(".navbar");

const startButton = document.getElementById("start-exploring");
const finder = document.querySelector(".finder-container");
const overlay = document.querySelector(".finder-overlay");

startButton.addEventListener("click", () => {
    finder.classList.add("active");
});

startButton.addEventListener("click", () => {
    finder.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("no-scroll");
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const minimizeButton = document.getElementById("minimize-finder");

minimizeButton.addEventListener("click", () => {
    finder.classList.remove("active");
    overlay.classList.remove("active");

    document.body.classList.remove("no-scroll");
});

button.addEventListener("click", function(){
    clickSound.currentTime = 0; 
    clickSound.play();
});
button.addEventListener("click", function() {
    modal.classList.remove("hidden");
});

closeButton.addEventListener("click", function() {
    const card = document.querySelector(".game-result");
    card.classList.add("closing");
    setTimeout(function() {
        modal.classList.add("hidden");
        card.classList.remove("closing");
    }, 250);

});

categoryButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        button.classList.toggle("selected");
    });
});
