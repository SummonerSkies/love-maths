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

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame() {
    // Creates 2 random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
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