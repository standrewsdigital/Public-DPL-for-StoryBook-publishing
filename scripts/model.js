const show = id => {
    const dialog = document.getElementById(id);
  //dialogPolyfill.registerDialog(dialog);
   dialog.showModal();
  }
  
  const closeDialog = id => {
    const dialog = document.getElementById(id);
    dialog.close();
  }