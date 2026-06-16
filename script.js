const button = document.getElementById("recommend-btn");
const clickSound = new Audio("assets/sounds/click.mp3");

button.addEventListener("click", function(){
    clickSound.currentTime = 0; 
    clickSound.play();
});
