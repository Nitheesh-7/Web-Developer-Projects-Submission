const questionNumber = document.querySelector("#question")
const answerButton = document.querySelector("#answers")
const nextButton = document.querySelector("#next")
const body = document.querySelector(".container")


let questions = [
    {
       question: "1. How may years there are in a decade?",
       answers: [
        { option: "5 years", correct: false},
        { option: "10 years", correct: true},
        { option: "15 years", correct: false},
        { option: "25 years", correct: false},
       ]
    },
    {
        question: "2. The product of 131*0*300*4",
        answers: [
            { option: "131", correct: false},
            { option: "4", correct: false},
            { option: "13", correct: false},
            { option: "0", correct: true},
           ]
        
    },
    {
        question: "3. What is the first prime number after 10.",
        answers: [
            { option: "11", correct: true},
            { option: "12", correct: false},
            { option: "13", correct: false},
            { option: "14", correct: false},
           ]
    },
    {
        question: "4. 60 times of 8 equals to",
        answers: [
            { option: "80", correct: false},
            { option: "0", correct: false},
            { option: "480", correct: true},
            { option: "360", correct: false},
           ]
    },
    {
        question: "5. Square root of 144",
        answers: [
            { option: "24", correct: false},
            { option: "14", correct: false},
            { option: "44", correct: false},
            { option: "12", correct: true},
           ]
    },
]
 let currentQuestionIndex = 0
 let score = 0

//  nextButton.addEventListener("click",() =>{
//     currentQuestionIndex++
//     changeQuestion()
   
//  })

 function quiz(){
    currentQuestionIndex = 0
    score = 0
    // nextButton.innerHTML = "Next"
    changeQuestion()
 }

 function changeQuestion(){
    start()
    let currentQuestion = questions[currentQuestionIndex]
    questionNumber.innerHTML = currentQuestion.question
    // console.log(currentQuestion)
    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button")
        button.innerHTML = answers.option
        button.classList.add("btn")
        answerButton.appendChild(button)
        // console.log(button)
        if(answers.correct){
            button.dataset.correct = answers.correct
        }
        button.addEventListener("click", selectAnswer)
   
    })
}
function start(){
    // nextButton.style.display = "none"
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e){
    const selectButton = e.target
    const isCorrect = selectButton.dataset.correct === "true"
    if(isCorrect){
        selectButton.classList.add("correct")
        score++
    }
    else{
        selectButton.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true
    })
}
function showScore(){
    start()
    questionNumber.innerHTML = `Your score is ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again"
    nextButton.Style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex  < questions.length){
        changeQuestion()
    }
    else{
        showScore()
    }
}

nextButton.addEventListener("click" , () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }
    else{
        quiz()
    }
})


quiz()



 

