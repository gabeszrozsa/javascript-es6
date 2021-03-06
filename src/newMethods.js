/*jshint esversion: 6 */

let theString = "Hello, my name is James Bond and I'm here to save the world!";


console.log(theString.startsWith('Hello')); //true

console.log(theString.endsWith('!')); //true

console.log(theString.includes('Bond')); //true

// hex
console.log(0xFF); //255

// binary
console.log(0b101011); //43

// octal
console.log(0o543); //355

console.log(Number.isFinite(3)); //true
console.log(Number.isFinite(-3)); //true
console.log(Number.isFinite(Infinity)); //false
console.log(Number.isFinite(NaN)); //false
