const button = document.getElementById("recommend-btn");
const clickSound = new Audio("assets/sounds/click.mp3");
const modal = document.getElementById("modal");
const closeButton = document.getElementById("close-btn");

button.addEventListener("click", function(){
    clickSound.currentTime = 0; 
    clickSound.play();
});

button.addEventListener("click", function() {
    modal.classList.remove("hidden");
});


closeButton.addEventListener("click", function() {
    modal.classList.add("hidden");
});