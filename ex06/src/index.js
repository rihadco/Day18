// Only change code below this line
let rockStar = new Map([
    ["artist", "The Rolling Stones"],
    ["song", "Angie"],
    ["album", "Goats Head Soup"],
    ["singer", "Mick Jagger"],
]);

let newRock = new Map([...rockStar].filter(([col]) => { return col[0] > "a"; }));

console.log(newRock);
// Only change code above this line
module.exports = { rockStar, newRock };