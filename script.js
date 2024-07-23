function getComputerChoice() {
	let choice = Math.floor(Math.random() * 3)
	switch (choice) {
		case 0:
			return 'rock'
		case 1:
			return 'paper'
		case 2:
			return 'scissor'
	}
}
function getHumanChoice() {
	let choice = prompt('Choose between: rock, paper or scissor')
	return choice
}
function playGame() {
	let humanScore = 0
	let computerScore = 0

	let playRound = function (humanChoice, ComputerChoice) {
		humanChoice = humanChoice.toLowerCase()
		if (humanChoice == ComputerChoice) {
			console.log("It's a tie!")
		} else {
			switch (humanChoice) {
				case 'rock':
					if (ComputerChoice == 'scisso') {
						console.log('You Win, computer choose scissor!')
						humanScore += 1
					} else {
						console.log('You loose!')
						computerScore += 1
					}
					break
				case 'paper':
					if (ComputerChoice == 'rock') {
						console.log('You Win, computer choose rock')
						humanScore += 1
					} else {
						console.log('You loose!')
						computerScore += 1
					}
					break
				case 'scissor':
					if (ComputerChoice == 'paper') {
						console.log('You Win, computer choose paper')
						humanScore += 1
					} else {
						console.log('You loose!')
						computerScore += 1
					}
			}
		}
	}
	for (let i = 0; i < 5; i++) {
		let humanSelection = getHumanChoice()
		let computerSelection = getComputerChoice()
		playRound(humanSelection, computerSelection)
	}
	if (humanScore == computerScore) {
		console.log("No one win, it's a tie")
	} else if (humanScore > computerScore) {
		console.log('You win')
	} else if (humanScore < computerScore) {
		console.log('Computer win')
	}
}
playGame()
