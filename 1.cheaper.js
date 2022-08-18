const books = require("./2.bookList");

function cheaperBook(arrProducts, initialPos) {
  let cheaper = initialPos;

  for (let actual = initialPos; actual < arrProducts.length; actual++) {
    if (arrProducts[actual].preco < arrProducts[cheaper].preco) {
      cheaper = actual;
    }
  }
  return cheaper;
}

module.exports = cheaperBook;
