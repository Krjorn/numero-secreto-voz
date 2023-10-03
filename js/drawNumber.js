const lowestValue = 1;
const highestValue = 100;
const secretNumber = drawRandomNumber();

function drawRandomNumber() {
    return parseInt(Math.random() * highestValue + 1);
}

console.log(secretNumber);

const elementLowestValue = document.getElementById('lowest-value');
elementLowestValue.textContent = lowestValue;

const elementHighestValue = document.getElementById('highest-value');
elementHighestValue.textContent = highestValue;