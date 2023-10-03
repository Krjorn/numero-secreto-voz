function verifyGuessValidity(guess) {
    const number = +guess;

    if(guessIsInvalid(number)) {
        if(guess.toLowerCase() === 'game over') {
            document.body.style.backgroundColor = 'var(--bg-game-over)';
            document.body.innerHTML = `
                <h1>GAME OVER</h1>
                <button id="play-again" class="btn-restart">Jogar novamente</button>
            `; 
        } else {
            elementGuess.innerHTML += `<div>Valor inválido!</div>`;
        }
        
        return;
    }

    if(numberLowerOrHigherThanAllowed(number)) {
        elementGuess.innerHTML += `
            <div>Valor inválido: Seu chute deve estar entre ${lowestValue} e ${highestValue}!</div>
        `;
        return;
    }

    if(number === secretNumber) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número era ${secretNumber}</h3>
            <button id="play-again" class="btn-restart">Jogar novamente</button>
        `;
    } else if(number < secretNumber) {
        elementGuess.innerHTML += `
            <div>O número é maior <i class="fa-solid fa-arrow-up"></i></div>
        `;
    } else {
        elementGuess.innerHTML += `
            <div>O número é menor <i class="fa-solid fa-arrow-down"></i></div>
        `;
    }
}

function guessIsInvalid(number) {
    return Number.isNaN(number);
}

function numberLowerOrHigherThanAllowed(number) {
    return number < lowestValue || number > highestValue;
}

document.body.addEventListener('click', (e) => {
    if(e.target.id == 'play-again') {
        window.location.reload();
    }
});

const numbers = {
    'zero zero': 0,
    '00': 0,
    '01': 1,
    'um': 1,
    'dois': 2,
    'três': 3,
    'quatro': 4,
    'cinco': 5,
    'seis': 6,
    'sete': 7,
    'oito': 8,
    'nove': 9,
    'dez': 10
 }
 
 const correctNumbers = (guess) => {
    for(number in numbers){
       if(guess === number){
          guess = numbers[number];   
       }         
    }
    return guess;
 };