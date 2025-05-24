const books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "1984", author: "George Orwell" },
  { title: "Pride and Prejudice", author: "Jane Austen" }
];

function getTheTitles(booksArray) {
  return booksArray.map(book => book.title);
}

const titles = getTheTitles(books); // ✅ Correct function name
console.log(titles); // ["The Hobbit", "1984", "Pride and Prejudice"]

// Do not edit below this line
module.exports = getTheTitles;
