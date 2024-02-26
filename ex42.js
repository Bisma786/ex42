"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
const magicianNames = ["Vikral aur Gabraal", "Shakalaka", "Hamoon Jadugar", "Harry Potter", "Ainak Wala Jin", "Aladin"];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const greatMagicians = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
}
const greatMagicianNames = make_great(magicianNames);
console.log("Orignal Magicians:");
show_magicians(magicianNames);
console.log("\n Great Magicians:");
show_magicians(greatMagicianNames);
