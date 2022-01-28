// ARRAYS

// from square brackets
const myCringiestMovies = ["Cars". "Finding Moana", "Nemo"];
console.log("cringy movies", myCringiestMovies);

// from string using split
const myOtherMovies = "Cars, Finding Nemo, Moana".split(", ");
console.log("my other movies", myOtherMovies);

// viewing values by index
console.log("Cars", myOtherMovies[0]);
myOtherMovies[3] = "Encanto"; //adds a fourth item
myOtherMovies[1] = "Encanto"; //replaces Finding Nemo
myOtherMovies[250] = "Encanto"; //creates 246 empty items plus the last one encanto

// get length
console.log("length of cringy", myCringiestMovies.length)

// push - mutates existing array - adds to the end
myCringiestMovies.push("San Andreas")
console.log("my cringiest updated", myCringiestMovies);

// pop - mutates existing array - removes last entry
myCringiestMovies.pop();
console.log("popped cringy", myCringiestMovies);

// shift - removes first entry
const removedElement = myCringiestMovies.shift();
console.log("shifted cringy", myCringiestMovies);
console.log("removed element", removedElement);

//unshift
myCringiestMovies.unshift("Ulyses");
console.log("unshifted". myCringiestMovies);

// splice
myCringiestMovies.splice(1, 0, "Topper") // (location, number of things affected)
console.log("spliced", myCringiestMovies);

// indexOf
const colors = ["red", "orange", "blue", "indigo", "green"];
console.log(colors.indexOf("green"))
const greenIndex = colors.indexOf("green");
const greenValue = colors[greenIndex];
console.log("green value", greenValue);

// concat - make two arrays into one without mutating existing arrays
const oneBigArray = myCringiestMovies.concat(myOtherMovies);
console.log(oneBigArray);

// join - exact opposite of split (turns array into one long string)
console.log(oneBigArray.join(", "))


// OBJECTS

// from curly brackets
const myBicycle = {color: "yellow", wheels: "knobby", suspension: "shocks"}; // property: "description"
console.log("bike", myBicycle);

// adding properties
myBicycle.seat = "soft and cushy";

// viewing values by key (dot and array notation)
console.log("seat, myBicycle.seat");
console.log("wheels", myBicycle["wheels"]);

// deleting properties
delete myBicycle.seat;

// Let's make a program: asking a random question
const questions = [
    {question: "red + blue", answer: "purple"},
    {question: "2 + banana", answer: "2banana"},
    {question: "adding white", answer: "tint"},
]

// 1. determine how long question set is
const questionLength = questions.length;

// 2. choose a pseudo-random number between 0 and the length of the array
// Math.floor(Math.random() * ARRAY_LENGTH)
const questionIndex = Math.floor(Math.random() * questionLength); // random # between 0 and 2

// 3. display question with window.prompt
window.prompt(questions[questionIndex].question);
if (answer === questions[question.Index].answer) {
    window.alert("you win");
}