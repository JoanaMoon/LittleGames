let careerChoice = '';
let step = 0;

function startGame(career) {
    careerChoice = career;
    step = 1;
    document.getElementById('career-choice').style.display = 'none';  // Hide career selection
    displayInfo();
}

function displayInfo() {
    const gameInfo = document.getElementById('game-info');
    const decisionButtons = document.getElementById('decision-buttons');
    
    if (step === 1) {
        switch (careerChoice) {
            case 'scientist':
                gameInfo.innerHTML = "As a scientist, you are constantly discovering new things. Your research could change the world.";
                break;
            case 'politician':
                gameInfo.innerHTML = "As a politician, you work for the people and have to make difficult decisions for the greater good.";
                break;
            case 'doctor':
                gameInfo.innerHTML = "As a doctor, you have the power to save lives, but every decision is critical.";
                break;
        }
        decisionButtons.style.display = 'block';
        document.getElementById('decision1').innerHTML = 'Make an important decision';
        document.getElementById('decision2').innerHTML = 'Take a different path';
    } else if (step === 2) {
        gameInfo.innerHTML = "Your career is moving forward. Now you face new challenges. What will you do?";
        document.getElementById('decision1').innerHTML = 'Stick to your original plan';
        document.getElementById('decision2').innerHTML = 'Change your approach entirely';
    } else if (step === 3) {
        gameInfo.innerHTML = "The final challenge awaits you. Will you take the risk?";
        document.getElementById('decision1').innerHTML = 'Take the risk and innovate';
        document.getElementById('decision2').innerHTML = 'Play it safe and follow the rules';
    } else if (step === 4) {
        endGame();
    }
}

function makeDecision(decision) {
    const gameInfo = document.getElementById('game-info');
    const decisionButtons = document.getElementById('decision-buttons');

    if (step === 1) {
        if (decision === 1) {
            gameInfo.innerHTML = "You made a bold decision! The consequences will unfold soon.";
        } else {
            gameInfo.innerHTML = "You decided to take a different approach. Let's see where this leads.";
        }
    } else if (step === 2) {
        if (decision === 1) {
            gameInfo.innerHTML = "You stuck to your original plan. Let's see how it goes!";
        } else {
            gameInfo.innerHTML = "You decided to change your approach. This could lead to new opportunities!";
        }
    } else if (step === 3) {
        if (decision === 1) {
            gameInfo.innerHTML = "You took the risk and innovated. This could lead to great success!";
        } else {
            gameInfo.innerHTML = "You decided to play it safe. It's a more cautious approach, but will it be enough?";
        }
    }

    step++;
    if (step <= 3) {
        displayInfo();  // Display next round of decisions
    } else {
        endGame();  // End game after 3 rounds
    }
}

function endGame() {
    const gameInfo = document.getElementById('game-info');
    const decisionButtons = document.getElementById('decision-buttons');
    const gameEnd = document.getElementById('game-end');

    decisionButtons.style.display = 'none';  // Hide decision buttons
    gameEnd.style.display = 'block';  // Show end of game message

    let outcomeText = "You've completed your career journey! Here's the outcome based on your decisions:\n\n";
    
    switch (careerChoice) {
        case 'scientist':
            outcomeText += "As a scientist, you pushed the boundaries of knowledge. Your innovative ideas led to groundbreaking discoveries!";
            break;
        case 'politician':
            outcomeText += "As a politician, you made tough decisions. While not everyone agreed with you, you helped shape the future!";
            break;
        case 'doctor':
            outcomeText += "As a doctor, you saved lives and made difficult calls. Your dedication to healing has had a lasting impact.";
            break;
    }

    gameInfo.innerHTML = outcomeText;
}
