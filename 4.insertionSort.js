const books = require("./2.bookList");
const change = require("./5.changeItem");

function insertionSort(arr) {
  for (let actual = 0; actual < arr.length; actual++) {
    let analysis = actual;
    while (analysis > 0 && arr[analysis].preco < arr[analysis - 1].preco) {
      change(arr, analysis);
      analysis--;
    }
  }

  console.log(arr);
}

insertionSort(books);
