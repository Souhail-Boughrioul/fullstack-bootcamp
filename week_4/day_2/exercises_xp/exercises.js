// Exercise 1 : Colors

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

//  1. Display the colors with their rank
colors.forEach((color, index) => {
  console.log(`${index + 1}# choice is ${color}.`);
});

//  2. Check if at least one element equals "Violet"
if (colors.includes("Violet")) {
  console.log("Yeah");
} else {
  console.log("No...");
}

// Exercise 2 : Colors #2

const ordinal = ["th", "st", "nd", "rd"]; // index 0 is "th" for default

colors.forEach((color, index) => {
  const position = index + 1;

  // Determine suffix using ternary operator
  const suffix = (position === 1) ? ordinal[1] :
                 (position === 2) ? ordinal[2] :
                 (position === 3) ? ordinal[3] :
                 ordinal[0];

  console.log(`${position}${suffix} choice is ${color}.`);
});

// Exercise 3
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// ["bread", "carrot", "potato", "chicken", "apple", "orange"] OUTPUT

const country = "USA";
console.log([...country]);
// ["U", "S", "A"] OUTPUT

let newArray = [...[,,]];
console.log(newArray);
// [undefined, undefined] OUTPUT

// Exercise 4: Employees
const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

//  1. Using map() to create welcome messages
const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);
// ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]


//  2. Using filter() to get only Full Stack Residents
const fullStackResidents = users.filter(user => user.role === 'Full Stack Resident');
console.log(fullStackResidents);
// Returns array of objects with role 'Full Stack Resident'


// 3. BONUS: Chaining filter() + map() to get only their last names
const lastNamesOfResidents = users
  .filter(user => user.role === 'Full Stack Resident')
  .map(user => user.lastName);

console.log(lastNamesOfResidents);
// ["Bouley", "Alnaji", "Hajek"]

// Exercise 5: Star Wars
const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

//  Using reduce() to combine into a single string
const sentence = epic.reduce((accumulator, currentWord) => {
  return accumulator + ' ' + currentWord;
});

console.log(sentence);
// Output: "a long time ago in a galaxy far far away"

// Exercise 6: Employees #2

const students = [
  {name: "Ray", course: "Computer Science", isPassed: true}, 
  {name: "Liam", course: "Computer Science", isPassed: false}, 
  {name: "Jenner", course: "Information Technology", isPassed: true}, 
  {name: "Marco", course: "Robotics", isPassed: true}, 
  {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
  {name: "Jamie", course: "Big Data", isPassed: false}
];

// 1. Filter the students who passed
const passedStudents = students.filter(student => student.isPassed);
console.log(passedStudents);

// 2. Bonus: Congratulate them using forEach after filtering
students
  .filter(student => student.isPassed)
  .forEach(student => {
    console.log(`Good job ${student.name}, you passed the course in ${student.course}!`);
  });
