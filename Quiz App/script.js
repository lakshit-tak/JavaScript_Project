const questions = [

    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "Home Tool Markup Language"
        ],
        correct: "Hyper Text Markup Language"
    },

    {
        question: "Which language is used to style a webpage?",
        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        correct: "CSS"
    },

    {
        question: "Which keyword is used to create a variable that cannot be reassigned?",
        answers: [
            "let",
            "var",
            "const",
            "value"
        ],
        correct: "const"
    },

    {
        question: "Which method is used to select an element by ID?",
        answers: [
            "getElementById()",
            "getElement()",
            "selectById()",
            "queryId()"
        ],
        correct: "getElementById()"
    },

    {
        question: "Which method is used to make an API request?",
        answers: [
            "send()",
            "fetch()",
            "request()",
            "api()"
        ],
        correct: "fetch()"
    }

];

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const scoreElement = document.getElementById("score");
const result = document.getElementById("result");
const questionNumber = document.getElementById("questionNumber");
const startBtn = document.getElementById("startBtn");

let currentQuestion = 0;

let score = 0;

let answered = false;

startBtn.addEventListener("click", () =>{
    
    startBtn.style.display = "none";
    showQuestion();
    nextBtn.style.display = "block"
});

const showQuestion = () => {

    answered = false;

    const current = questions[currentQuestion];

    questionElement.textContent = current.question;

    questionNumber.textContent = `Question: ${currentQuestion + 1}/${questions.length}`;

    answersElement.innerHTML = "";

    current.answers.forEach((answer) =>{

        const button = document.createElement("button");

        button.textContent = answer;

        button.classList.add("answerBtn");

        answersElement.appendChild(button);
        button.addEventListener("click", ()=> {

            if(answered){
                alert("option is selected alredy")
                return;
            }

            answered = true;

            if(answer === current.correct){
                button.classList.add("correct");

                score++;

                scoreElement.textContent = `Score: ${score}`;

            }else{
                button.classList.add("wrong");
            }
        });
    });
};

nextBtn.addEventListener("click",() => {

    if(!answered){

        alert("first select an option")
        return;
    }

    currentQuestion++;

    if(currentQuestion<questions.length){

        showQuestion();
    }else{

        
        questionElement.textContent = "Quiz Completed";

        answersElement.textContent = "";
        nextBtn.style.display = "none";

        result.textContent = `Your Score: ${score}/${questions.length}`;
    }
});

