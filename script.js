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
        tie: false,
        message: "",
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
            returnInfo.tie = true
            returnInfo.message = "It's a tie! Try again!"
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
            returnInfo.tie = true
            returnInfo.message = "It's a tie! Try again!"
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
            returnInfo.tie = true
            returnInfo.message = "It's a tie! Try again"
            return returnInfo
        }
    }
}

let score = {
    player: 0,
    computer: 0,
    tie: 0
}

function changeScore(roundInfo) {

    //console.log(roundInfo)
    let messageDiv = document.querySelector('#message')
    messageDiv.textContent = roundInfo.message

    if (roundInfo.playerWins) {
        let playerScore = document.querySelector('#player')
        playerScore.textContent = `You: ${++score.player}`

    } else if (!roundInfo.playerWins) {
        if (roundInfo.tie) {
            let tieScore = document.querySelector('#tie')
            //tieScore.textContent = `Tie: ${++score.tie}`

        } else {
            let computerScore = document.querySelector('#computer')
            computerScore.textContent = `Computer: ${++score.computer}`
        }
    }
}

function finishGame() {    
    
    let messageDiv = document.querySelector('#message')
    if (score.player === 5) {
        // YOU WIN 
        messageDiv.textContent = 'You are the winner!'
        playButtons.forEach( btn => btn.disabled = true)
        
    } else if (score.computer === 5) {
        // YOU LOSE
        messageDiv.textContent = 'The computer is the winner!'
        playButtons.forEach( btn => btn.disabled = true)
    }
    

    // CREATE A BUTTON TO START A NEW GAME
}

function playGame(e) {
    let selectedOption = e.target.innerText
    let computerOption = computerPlay()
    let result = playRound(selectedOption, computerOption)
    changeScore(result)
    finishGame()
}


const playButtons = document.querySelectorAll('.btn-play')
playButtons.forEach( btn => btn.addEventListener('click', playGame))