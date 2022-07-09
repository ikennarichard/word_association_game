//word association game

const scoreDisplay = document.getElementById('score_display');
const questionDisplay = document.getElementById('question_display');

const questions = [
    {
        quiz: ['value', 'estimate', 'evaluate'],
        options: ['jury', 'assess'],
        correct: 2
    },

    {
        quiz: ['close', 'near', 'next'],
        options: ['trace', 'adjacent'],
        correct: 2
    },

    {
        quiz: ['foreign', 'national', 'ethnic'],
        options: ['mad', 'exotic'],
        correct: 2
    },

    {
        quiz: ['assume', 'insight', 'weather'],
        options: ['forecast', 'sustainable'],
        correct: 1
    },

    {
        quiz: ['fast', 'quick', 'prompt'],
        options: ['charity', 'rapid'],
        correct: 2
    }

]

let score = 0;
let clicked = [];
scoreDisplay.textContent = score;


//get the questionDisplay and populate it with the questions

function populateQuestions(){
    questions.forEach(question => {
        const questionBox = document.createElement('div')
        questionBox.classList.add('question_box')

//logo display
        const logoDisplay = document.createElement('h1')
        logoDisplay.textContent = "*"
        questionBox.append(logoDisplay)

        //create p tag to hold question text
        question.quiz.forEach(tip => {
            const tipText = document.createElement('p')
            tipText.textContent = tip
            questionBox.append(tipText)
        })

        //a div to store our questions buttons
        const questionButtons = document.createElement('div')
        questionButtons.classList.add('question_buttons')
        questionBox.append(questionButtons)

        question.options.forEach((option, optionIndex) => {
            const questionButton = document.createElement('button')
            questionButton.classList.add('question_button')
            questionButton.textContent = option

            //event listener to handle checking result
            questionButton.addEventListener('click', () => checkAnswer(questionBox, questionButton, option, optionIndex + 1, question.correct))

            questionButtons.append(questionButton)
        })

        const answerDisplay = document.createElement('div')
        answerDisplay.classList.add('answer_display');

        questionBox.append(answerDisplay)
        questionDisplay.append(questionBox)

    })
}

populateQuestions()

function checkAnswer(questionBox,questionButton, option, optionIndex, correctOption) {

    console.log(option, 'clicked')

    if (optionIndex === correctOption) {
        score++
        scoreDisplay.textContent = score
        addResult(questionBox, 'Correct!', 'correct')

    } else {
        score--
        scoreDisplay.textContent = score
        addResult(questionBox, 'Wrong!', 'wrong')
    }
    clicked.push(option)
    questionButton.disabled = clicked.includes(option)
}

//where we add result to answer_display

function addResult(questionBox, answer, className) {
    const answerDisplay = questionBox.querySelector('.answer_display')
    answerDisplay.classList.remove('wrong')
    answerDisplay.classList.remove('correct')
    answerDisplay.classList.add(className)
    answerDisplay.textContent = answer
}

//49.47