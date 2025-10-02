// Exercise 5 : Users
//  1. Retrieve the div and log it
const containerDiv = document.getElementById("container");
console.log(containerDiv);

//  2. Change "Pete" to "Richard"
const firstUl = document.querySelectorAll(".list")[0];
const peteLi = firstUl.querySelectorAll("li")[1];
peteLi.textContent = "Richard";

//  3. Delete the second <li> of the second <ul>
const secondUl = document.querySelectorAll(".list")[1];
const secondUlSecondLi = secondUl.querySelectorAll("li")[1];
secondUlSecondLi.remove();

// 4. Change the name of the first <li> of each <ul> to your name
const allUls = document.querySelectorAll(".list");
allUls.forEach(ul => {
  ul.querySelectorAll("li")[0].textContent = "Souhail";
});

//  5. Add class "student_list" to both <ul>'s
allUls.forEach(ul => ul.classList.add("student_list"));

//  6. Add classes "university" and "attendance" to the first <ul>
firstUl.classList.add("university", "attendance");

//  7. Style the div
containerDiv.style.backgroundColor = "lightblue";
containerDiv.style.padding = "10px";

//  8. Do not display the <li> that contains "Dan"
const allLis = document.querySelectorAll("li");
allLis.forEach(li => {
  if (li.textContent === "Dan") {
    li.style.display = "none";
  }
});

// 9. Add a border to the <li> that contains "Richard"
allLis.forEach(li => {
  if (li.textContent === "Richard") {
    li.style.border = "2px solid red";
  }
});

//  10. Change the font size of the whole body
document.body.style.fontSize = "18px";

//  Bonus: If background color of div is light blue, alert "Hello x and y"
if (containerDiv.style.backgroundColor === "lightblue") {
  const firstUser = firstUl.querySelectorAll("li")[0].textContent;
  const secondUser = firstUl.querySelectorAll("li")[1].textContent;
  alert(`Hello ${firstUser} and ${secondUser}`);
}
