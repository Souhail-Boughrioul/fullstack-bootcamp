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

