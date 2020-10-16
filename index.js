let readlineSync = require('readline-sync');
if (readlineSync.keyInYN('Are you interested in learning more code?')) {
    console.log('Let\'s work on the next module.')
} else {
    console.log('Let\'s find something more interesting');
}
let animal = readlineSync.question('What is your favorite animal?');
console.log(`My favorite animal is ${animal}.`);
if (readlineSync.keyInYN('Do you like animals more than people?')) {
    console.log(`You must really love ${animal}.`);
} else {
    console.log('We love you too!');
}