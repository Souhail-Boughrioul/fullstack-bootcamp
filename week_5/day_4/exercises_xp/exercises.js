// Exercise 1: Multiple Exports and Import using CommonJS syntax
// All in one file 
// ==============================

// Step 1: Create an array of product objects
// Each product has a name, price, and category
const products = [
    { name: "Laptop", price: 1200, category: "Electronics" },
    { name: "Phone", price: 800, category: "Electronics" },
    { name: "Shoes", price: 100, category: "Clothing" },
    { name: "Book", price: 20, category: "Education" }
];

// Step 2: Exporting the array (CommonJS syntax)
// In a real separate file (products.js), you'd write:
// module.exports = products;
// Since everything is in one file, we don't need actual export here

// Step 3: Importing the array
// In a real separate file (shop.js), you'd require it like:
// const products = require('./products');
// Again, in this single-file version, products is already available

// Step 4: Create a function that searches for a product by name
function findProductByName(productName) {
    const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());

    if (product) {
        console.log("Product Found:");
        console.log(`Name: ${product.name}`);
        console.log(`Price: $${product.price}`);
        console.log(`Category: ${product.category}`);
    } else {
        console.log(`Product "${productName}" not found.`);
    }
}

// Step 5: Test the function with different product names
findProductByName("Laptop");  
findProductByName("Shoes");   
findProductByName("Phone");   
findProductByName("Tablet");  

// ==============================
// Exercise 2: Advanced Module Usage using ES6 module syntax
// All in one file for demonstration
// ==============================

// Step 1: Define an array of person objects
// Each person has a name, age, and location
const persons = [
    { name: "Alice", age: 25, location: "New York" },
    { name: "Bob", age: 30, location: "London" },
    { name: "Charlie", age: 35, location: "Paris" },
    { name: "Diana", age: 28, location: "Tokyo" }
];

// Step 2: Export the array (ES6 module syntax)
// In a real separate file (data.js), you would write:
// export const persons = persons;
// Since everything is in one file, we don't actually export here

// Step 3: Import the array
// In a real separate file (app.js), you would import it like:
// import { persons } from './data.js';
// Again, in this single-file version, persons is already available

// Step 4: Create a function that calculates the average age
function calculateAverageAge(personArray) {
    const totalAge = personArray.reduce((sum, person) => sum + person.age, 0);

    // Calculate average
    const averageAge = totalAge / personArray.length;

    console.log(`Average age of all persons: ${averageAge.toFixed(2)}`);
}

// Step 5: Use the imported array and function
calculateAverageAge(persons);  

// ==============================
// Exercise 3: File Management using CommonJS
// All in one file for demonstration
// ==============================

// Step 1: Import the 'fs' module to work with files
const fs = require('fs');
const path = require('path'); // optional, helps with file paths

// Step 2: Define the fileManager module
// Normally, this would be in fileManager.js
const fileManager = {

    // Function to read the content of a file
    readFile: (fileName) => {
        try {
            // Read file synchronously
            const data = fs.readFileSync(fileName, 'utf8');
            console.log(`Content of "${fileName}":\n${data}`);
            return data;
        } catch (err) {
            console.error(`Error reading file "${fileName}":`, err.message);
        }
    },

    // Function to write content to a file
    writeFile: function(fileName, content) {
        try {
            // Write file synchronously
            fs.writeFileSync(fileName, content, 'utf8');
            console.log(`Content written to "${fileName}" successfully.`);
        } catch (err) {
            console.error(`Error writing to file "${fileName}":`, err.message);
        }
    }
};

// Step 3: Exporting functions (CommonJS syntax)
// In a separate fileManager.js, you would use:
// module.exports = fileManager;
// Since everything is in one file, we already have access to fileManager

// ==============================
// Step 4: Simulate the app.js usage
// ==============================

// Step 4a: Create sample text files (normally these files would already exist)
fs.writeFileSync('Hello World.txt', 'Hello World !!', 'utf8');
fs.writeFileSync('Bye World.txt', 'Bye World !!', 'utf8');

