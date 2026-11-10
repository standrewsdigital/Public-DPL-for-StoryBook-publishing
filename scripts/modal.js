document.addEventListener('DOMContentLoaded', (event) => {
  const openPopupButtons = Array.from(document.querySelectorAll('a[href^="#open-modal"]'));
  // Track which dialogs have been initialised once per page load
  const initialisedDialogs = new WeakSet();
  function closeDialog(dialog) {
    dialog.close();
  }
  openPopupButtons.forEach((element) => {
    const relatedPopup = document.querySelector(`dialog[data-link="${element.getAttribute('href')}"]`);
    if (!relatedPopup)
      return;
    element.addEventListener('click', (e) => {
      e.preventDefault();
      relatedPopup.showModal();
    });
    // Check if the dialog has already been processed when multiple links point to the same dialog
    // We don't want to attach the listeners again
    if (initialisedDialogs.has(relatedPopup)) return;
    initialisedDialogs.add(relatedPopup);

    const closePopupButton = relatedPopup.querySelector('.close-dialog');

    if (!closePopupButton) {
      console.error(`Missing close button in the dialog element for ${element}`);
    }
    else {
      closePopupButton.addEventListener('click', () => {
        closeDialog(relatedPopup);
      });
    }
  });
});