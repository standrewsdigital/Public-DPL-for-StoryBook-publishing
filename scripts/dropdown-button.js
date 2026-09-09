function closeAllDropdowns() {
  document.querySelectorAll('.hover-drop-list.selected').forEach(function (element) {
    element.classList.remove('selected');
    element.querySelector('.drop-content')?.classList.remove('show');
    element.querySelector('.btn')?.setAttribute('aria-expanded', 'false');
  });
}

// Event listener for dropdowns
document.addEventListener('click', function (event) {
  const dropdownButton = event.target.closest('[data-toggle="drop"]');

  if (!dropdownButton) {
    closeAllDropdowns();
    return;
  }

  const dropdownWrapper = dropdownButton.closest('.hover-drop-list');
  const content = dropdownButton?.nextElementSibling;

  if ( !content || !content.classList.contains('drop-content') || !dropdownWrapper.classList.contains('hover-drop-list') ) return;

  if (dropdownWrapper.classList.contains("selected")) {
    dropdownWrapper.classList.remove("selected");
    content.classList.remove("show");
    dropdownButton.setAttribute('aria-expanded', 'false');
  } else {
    closeAllDropdowns(); // Close other dropdowns
    dropdownWrapper.classList.add("selected");
    content.classList.add("show");
    dropdownButton.setAttribute('aria-expanded', 'true');
  }
});
