const books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "1984", author: "George Orwell" },
  { title: "Pride and Prejudice", author: "Jane Austen" }
];

const getTheTitles = function(booksArray) {
  return booksArray.map(book => book.title);
};

const titles = getTheTitles(books);
console.log(titles); // ["The Hobbit", "1984", "Pride and Prejudice"]

// Do not edit below this line
module.exports = getTheTitles;
