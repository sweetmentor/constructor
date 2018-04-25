let score = 0;
let scoreBox = document.getElementById("score");
let questionBox = document.getElementById("question");
let answerForm = document.getElementById("quizForm");

function checkAnswer() {
    if (answerForm["answer"].value == answerForm["rightAnswer"].value) {
        alert("Hey! You got it right!");
        score++;
    } else {
        alert("Oh no! A wrong answer :(");
    }
    answerForm["answer"].value = "";
    scoreBox.textContent = score;
    additionQuiz();
    return false;
}

function additionQuiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    
    questionBox.textContent = "What is: " + num1 + " + " + num2 + " ? ";
    answerForm["rightAnswer"].value = (num1 + num2);
}
additionQuiz();