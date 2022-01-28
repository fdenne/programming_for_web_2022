const games = [
{
    title: "Destiny 2",
    type: "PC game",
    numberOfPlayers: "1-6",
    rating: "7/10",
    shortDescription: "Destiny 2 is a first-person shooter set in a post-apocalyptic future. Space opera drama, but online play makes PvP very difficult if you're not experienced."
},
{
    title: "Spiritfarer",
    type: "PC game",
    numberOfPlayers: "1-2",
    rating:"9.5/10",
    shortDescription:"The most adorable management game where you are tasked with granting spirits their last wishes as they cross over to the other side.",
},
{
    title: "The Gardens Between",
    type: "PC game",
    numberOfPlayers: "1",
    rating:"7.5/10",
    shortDescription:"Beautifully designed puzzle game taking place in a nostalgic journey through two friends' shared memories.",
},
{
    title: "PikuNiku",
    type: "PC game",
    numberOfPlayers: "1",
    rating:"9.5/10",
    shortDescription:"Delightfully anti-capitalist platformer game in which you hop around a small town, saving it from being taken over by a corporation.",
}
]
console.log(games);

const gameSelection = window.prompt("I have 4 games in my collection. Pick a number between 1 and 4 and I'll tell you about that game.");

window.alert("You selected " + games[gameSelection - 1].title + " which is a " + games[gameSelection - 1].type + ". This is a game for " + games[gameSelection - 1].numberOfPlayers + " player(s). I rate it as " + games[gameSelection - 1].rating + " out of 10. " + games[gameSelection - 1].shortDescription);
