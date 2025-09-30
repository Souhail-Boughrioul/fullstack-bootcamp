// Exercise 1 : List of people
const people = ["Greg", "Mary", "Devon", "James"];
// remove Greg
people.shift(); 
// replace “James” to “Jason”
people[people.length - 1] = "Jason";
// add my name to the end of the people array
people.push("Souhail");
// Mary’s index
console.log(people.indexOf("Mary"))
// make a copy of the people array using the slice method
const peopleCopy = people.slice(1,3);
// it return -1 because there is no Foo in people array
people.indexOf("Foo");
// the last element of an array its index = length - 1
const last = people[people.length - 1];
// part II loops
for(person of people){
    console.log(person)
}

for(person of people){
    if(person === "Jason"){
        break;
    }
    console.log(person)
}

// Exercise 2 : Your favorite colors
const colors = ["Black","Red","Bleu","Green"];

for(let i = 1; i < colors.length + 1; i++){
    console.log(`my #${i} choice is ${colors[i-1]} `)
}

const suffixes = ["st", "nd", "rd", "th", "th"];  // for 1st, 2nd, 3rd, 4th, 5th

for (let i = 1; i < colors.length + 1; i++) {
  const position = i ;
  const suffix = suffixes[i - 1] || "th"; // fallback if more than 5
  console.log(`My ${position}${suffix} choice is ${colors[i - 1]}`);
}

// Exercise 3 : Repeat the question
let userNumber = prompt("Please enter a number:");

// Convert the input to a number type
userNumber = Number(userNumber);

// Keep asking while the number is less than 10
while (userNumber < 10) {
  userNumber = Number(prompt("The number is too small. Please enter a new number:"));
}

console.log(`You entered ${userNumber}, which is 10 or more.`);

// Exercise 4 : Building Management
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
};

// Console.log the number of floors in the building
console.log("Number of floors:", building.numberOfFloors);

// Console.log how many apartments are on floors 1 and 3
const floor1Apts = building.numberOfAptByFloor.firstFloor;
const floor3Apts = building.numberOfAptByFloor.thirdFloor;
console.log(`Floor 1 has ${floor1Apts} apartments.`);
console.log(`Floor 3 has ${floor3Apts} apartments.`);

// Console.log the name of the second tenant and number of rooms he has
const secondTenant = building.nameOfTenants[1]; // "Dan"
const secondTenantRooms = building.numberOfRoomsAndRent.dan[0]; // 4
console.log(`The second tenant is ${secondTenant} and he has ${secondTenantRooms} rooms.`);

// Check if Sarah's + David's rent is bigger than Dan's rent
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log(`Dan's rent was increased to ${building.numberOfRoomsAndRent.dan[1]}`);
} else {
    console.log("No change in Dan's rent.");
}

// Exercise 5 : Family
//  Create an object called family
const family = {
  father: "Ahmed",
  mother: "Fatima",
  son: "Youssef",
  daughter: "Sara"
};

// Using a for...in loop, console.log the keys
console.log("Family keys:");
for (let key in family) {
  console.log(key);
}

// Using a for...in loop, console.log the values
console.log("Family values:");
for (let key in family) {
  console.log(family[key]);
}

// Exercise 6 : Rudolf
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
};

let sentence = "";

// Loop through the object
for (let key in details) {
  sentence += key + " " + details[key] + " ";
}

console.log(sentence.trim());

// Exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// Get the first letter of each name
let firstLetters = [];

for (let i = 0; i < names.length; i++) {
  firstLetters.push(names[i][0]);
}

// Sort the letters alphabetically
firstLetters.sort();

// Join them into a single string
const secretName = firstLetters.join("");

// Display the result
console.log(secretName);