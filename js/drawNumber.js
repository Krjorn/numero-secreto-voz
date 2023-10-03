const lowestValue = 200;
const highestValue = 900;
const secretNumber = drawRandomNumber();

function drawRandomNumber() {
    return parseInt(Math.random() * (highestValue - lowestValue) + lowestValue);
}

console.log(secretNumber);

const elementLowestValue = document.getElementById('lowest-value');
elementLowestValue.textContent = lowestValue;

const elementHighestValue = document.getElementById('highest-value');
elementHighestValue.textContent = highestValue;