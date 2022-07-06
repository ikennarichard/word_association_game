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

const populateQuestions = () => {
    questions.forEach(question => {
        const questionBox = document.createElement('div')
        questionBox.classList.add('question_box')

        const logoDisplay = document.createElement('h1')
        logoDisplay.textContent = "*"
        questionBox.append(logoDisplay)

        question.quiz.forEach(tip => {
            const tipText = document.createElement('p')
            tipText.textContent = tip
            questionBox.append(tipText)
        })

        //our questions buttons
        const questionButtons = document.createElement('div')
        questionButtons.classList.add('question_buttons')
        questionBox.append(questionButtons)

        question.options.forEach((option, optionIndex) => {
            const questionButton = document.createElement('button')
            questionButton.classList.add('question_button')
            questionButton.textContent = option

            //event listener to handle checking result
            questionButton.addEventListener('click', () => checkAnswer(questionButton, option, optionIndex + 1, question.correct))

            questionButtons.append(questionButton)
        })


        questionDisplay.append(questionBox)

    })
}

populateQuestions()

function checkAnswer(questionButton, option, optionIndex, correctOption) {

    console.log(option, 'clicked')

    if (optionIndex === correctOption) {
        score++
        scoreDisplay.textContent = score

    } else {
        score--
        scoreDisplay.textContent = score
    }
    clicked.push(option)
    questionButton.disabled = clicked.includes(option)
}