import Books from './modules/books.js';
import navigate from './modules/navigate.js';
import { DateTime } from './modules/luxon.js';

const form = document.querySelector('form');
const menuLinks = document.querySelectorAll('.link-item');
const displayBook = document.querySelector('.display-books');

// create an object
const listBooks = new Books();

function onPageReload() {
  displayBook.innerHTML = listBooks.books.map((book, index) => `
    <div class="display">
      <p>"${book.title}" by ${book.author}</p>
      <button class="remove-btn" data-id=${index}">Remove</button>
      </div>
    `).join('');

  if (listBooks.books.length === 0) {
    displayBook.style.cssText = 'border: none;';
  } else {
    displayBook.style.cssText = 'border: 3px solid black;';
  }

  const removeBtn = document.querySelectorAll('.remove-btn');

  removeBtn.forEach((btn) => {
    btn.onclick = (event) => {
      listBooks.removeBook(event.target.dataset.id);
      onPageReload();
    };
  });
}

document.querySelector('span').innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);

onPageReload();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const title = formData.get('title');
  const author = formData.get('author');
  const bookObj = {
    title,
    author,
  };
  listBooks.addBook(bookObj);
  onPageReload(listBooks);
  form.reset();
});

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', () => {
    navigate(menuLink.dataset.link);
  });
});
