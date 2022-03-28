const sections = document.querySelectorAll('.section');
const addNew = document.querySelector('.list-books');

const navigate = (className) => {
  sections.forEach((item) => {
    if (item.classList.contains(className)) {
      item.classList.add('show');
      addNew.classList.toggle('show');
    } else {
      item.classList.remove('show');
    }
  });
};

export default navigate;
