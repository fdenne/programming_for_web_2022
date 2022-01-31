// Let's make a program: asking a random question
const questions = [
    {question: "What color does yellow and blue make?", answer: "green"},
    {question: "What color does blue and red make?", answer: "purple"},
    {question: "What color does yellow and red make?", answer: "orange"},
]

const questionLength = questions.length;

const questionIndex = Math.floor(Math.random() * questionLength);

const answer = window.prompt(questions[questionIndex].question);

window.alert("You answered " + answer + ". The correct answer is " + questions[questionIndex].answer + ".");