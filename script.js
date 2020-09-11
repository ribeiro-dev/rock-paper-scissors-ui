function computerPlay() {
    // Choose a random option and return it 
    let options = ["rock", "paper", "scissors"]

    let randomIndex = Math.floor(Math.random() * options.length) // It returns an index from the options array
    let selectedOption = options[randomIndex] // choose the option in the randomIndex

    return selectedOption
}

function playRound(playerSelection, computerSelection) {
    // Returns the winner of the round

    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    let returnInfo = {
        playerWins: false,
        draw: false,
        message: "",
        error: null
    }
    
    // If player chooses rock
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") { // If he wins
            returnInfo.playerWins = true
            returnInfo.message = "You win! Rock beats Scissors"
            return returnInfo
            
        } else if (computerSelection === "paper") { // If he loses  
            returnInfo.playerWins = false
            returnInfo.message = "You lose! Paper beats Rock"
            return returnInfo

        } else if (computerSelection === playerSelection) {
            returnInfo.draw = true
            returnInfo.message = "It's a tie!"
            return returnInfo
        }
    }

    // If player chooses paper
    else if (playerSelection === "paper") {
        
        if (computerSelection === "rock") { // If he wins  
            returnInfo.playerWins = true
            returnInfo.message = "You win! Paper beats Rock"
            return returnInfo

        } else if (computerSelection === "scissors") { // If he loses
            returnInfo.playerWins = false
            returnInfo.message = "You lose! Scissors beats Paper"
            return returnInfo
     
        } else if (computerSelection === playerSelection) {
            returnInfo.draw = true
            returnInfo.message = "It's a tie!"
            return returnInfo
        }
    }

    // If player chooses scissors
    else if (playerSelection === "scissors") {
        
        if (computerSelection === "paper") { // If he wins
            returnInfo.playerWins = true
            returnInfo.message = "You win! Scissors beats Paper"
            return returnInfo

        } else if (computerSelection === "rock") { // If he loses
            returnInfo.playerWins = false
            returnInfo.message = "You lose! Rock beats Scissors"
            return returnInfo

        } else if (computerSelection === playerSelection) {
            returnInfo.draw = true
            returnInfo.message = "It's a tie!"
            return returnInfo
        }
    }

    // If user inputs an wrong answer
    else {
        returnInfo.error = true
        alert("Invalid answer! Try again")
        return returnInfo
    }
}

function game() {
    let score = {
        player: 0,
        computer: 0
    }

    for (let i = 0; i < 5; i++) {
        let player = prompt("Choose rock, paper or scissors")
        let cpu = computerPlay()        
        let result = playRound(player, cpu)

        if (result.error) continue

        if (!result.draw) {
            if (result.playerWins) score.player++
            if (!result.playerWins) score.computer++
        }
        console.log(result.message)
    }

    // Show the winner
    if (score.player > score.computer) {
        console.log("You are the winner!")
    } else {
        console.log("You lose!")
    }

    console.log(`SCORE: ${score.player} x ${score.computer}`)
}



const playButtons = document.querySelectorAll('.btn-play')
playButtons.forEach( btn => btn.addEventListener('click', (e) => {
    // call playRound()
}))