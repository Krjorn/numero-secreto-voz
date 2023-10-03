const elementGuess = document.getElementById('guess');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
// recognition.start();

const btnMic = document.getElementById('mic');

btnMic.addEventListener('click', () => recognition.start());

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    guess = e.results[0][0].transcript;
    guess = correctNumbers(guess);
    showGuessOnScreen(guess);
    verifyGuessValidity(guess);
}

function showGuessOnScreen(guess) {
    elementGuess.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${guess}</span>
    `;
}

// recognition.addEventListener('end', () => recognition.start());