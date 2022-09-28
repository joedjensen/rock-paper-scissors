var wins=0;
var loses=0;
var ties=0;

do {
    do {
        userInput = prompt("Enter R, P, or S");
    } while (!["R","P","S"].includes(userInput))
    computerInput = generateComputerChoice();
    alert("Computer chooses " + computerInput);
    alert(generateResult(userInput, computerInput));
    alert("stats");
    var playAgain = confirm("play again");
} while (playAgain)


function generateComputerChoice(){
    return "R"
}

function generateResult(userInput, computerInput) {
    return "You win!";
}
