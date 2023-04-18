const readLine = require('readline-sync');

let word = readLine.question("noun: ");
//put the word into an array
//and repeat

let myList=[];
myList.push('item');
myList.push('item2');
myList.push(readLine.question('Enter a noun:'));

console.log('My List has ${myList[0]} and ${myList[1]}');


