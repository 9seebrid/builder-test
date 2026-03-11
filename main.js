const generateButton = document.getElementById('generate');
const lottoNumbersDiv = document.getElementById('lotto-numbers');

generateButton.addEventListener('click', () => {
    lottoNumbersDiv.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const gameDiv = document.createElement('div');
        gameDiv.classList.add('game');
        const numbers = generateLottoNumbers();
        numbers.forEach(number => {
            const numberDiv = document.createElement('div');
            numberDiv.classList.add('number');
            numberDiv.textContent = number;
            gameDiv.appendChild(numberDiv);
        });
        lottoNumbersDiv.appendChild(gameDiv);
    }
});

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}