// Step 4b: Use readFile to read "Hello World.txt"
fileManager.readFile('Hello World.txt');

// Step 4c: Use writeFile to write to "Bye World.txt"
fileManager.writeFile('Bye World.txt', 'Writing to the file');

// Step 5: Verify the written content by reading "Bye World.txt"
fileManager.readFile('Bye World.txt');

// ==============================
// Exercise 4: Todo List using ES6 Module Syntax
// All in one file for demonstration
// ==============================

// Step 1: Define the TodoList class
// Normally, this would be inside todo.js
class TodoList {
    constructor() {
        // Each task will be stored as an object: { task: "Task name", completed: false }
        this.tasks = [];
    }

    // Add a new task
    addTask(task) {
        this.tasks.push({ task, completed: false });
        console.log(`Task added: "${task}"`);
    }

    // Mark a task as complete by name
    markComplete(taskName) {
        const task = this.tasks.find(t => t.task.toLowerCase() === taskName.toLowerCase());
        if (task) {
            task.completed = true;
            console.log(`Task marked as complete: "${taskName}"`);
        } else {
            console.log(`Task "${taskName}" not found.`);
        }
    }

    // List all tasks with their completion status
    listTasks() {
        console.log("\n=== Todo List ===");
        if (this.tasks.length === 0) {
            console.log("No tasks available.");
        } else {
            this.tasks.forEach((t, index) => {
                const status = t.completed ? "Completed" : "Not Completed";
                console.log(`${index + 1}. ${t.task} - ${status}`);
            });
        }
    }
}

// Step 2: Export the class (ES6 syntax)
// In a separate file (todo.js), you'd write:
// export class TodoList { ... }
// Since everything is in one file, we don't actually export here.

// ==============================
// Step 3: Simulate app.js
// ==============================

// In a real app.js file, you'd write:
// import { TodoList } from './todo.js';

// Create an instance of the TodoList class
const myTodos = new TodoList();

// Add a few tasks
myTodos.addTask("Finish homework");
myTodos.addTask("Go to the gym");
myTodos.addTask("Buy groceries");
myTodos.addTask("Read a book");

// Mark some tasks as complete
myTodos.markComplete("Go to the gym");
myTodos.markComplete("Read a book");

// List all tasks
myTodos.listTasks();

// ==============================
// Exercise 5: Creating and Using a Custom Module
// All in one file for demonstration
// ==============================

// Step 1: Initialize a Node.js project (in real life)
// --------------------------------------------------
// In your terminal, run this:
//     mkdir math-app
//     cd math-app
//     npm init -y
// This creates a package.json file for your Node.js project.

// Step 2: Install lodash (utility library)
// --------------------------------------------------
// Run in terminal inside the math-app folder:
//     npm install lodash

// Step 3: Create a custom math module (math.js)
// --------------------------------------------------
// Normally, this would be in a separate file called math.js.
// We'll define it here for demonstration.

const math = {
    // Function for addition
    add: (a, b) => a + b,

    // Function for multiplication
    multiply: (a, b) => a * b
};

// Step 4: Export the module (CommonJS syntax)
// In real math.js, you’d write:
// module.exports = math;
// But since everything is in one file, no need to export here.

// ==============================
// Step 5: Simulate app.js
// ==============================

// In real app.js, you’d import your module and lodash like this:
// const _ = require('lodash');
// const math = require('./math');

// Since lodash is installed globally for demonstration,
// we’ll require it here:
const _ = require('lodash');

// Step 6: Use the custom math module and lodash utilities
// -------------------------------------------------------

// Perform basic math using our custom module
const sum = math.add(10, 5);
const product = math.multiply(4, 3);

// Use lodash utilities for extra operations
const numbers = [10, 20, 30, 40, 50];
const maxNumber = _.max(numbers);
const minNumber = _.min(numbers);
const average = _.mean(numbers);

// Step 7: Print results
// -------------------------------------------------------
console.log("=== Math Operations ===");
console.log(`10 + 5 = ${sum}`);
console.log(`4 * 3 = ${product}`);

