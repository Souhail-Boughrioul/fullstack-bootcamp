// =======================================================
// 🌟 Exercise 1 : Find the numbers divisible by 23
// =======================================================

function displayNumbersDivisible(divisor = 23) {
  let sum = 0;
  const divisibleNumbers = [];

  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      divisibleNumbers.push(i);
      sum += i;
    }
  }

  console.log(divisibleNumbers.join(" "));
  console.log("Sum:", sum);
}

displayNumbersDivisible();
displayNumbersDivisible(3);
displayNumbersDivisible(45);



// =======================================================
// 🌟 Exercise 2 : Shopping List
// =======================================================

const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let total = 0;

  for (let item of shoppingList) {
    if (stock[item] > 0) {
      total += prices[item];
      stock[item]--;
    }
  }

  return total;
}

console.log("Total bill:", myBill());
console.log("Updated stock:", stock);



// =======================================================
// 🌟 Exercise 3 : What’s in my wallet ?
// =======================================================

function changeEnough(itemPrice, amountOfChange) {
  const [quarters, dimes, nickels, pennies] = amountOfChange;
  const total =
    quarters * 0.25 + dimes * 0.1 + nickels * 0.05 + pennies * 0.01;

  return total >= itemPrice;
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2, 100, 0, 0]));
console.log(changeEnough(0.75, [0, 0, 20, 5]));



// =======================================================
// 🌟 Exercise 4 : Vacations Costs
// =======================================================

function hotelCost(nights) {
  if (isNaN(nights) || nights <= 0) return "Invalid number of nights";
  return nights * 140;
}

function planeRideCost(destination) {
  if (typeof destination !== "string" || !destination) return "Invalid destination";

  destination = destination.toLowerCase();
  switch (destination) {
    case "london":
      return 183;
    case "paris":
      return 220;
    default:
      return 300;
  }
}

function rentalCarCost(days) {
  if (isNaN(days) || days <= 0) return "Invalid number of days";
  let cost = days * 40;
  if (days > 10) cost *= 0.95;
  return cost;
}

function totalVacationCost(nights, destination, days) {
  const hotel = hotelCost(nights);
  const plane = planeRideCost(destination);
  const car = rentalCarCost(days);

  console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}`);
  return car + hotel + plane;
}

console.log("Total Vacation Cost:", totalVacationCost(5, "London", 12));



// =======================================================
// 🌟 Exercise 5 : Users
// =======================================================

const div = document.getElementById("container");
console.log(div);

const lists = document.querySelectorAll(".list");

// Change Pete to Richard
lists[0].children[1].textContent = "Richard";

// Delete second li of second ul
lists[1].children[1].remove();

// Change first li of each ul to your name
lists.forEach(ul => (ul.children[0].textContent = "Souhail"));

// Add classes
lists.forEach(ul => ul.classList.add("student_list"));
lists[0].classList.add("university", "attendance");

// Style div
div.style.backgroundColor = "lightblue";
div.style.padding = "10px";

// Hide “Dan”
lists[1].lastElementChild.style.display = "none";

// Add border to “Richard”
lists[0].children[1].style.border = "1px solid black";

// Change body font size
document.body.style.fontSize = "18px";

// Bonus
if (div.style.backgroundColor === "lightblue") {
  alert("Hello John and Pete");
}



// =======================================================
// 🌟 Exercise 6 : Change the navbar
// =======================================================

const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

const newLi = document.createElement("li");
const newText = document.createTextNode("Logout");
newLi.appendChild(newText);

const ul = navDiv.querySelector("ul");
ul.appendChild(newLi);

console.log("First link:", ul.firstElementChild.textContent);
console.log("Last link:", ul.lastElementChild.textContent);



// =======================================================
// 🌟 Exercise 7 : My Book List
// =======================================================

const allBooks = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://images-na.ssl-images-amazon.com/images/I/81t2CVWEsUL.jpg",
    alreadyRead: true
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg",
    alreadyRead: false
  }
];

const section = document.querySelector(".listBooks");

allBooks.forEach((book) => {
  const divBook = document.createElement("div");
  divBook.classList.add("book");

  const title = document.createElement("h3");
  title.textContent = `${book.title} written by ${book.author}`;

  const img = document.createElement("img");
  img.src = book.image;

  if (book.alreadyRead) {
    divBook.style.color = "red";
  }

  divBook.append(title, img);
  section.appendChild(divBook);
});
