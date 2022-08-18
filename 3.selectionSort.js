const books = require("./2.bookList");
const cheaperBook = require("./1.cheaper");

for (let actual = 0; actual < books.length - 1; actual++) {
  let cheap = cheaperBook(books, actual);
  let actualBook = books[actual];
  let cheaperPrice = books[cheap];
  books[actual] = cheaperPrice;
  books[cheap] = actualBook;
}

console.log(books);
