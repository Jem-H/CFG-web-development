// Test display in developer tools
//console.log('It is possible');

// Alert box
//alert('It works');
//Note: can't seem to have both alert and prompt at once?

// Prompt box
//let myName = prompt('What is your name?');
//console.log(myName);

let name = 'John Smith';

// DATA TYPES 
//number values
let userNumber = 12345;
console.log(userNumber);
console.log(typeof userNumber);

// strings values
let userName = 'John Smith';
console.log(userName);
console.log(typeof userName);

// undefined values
let userLocation;
console.log(userLocation);

// null values
let userAge = null;
console.log(userAge);

// boolean values
let isUserMarried = false;
let hasUserSubscribed = true;


// DATA TYPES EXERCISE
//let firstname = prompt(`Enter your name`);
//let greeting = console.log(`Hi my name is ${firstname}`);

// IF/ELSE STATEMENTS 
let myAge = 16;

if(myAge > 18) {
    // if false, this code will not run
    console.log('This person can drive');
} else {
    console.log(`You are too young!`);
}

// IF/ELSE EXERCISE

// ARRAY 
// This is time consuming
let fruit = 'Banana';
let fruit2 = 'Apple';
let fruit3 = 'Orange';

// An array is a better way to store these variables
let fruits = ['Banana', 'Apple', 'Orange']
console.log(fruits);
// Arrays start from element 0
console.log(fruits[1]);

// Add new element
fruits.push('blueberry');
console.log(fruits);
// Remove element
let newFruits = fruits.slice(1);
console.log(newFruits);

// Array splice() 
// https://www.w3schools.com/js/js_array_methods.asp
newFruits.splice(1, 0, 'grapes');
console.log(newFruits);

let fruitBasket = newFruits.join(' and ');
console.log(fruitBasket);

// ARRAY EXERCISE

// FINAL CLASS EXERCISE
