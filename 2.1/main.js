const mellodysMovies = "Titanic, The Color Purple, Miss Juneteenth, Tumbleweeds, I Know What You Did Last Summer".split(", ");
console.log("Mellody's Movies", mellodysMovies);
const yourFave = window.prompt("Please enter a favorite movie of yours");
mellodysMovies.push(yourFave);
const ourMovies = window.alert(mellodysMovies.toString());