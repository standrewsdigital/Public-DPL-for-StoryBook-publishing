// DPL JavaScript of the use of drop list buttons
const dropdownLists = document.querySelectorAll('.hover-drop-list');

dropdownLists.forEach((dropdown) => {
  const button = dropdown.querySelector('.btn');
  const content = dropdown.querySelector('.drop-content');

  button.addEventListener('click', () => {
    if (dropdown.classList.contains("selected")) {
      dropdown.classList.remove("selected");
      content.classList.remove("show");
    } else {
      closeAllDropdowns(); // Close other dropdowns
      dropdown.classList.add("selected");
      content.classList.add("show");
    }
  });
});

// Function to close all open dropdowns
function closeAllDropdowns() {
  document.querySelectorAll('.hover-drop-list.selected').forEach(function (element) {
    element.classList.remove('selected');
    element.querySelector('.drop-content').classList.remove('show');
  });
}

// Event listener to close dropdowns when clicking outside of them
document.addEventListener('click', function (event) {
  if (!event.target.closest('.hover-drop-list')) {
    closeAllDropdowns();
  }
});
