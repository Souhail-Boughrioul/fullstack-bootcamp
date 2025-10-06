// Exercise 1 : Scope
// =========================
// #1 - let vs const inside function
// =========================
function funcOne() {
    let a = 5;
    if (a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// Run
funcOne();

// If we use const here:
// const a = 5;
// a = 3; TypeError: Assignment to constant variable


// =========================
// #2 - Global scope vs const
// =========================
let a = 0;

function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// Run sequence
funcThree(); // 0
funcTwo();   // changes global a to 5
funcThree(); // 5

// If we use const a = 0;
// funcTwo()  TypeError (can't reassign)


// =========================
// #3 - Using window to create globals
// =========================
function funcFour() {
    window.a = "hello"; // creates global a on window
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// Run
funcFour();
funcFive(); // hello


// =========================
// #4 - Shadowing variables
// =========================
let b = 1;

function funcSix() {
    let b = "test";
    alert(`inside the funcSix function ${b}`);
}

// Run
funcSix(); // "test"

// If we use const, still works:
// const b = 1;
// const b = "test"; inside function → OK because new scope.


// =========================
// #5 - Block scope with let/const
// =========================
let c = 2;

if (true) {
    let c = 5;
    alert(`in the if block ${c}`);
}

alert(`outside of the if block ${c}`);

// Output:
// in the if block 5
// outside of the if block 2

// const works the same in block scope.

// Exercise 2 : Ternary operator
// Original function
// function winBattle(){
//     return true;
// }

// 1. Transform to arrow function
const winBattle = () => true;

// 2. Create variable experiencePoints with ternary
const experiencePoints = winBattle() ? 10 : 1;

// 3. Log the result
console.log(experiencePoints); // Output: 10

//  Exercise 3 : Is it a string ?
// Arrow function to check if a value is a string
const isString = (value) => typeof value === 'string';

// Test cases
console.log(isString('hello'));      // true
console.log(isString([1, 2, 4, 0])); // false
console.log(isString(123));         // false
console.log(isString("123"));       // true

// Exercise 4 : Find the sum
//  One-line arrow function to find the sum of two numbers
const sum = (a, b) => a + b;

//  Test cases
console.log(sum(5, 3));  // 8
console.log(sum(10, 20)); // 30

//  Exercise 5 : Kg and grams
//  1. Function Declaration
function kgToGrams(weightInKg) {
    return weightInKg * 1000;
}

// Invoke
console.log(kgToGrams(5)); // 5000


//  2. Function Expression
const convertKgToGrams = function(weightInKg) {
    return weightInKg * 1000;
};

// Invoke
console.log(convertKgToGrams(2.5)); // 2500


//  Difference between function declaration and function expression
// Function declarations are hoisted (can be called before they're defined), 
// while function expressions are not hoisted.


//  3. One-line Arrow Function
const toGrams = kg => kg * 1000;

// Invoke
console.log(toGrams(1.2)); // 1200

