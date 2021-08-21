// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// YOUR CODE HERE!    

let clues = []
function getData() {
    fetch('https://jservice.io/api/random')
       .then(response => response.json())
        .then(data => { 
            let category = data[0].category_id
    fetch('https://jservice.io/api/clues?category='+category)
        .then(response => response.json())
        .then(clueObjects => {
        
            clues = clueObjects
            console.log(clues)
      
            
        
    })
})  


}

getData()


// global variables
let startButton = document.getElementById('start-button')
let categoriesDiv = document.getElementById('categories-div')
let questionDiv = document.getElementById('question-div')
let correctAnswerH1 = document.getElementById('correctAnswer')
let scoresDiv = document.getElementById('scores-div')
let answerInput = document.getElementById('answer-input')
let answer = ""
let submitButton = document.getElementById('submit-button')
let score = 0
let endGameH1 = document.getElementById('end-game')
let playAgainButton = document.getElementById('playAgain-button')


// startGame

function startGame() {
    categoriesDiv.innerText = `Category: ${clues[0].category.title}`
    let random = Math.floor(Math.random() * clues.length)
    let question = clues[random].question
    questionDiv.innerText = `Question: ${question}`
    answer = clues[random].answer
    console.log(answer)
}
startButton.addEventListener("click", startGame)

// checkAnswer

function checkAnswer() {
    let usersAnswer = answerInput.value

    if (answer.toLowerCase() === usersAnswer.toLowerCase()) {
        score += 1
        scoresDiv.innerText = `Score: ${score}`
        correctAnswerH1.style.display = "block" 
        document.getElementById('answer-field').reset();
        startGame()
        
    } else { 
      endGameH1.style.display = "block"
      correctAnswerH1.style.display = "none"
      score = 0
      scoresDiv.innerText = `Score: ${score}`
      document.getElementById('answer-field').reset();
      
    }

}
submitButton.addEventListener("click", checkAnswer)

// playAgain
function playAgain() {
    startGame()
    endGameH1.style.display = "none"
    
}
playAgainButton.addEventListener("click", playAgain)
   