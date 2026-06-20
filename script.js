const button = document.getElementById("recommend-btn");
const clickSound = new Audio("assets/sounds/click.mp3");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("close-btn");
const categoryButtons = document.querySelectorAll(".category-btn");

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