console.log("\n=== Lodash Calculations ===");
console.log(`Numbers: [${numbers}]`);
console.log(`Max: ${maxNumber}`);
console.log(`Min: ${minNumber}`);
console.log(`Average: ${average}`);

// ==============================
// Exercise 6: Simple NPM Package Usage (chalk)
// All in one file for demonstration
// ==============================

// When we create a new Node.js project using "npm init -y",
// npm automatically generates a file called package.json.
// This file stores information about our project and all the dependencies we install.

// In this exercise, we install a package called "chalk" using the command:
//     npm install chalk
// Chalk is a popular Node.js library that helps you add colors and styles
// to the text you print in the terminal. It makes console outputs more readable and fun.

// After installing, Node adds chalk to the "node_modules" folder
// and lists it as a dependency in package.json.

// Now, we can import it into our code to start using it.

// Chalk v5+ uses ES6 modules, so we import it like this:
// import chalk from "chalk";  

// (Node project doesn’t support ES6 imports, so instead i use:
const chalk = require('chalk'); 

// Chalk provides many color and style methods like .green(), .bold(), .underline(), etc.
// These methods are chainable, meaning we can combine multiple styles together.
// For example: chalk.blue.bold("Hello") gives us bold blue text.

// Let's use chalk to print colorful messages to the terminal:

// This prints text in green color
console.log(chalk.green("Success! You are learning Node.js and npm."));

// This prints text in yellow color and makes it bold
console.log(chalk.yellow.bold("Keep practicing every day!"));

// This prints text in blue color and underlines it
console.log(chalk.blue.underline("Chalk makes your terminal colorful!"));

// This prints text in red color and reverses the background and text color
console.log(chalk.red.inverse("Error messages can look like this too."));

// This prints text in bright magenta color
console.log(chalk.magentaBright("Pro tip: Combine colors and styles easily!"));

/*****************************************************
 * Exercise 7: Reading and Copying Files
 * ---------------------------------------------------
 * This combines the functionality of two files:
 * copy-file.js — reads from source.txt and writes to destination.txt
 * read-directory.js — lists all files in the current directory
 *****************************************************/

// Step 1: Import the fs module
// fs is the Node.js File System module used for reading/writing files
// const fs = require("fs");

// ==============================
// Part 1: Copying a file (copy-file.js)
// ==============================

// Define source and destination file paths
const sourceFile = "source.txt";
const destinationFile = "destination.txt";

// Check if the source file exists
if (fs.existsSync(sourceFile)) {
  // Read the content of source.txt asynchronously
  fs.readFile(sourceFile, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading source file:", err);
      return;
    }

    console.log("Content of source.txt:");
    console.log(data);

    // Write the same content to destination.txt
    fs.writeFile(destinationFile, data, "utf8", (err) => {
      if (err) {
        console.error("Error writing to destination file:", err);
        return;
      }

      console.log("Content successfully copied to destination.txt!");
    });
  });
} else {
  console.log("'source.txt' not found. Please create it first.");
}

// ==============================
// Part 2: Reading the directory (read-directory.js)
// ==============================

// Function to list all files in the current directory
function listFiles() {
  // __dirname is the path of the current directory
  fs.readdir(__dirname, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    console.log("\n Files in the current directory:");
    files.forEach((file) => console.log(" - " + file));
  });
}

// Call the function to list the files
listFiles();

/*****************************************************
 * How to use:
 * Create a file named 'source.txt' in the same folder.
 *     Add some text inside it.
 * Run this script in the terminal:
 *     node exercises.js
 * Output:
 *    - Displays the content of source.txt
 *    - Creates destination.txt with the same content
 *    - Lists all files in the current folder
 *****************************************************/

// List all files in the current directory
fs.readdir(__dirname, (err, files) => {
  if (err) return console.log("Error reading directory:", err);
  console.log("Files in this directory:");
  files.forEach((file) => console.log(file));
});



