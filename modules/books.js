class Books {
  constructor() {
    this.books = JSON.parse(window.localStorage.getItem('books')) || [];
  }

  // add book methods
  addBook(book) {
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  // remove book methods
  removeBook(bookId) {
    this.books.splice(bookId, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}

export default Books;