// Exercise 6 : Change the navbar
//  1. Change the id attribute of the div
const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

//  2. Add a new <li> with "Logout"
const newLi = document.createElement("li");         // create <li>
const logoutText = document.createTextNode("Logout"); // create text node
newLi.appendChild(logoutText);                      // <li>Logout</li>

// Get the <ul> inside the div
const ulElement = navDiv.querySelector("ul");
ulElement.appendChild(newLi);                       // add new li at the end

//  3. Retrieve and display the first and last <li> text
const firstLi = ulElement.firstElementChild;
const lastLi = ulElement.lastElementChild;

console.log("First link text:", firstLi.textContent);
console.log("Last link text:", lastLi.textContent);
