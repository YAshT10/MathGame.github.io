let score = 0;
let timer;
const timerTag = document.getElementById('timer');
const startButton = document.getElementById('start');
startButton.addEventListener('click', startTimer);
startButton.addEventListener('click', game);

function startTimer() {
    timerTag.style.display = 'block';
    let timeLeft = document.getElementById("time").value *60; // 2 minutes in seconds

    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            timerTag.innerText = "Seconds left : " + timeLeft;
        } else {
            clearInterval(timer);
            document.getElementById('game').style.display = "none";
            document.getElementById('end').style.display = "block";
            document.getElementById('final_score').innerText = "Score : " + score;
            // alert('Time is up! Score : ' + score);
        }
    }, 1000);
}

document.getElementById('score').innerText = "Score : " + score;

function generateMathProblem() {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let num1, num2;
    var answer;
    if (operator === '+') {
        num1 = Math.floor(Math.random() * 100) + 1;
        num2 = Math.floor(Math.random() * 100) + 1;
        answer = num1 + num2;
    } else if (operator === '-') {
        num1 = Math.floor(Math.random() * 100) + 1;
        num2 = Math.floor(Math.random() * num1) + 1;
        answer = num1 - num2;
    } else if (operator === '*') {
        num1 = Math.floor(Math.random() * 99) + 2;
        num2 = Math.floor(Math.random() * 12) + 2;
        answer = num1 * num2;
    } else if (operator === '/') {
        num1 = Math.floor(Math.random() * 99) + 2;
        num2 = Math.floor(Math.random() * 11) + 2;
        num1 = num1 * num2; // Reverse the numbers for division
        answer = num1 / num2;
    }

    var problem = `${num1} ${operator} ${num2}`;
    // alert(problem+" = "+answer);
    return { Q: problem, A: answer };
}

function game() {
    startpage = document.getElementById('startpage');
    startpage.style.display = "none";
    gamepage = document.getElementById('game');
    gamepage.style.display = "block";
    newQ();
}
function newQ()
    {
        document.getElementById('comment').style.display = "none";
        const key = generateMathProblem();
        document.getElementById('question').innerText = key.Q;

        const answerInput = document.getElementById('answer');
        answerInput.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                checkAnswer();
            }
        });
        function checkAnswer() {
            const answer = answerInput.value;
            if (answer === key.A.toString()) {
                // alert('Correct answer!');
                score++;
                document.getElementById('score').innerText = "Score :" + score;
                answerInput.value = '';
                newQ();
            }
            else
            {
                document.getElementById('comment').style.display = "block";
            }
        }
    }