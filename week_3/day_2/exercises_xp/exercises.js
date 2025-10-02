// Exercise 1 : Find the numbers divisible by 23
const displayNumbersDivisible = ()=>{
    let sum = 0;
    for(let i = 0; i<= 500; i++){
        
        if(i % 23 === 0){
            console.log(i)
            sum += i;
        }
        
    }
    console.log("Sum:", sum)
}

displayNumbersDivisible()

// Exercise 2 : Shopping List
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

const shoppingList = ["banana","orange","apple"];

const myBill = () => {
  let total = 0;

  for (let item of shoppingList) {
    // Check if the item exists in stock and is available
    if (item in stock && stock[item] > 0) {
      total += prices[item];   
      stock[item] -= 1;      
    }
  }

  return total;
}

// Call the function
const totalPrice = myBill();
console.log("Total price:", totalPrice);
console.log("Updated stock:", stock);

// Exercise 3 : What’s in my wallet ?
function changeEnough(itemPrice, amountOfChange) {
  const quarterValue = 0.25;
  const dimeValue = 0.10;
  const nickelValue = 0.05;
  const pennyValue = 0.01;

  // amountOfChange = [quarters, dimes, nickels, pennies]
  const total =
    amountOfChange[0] * quarterValue +
    amountOfChange[1] * dimeValue +
    amountOfChange[2] * nickelValue +
    amountOfChange[3] * pennyValue;

  return total >= itemPrice;
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));  
console.log(changeEnough(14.11, [2, 100, 0, 0]));
console.log(changeEnough(0.75, [0, 0, 20, 5]));   

// Exercise 4 : Vacations Costs
function hotelCost() {
  let nights;
  do {
    nights = prompt("How many nights would you like to stay in the hotel?");
  } while (isNaN(nights) || nights === "" || nights === null);

  const costPerNight = 140;
  return Number(nights) * costPerNight;
}

function planeRideCost() {
  let destination;
  do {
    destination = prompt("What is your destination?");
  } while (!destination || !isNaN(destination)); // must be a non-empty string

  destination = destination.trim().toLowerCase();

  if (destination === "london") return 183;
  else if (destination === "paris") return 220;
  else return 300;
}

function rentalCarCost() {
  let days;
  do {
    days = prompt("How many days would you like to rent the car?");
  } while (isNaN(days) || days === "" || days === null);

  days = Number(days);
  const costPerDay = 40;
  let total = days * costPerDay;

  if (days > 10) {
    total = total * 0.95; // apply 5% discount
  }

  return total;
}

function totalVacationCost() {
  const hotelPrice = hotelCost();
  const planePrice = planeRideCost();
  const carPrice = rentalCarCost();

  const total = hotelPrice + planePrice + carPrice;

  console.log(
    `The car cost: $${carPrice}, the hotel cost: $${hotelPrice}, the plane tickets cost: $${planePrice}`
  );
  console.log(`Total vacation cost: $${total}`);
}

totalVacationCost();

