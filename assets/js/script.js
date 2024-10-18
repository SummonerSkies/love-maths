// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

// run game
function runGame() {

}

// check answer
function checkAnswer() {

}

// calculateCorrectAnswer
function calculateCorrectAnswer() {

}

// incrementScore
function incrementScore() {

}

// incrementWrongAnswer
function incrementWrongAnswer() {

}

// displayAdditionQuestion
function displayAdditionQuestion() {

}
// displaySubtractQuestion
function displaySubtractQuestion() {

}
// displayMulyiplyQuestion
function displayMulyiplyQuestion () {
    
}
// displayDivisionQuestion