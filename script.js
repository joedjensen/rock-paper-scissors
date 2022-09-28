var wins=0;
var losses=0;
var ties=0;

var choices = ['R', 'P', 'S'];
do {
    do {
        userInput = prompt("Enter R, P, or S");
    } while (!["R","P","S"].includes(userInput))
    computerInput = generateComputerChoice();
    alert("Computer chooses " + computerInput);
    alert(generateResult(userInput, computerInput));
    alert("stats" + '\n' + "Wins: " + wins + '\n' + "Losses: " + losses + '\n' + "Ties: " + ties);
    var playAgain = confirm("play again");
} while (playAgain)


function generateComputerChoice(){
    var index = Math.floor(Math.random() * choices.length);
    console.log("index: " + index);
    return choices[index];
}

function generateResult(userInput, computerInput) {
    switch (userInput) {
        case 'R': switch (computerInput) {
                    case 'R': reportTies();
                    case 'P': reportLoss();
                    case 'S': reportWins();
                    };
        case 'P': switch (computerInput) {
                    case 'R': reportWins();
                    case 'P': reportTies();
                    case 'S': reportLoss();
                    };
        case 'S': switch (computerInput) {
                    case 'R': reportLoss();
                    case 'P': reportWins();
                    case 'S': reportTies();
                    };  
    }
    return "You win!";
}
function reportLoss() {
    losses++;
    return "You lose!";
}

function reportWins() {
    wins++;
    return "You win!";
}
function reportTies() {
    ties++;
    return "You are tied!";
}