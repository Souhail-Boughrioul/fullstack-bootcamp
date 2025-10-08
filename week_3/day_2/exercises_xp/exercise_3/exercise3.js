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