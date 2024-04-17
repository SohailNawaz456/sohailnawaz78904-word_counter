#! /usr/bin/env node
// import the 'inquirer' module, which is a command line interface for Node.js.
import inquirer from "inquirer";
// Declare a constant 'answers' and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "Sentence",
        message: "Enter a sentence to count the word: "
    }
]);
const words = answers.Sentence.trim().split(" ");
//print the array of words to the console
console.log(words);
// print the words count of the sentence to the console
console.log(`Your sentance word count is ${words.length}`);
