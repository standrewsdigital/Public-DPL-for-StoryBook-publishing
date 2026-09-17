// Clear button behaviour
const searchBarAll = document.querySelectorAll('.search-box')

searchBarAll.forEach((searchBar) => {
  const clearIcon = searchBar.parentElement.querySelector('.clear-icon');

  if (clearIcon) {
    searchBar.addEventListener('keyup', () => {
      if (searchBar.value) {
        clearIcon.classList.add('show-icon');
      } else {
        clearIcon.classList.remove('show-icon');
      }
    });

    clearIcon.addEventListener('click', (event) => {
      event.preventDefault();
      searchBar.value = '';
      clearIcon.classList.remove('show-icon');
      searchBar.focus();
    })
  }
});
