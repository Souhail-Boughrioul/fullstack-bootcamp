// Variable and object provided
let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
};

// Arrow function to display the fruits
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};

// Call the function to see the fruits
displayGroceries();
// Output:
// pear
// apple
// banana


// Arrow function to clone and test value vs reference
const cloneGroceries = () => {
    //  Primitive value (string) → copied by VALUE
    let user = client;        // user = "John"
    client = "Betty";

    console.log("Client:", client);  // Betty
    console.log("User:", user);      // John

    //  Changing `client` does NOT affect `user` because strings are primitive and copied by VALUE.


    // Object → copied by REFERENCE
    let shopping = groceries;

    // Change totalPrice in `groceries` through `shopping`
    shopping.totalPrice = "35$";

    console.log("Groceries totalPrice:", groceries.totalPrice); // 35$
    console.log("Shopping totalPrice:", shopping.totalPrice);   // 35$

    //  Both changed, because shopping and groceries point to the SAME object in memory.


    // Change paid in `groceries.other`
    shopping.other.paid = false;

    console.log("Groceries paid:", groceries.other.paid); // false
    console.log("Shopping paid:", shopping.other.paid);   // false

    //  Same logic here: `shopping.other` references the same nested object.
};

// Call the function
cloneGroceries();
