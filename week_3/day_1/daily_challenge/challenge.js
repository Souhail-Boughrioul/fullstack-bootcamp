// Challenge 1
// Create the sentence variable
let sentence = "The movie is not that bad, I like it";

// Find the index of "not" and "bad"
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

// Check if "bad" comes after "not"
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  // Replace "not ... bad" with "good"
  let partToReplace = sentence.substring(wordNot, wordBad + 3); // +3 to include 'bad'
  let newSentence = sentence.replace(partToReplace, "good");
  console.log(newSentence);
} else {
  // If condition is not met, print original
  console.log(sentence);
}

// Challenge 2
// one loop
let pattern = "";

for (let i = 1; i <= 6; i++) {    
  pattern += "* ".repeat(i) + "\n";  
}
console.log(pattern);

// nested loops
let pattern2 = "";

for (let i = 1; i <= 6; i++) {           
  for (let j = 1; j <= i; j++) {        
    pattern2 += "* ";
  }
  pattern2 += "\n";                      
}

console.log(pattern2);

