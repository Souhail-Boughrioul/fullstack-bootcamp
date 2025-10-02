// Exercise 7 : My Book List
//  1. Create the array of books
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

// 2. Select the section
const section = document.querySelector(".listBooks");

//  3. Loop through the array and render each book
allBooks.forEach(book => {
  // Create the div container
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");

  // Create text (title + author)
  const bookDetails = document.createElement("p");
  bookDetails.textContent = `${book.title} written by ${book.author}`;

  // If book already read → make text red
  if (book.alreadyRead) {
    bookDetails.style.color = "red";
  }

  // Create image
  const bookImg = document.createElement("img");
  bookImg.src = book.image;
  bookImg.alt = book.title;

  // Append everything
  bookDiv.appendChild(bookImg);
  bookDiv.appendChild(bookDetails);
  section.appendChild(bookDiv);
});
