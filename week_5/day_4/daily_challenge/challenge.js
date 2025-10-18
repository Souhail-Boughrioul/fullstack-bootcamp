/*****************************************************
 * Task 1: Basic Module System (One File Version)
 * ---------------------------------------------------
 * This demonstrates the same functionality of
 * greeting.js and app.js in a single file,
 * fully runnable in Node.js.
 *****************************************************/

// -----------------------------
// Step 1: Define the module (greeting.js)
// -----------------------------

// Function that takes a name and returns a personalized greeting
function greet(name) {
  return `Hello, ${name}! Welcome to Node.js.`;
}

// -----------------------------
// Step 2: Use the module (app.js)
// -----------------------------

// Normally, we would import greet using:
// const greet = require('./greeting');
// But since everything is in one file, we can just call the function

const userName = "Souhail"; 
const message = greet(userName); 

// Display the greeting message in the terminal
console.log(message);

/*****************************************************
 * How it works:
 * greet() function defines the greeting logic.
 * In a real project, we could export it with module.exports.
 * Here, we call greet() directly with a name.
 * console.log prints the greeting to the terminal.
 *
 * Output:
 * Hello, Souhail! Welcome to Node.js.
 *****************************************************/

/*****************************************************
 * Task 2: Using an NPM Module (Chalk)
 * ---------------------------------------------------
 * This combines the functionality of two files:
 * colorful-message.js — defines a function that uses Chalk to create a colorful message
 * app.js — imports the function and displays the message
 *
 * We are using CommonJS (require/module.exports) syntax.
 *****************************************************/

// -----------------------------
// Step 1: Require the chalk package
// -----------------------------

const chalk = require("chalk");

// -----------------------------
// Step 2: Define a function to display a colorful message
// Normally, this would be in colorful-message.js
// -----------------------------
function displayColorfulMessage() {
  console.log(chalk.green("Success! Learning Node.js is fun!"));
  console.log(chalk.yellow.bold("Keep practicing every day!"));
  console.log(chalk.blue.underline("Chalk makes your terminal colorful!"));
  console.log(chalk.red.inverse("Error messages can look like this too."));
  console.log(chalk.magentaBright("Pro tip: Combine colors and styles easily!"));
}

// Export the function as a module (like colorful-message.js)
module.exports = displayColorfulMessage;

// -----------------------------
// Step 3: Use the function (app.js)
// -----------------------------

// Normally in app.js you would do:
// const displayColorfulMessage = require('./colorful-message');
// Since everything is in one file, we just call the function directly

displayColorfulMessage();

/*****************************************************
 * How it works:
 * chalk package provides methods to style console text.
 * displayColorfulMessage() prints multiple colored messages.
 * module.exports allows the function to be used in other files.
 * console.log displays the styled text in the terminal.
 *****************************************************/

/*****************************************************
 * Task 3: Advanced File Operations
 * ---------------------------------------------------
 * This exercise demonstrates reading a file using Node.js.
 * We combine the functionality of two files:
 * read-file.js — defines a function to read file content
 * app.js — imports the function and displays the content
 *****************************************************/

// -----------------------------
// Step 1: Import the fs module
// fs = Node.js built-in file system module
// -----------------------------
const fs = require("fs");
const path = require("path"); 

// -----------------------------
// Step 2: Define a function to read a file (read-file.js)
// -----------------------------
function readFileContent() {
  // Define the file path (files/file-data.txt)
  const filePath = path.join(__dirname, "files", "file-data.txt");

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading the file:", err);
        return;
      }

      // Display the content in the terminal
      console.log("Content of file-data.txt:");
      console.log(data);
    });
  } else {
    console.log("file-data.txt not found. Please create it inside the 'files' folder.");
  }
}

// Export the function as if this were read-file.js
module.exports = readFileContent;

// -----------------------------
// Step 3: Use the function (app.js)
// -----------------------------

// Normally in app.js, you would do:
// const readFileContent = require('./read-file');
// Since everything is in one file, we can call the function directly
readFileContent();

/*****************************************************
 * How it works:
 * fs.readFile() reads the content of a file asynchronously.
 * fs.existsSync() checks if the file exists to avoid errors.
 * path.join() helps create a correct file path across OSes.
 * console.log displays the file content in the terminal.
 *
 * To run:
 * Create a folder named 'files' in the same directory.
 * Create a file inside it: file-data.txt and add some text.
 * Run this file: node exercises.js
 * You should see the content of file-data.txt printed in the terminal.
 *****************************************************/

/*****************************************************
 * Challenge Task: Integrating Everything
 * ---------------------------------------------------
 * This file combines the previous tasks into one:
 * Greet the user
 * Display a colorful message using chalk
 * Read and display content from a file
 *
 * CommonJS syntax is used for all modules.
 *****************************************************/

// -----------------------------
// Step 0: Import built-in and NPM modules
// -----------------------------
// const fs = require("fs");
// const path = require("path");
// const chalk = require("chalk"); 

// -----------------------------
// Step 1: Define the greeting module (Task 1)
// -----------------------------
function greet(name) {
  return `Hello, ${name}! Welcome to Node.js.`;
}

// Export the greet function (simulated module)
const greetingModule = { greet };

// -----------------------------
// Step 2: Define the colorful message module (Task 2)
// -----------------------------
function displayColorfulMessage() {
  console.log(chalk.green("Success! Learning Node.js is fun!"));
  console.log(chalk.yellow.bold("Keep practicing every day!"));
  console.log(chalk.blue.underline("Chalk makes your terminal colorful!"));
  console.log(chalk.red.inverse("Error messages can look like this too."));
  console.log(chalk.magentaBright("Pro tip: Combine colors and styles easily!"));
}

// Export the function (simulated module)
const colorfulMessageModule = { displayColorfulMessage };

// -----------------------------
// Step 3: Define the read file module (Task 3)
// -----------------------------
function readFileContent() {
  const filePath = path.join(__dirname, "files", "file-data.txt");

  if (fs.existsSync(filePath)) {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error("Error reading the file:", err);
        return;
      }
      console.log("\n Content of file-data.txt:");
      console.log(data);
    });
  } else {
    console.log("file-data.txt not found. Please create it inside the 'files' folder.");
  }
}

// Export the function (simulated module)
const readFileModule = { readFileContent };

// -----------------------------
// Step 4: Use all modules together (Challenge Task)
// -----------------------------
// const userName = "Souhail"; 

// Greet the user
const greetingMessage = greetingModule.greet(userName);
console.log(greetingMessage);

// Display colorful messages
colorfulMessageModule.displayColorfulMessage();

// Read and display file content
readFileModule.readFileContent();

/*****************************************************
 * How to use:
 * Create a folder named 'files' and inside it:
 *     file-data.txt with some text content.
 * Run this file: node challenge.js
 * Output:
 *    - Personalized greeting
 *    - Colorful messages in terminal
 *    - Content of file-data.txt
 *****************************************************/

