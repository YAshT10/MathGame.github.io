let score = 0;
let timer;
var document="index.html";
const timerTag = document.getElementById('timer');
const startButton = document.getElementById('start');
startButton.addEventListener('click', startTimer);
startButton.addEventListener('click', game);

function startTimer() {
    let timeLeft = 120; // 2 minutes in seconds

    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerTag.innerText = "Seconds left: " + timeLeft;
        } else {
            clearInterval(timer);
            alert('Time is up! Score : '+score);
        }
    }, 1000);
}

document.getElementById('score').innerText = "Score :" + score;

function generateMathProblem() {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let num1, num2;
    var answer;
    if (operator === '+') {
        num1 = Math.floor(Math.random() * 100) + 1;
        num2 = Math.floor(Math.random() * 100) + 1;
        answer=num1+num2;
    } else if (operator === '-') {
        num1 = Math.floor(Math.random() * 100) + 1;
        num2 = Math.floor(Math.random() * num1) + 1;
        answer=num1-num2;
    } else if (operator === '*') {
        num1 = Math.floor(Math.random() * 11) + 2;
        num2 = Math.floor(Math.random() * 11) + 2;
        answer=num1*num2;
    } else if (operator === '/') {
        num1 = Math.floor(Math.random() * 11) + 2;
        num2 = Math.floor(Math.random() * 99) + 2;
        num1 = num1 * num2; // Reverse the numbers for division
        answer=num1/num2;
    }

    const problem = `${num1} ${operator} ${num2}`;
    return {problem:answer};
}

function game()
{
    startpage = document.getElementById('startpage');
    startpage.style.display = "none";
    gamepage = document.getElementById('gamepage');
    gamepage.style.display = "block";
const key = generateMathProblem();
document.getElementById('question').innerText = key.problem;

const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', checkAnswer);

function checkAnswer() {
    const answer = answerInput.value;
    if (answer === key.answer) {
        alert('Correct answer!');
        score++;
        document.getElementById('score').innerText = "Score :" + score;
    } else {
        alert('Incorrect answer!');
    }
}
}