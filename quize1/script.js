const questions=[
    {
        question:"what is national Bird of india?",
        answers:[
            {text: "Deer" ,correct:false},
            {text: "Elephant" ,correct:false},
            {text: "Lion" ,correct:false},
            {text: "Peacock" ,correct:true},
        ]
    },
    {
        question:"what is national animal of india?",
        answers:[
            {text: "Deer" ,correct:false},
            {text: "Elephant" ,correct:false},
            {text: "Lion" ,correct:false},
            {text: "Peacock" ,correct:true},
        ]
    },
    {
        question:"what is national animal of india?",
        answers:[
            {text: "Deer" ,correct:false},
            {text: "Elephant" ,correct:false},
            {text: "Lion" ,correct:false},
            {text: "Peacock" ,correct:true},
        ]
    },
    {
        question:"what is national animal of india?",
        answers:[
            {text: "Deer" ,correct:false},
            {text: "Elephant" ,correct:false},
            {text: "Lion" ,correct:false},
            {text: "Peacock" ,correct:true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuize(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "."+ currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button); 
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer)
        });
    }

    function resetState(){
        nextButton.style.display="none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }

    function selectAnswer(e){
        const selectedBtn=e.target;
        const isCorrect=selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;
        }
        else{
            selectedBtn.classList.add("Incorrect");
        }
        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled= true;
        });
        nextButton.style.display="block";
    }     
    function showscore(){
        resetState();
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!` ;
        nextButton.innerHTML="play Again";
        nextButton.style.display="block";
    }
    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }
        else{
            showscore();
        }
    }
    nextButton.addEventListener("click", ()=>{
        if(currentQuestionIndex<questions.length){
            handleNextButton();
        }
        else{
            startQuize();
        }
    });

    startQuize();