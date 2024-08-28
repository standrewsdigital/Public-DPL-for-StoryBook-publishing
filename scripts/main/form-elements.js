document.querySelectorAll(`.conditional-input`).forEach( (element) => {
	let conditionalInput;

	// Select the hidden input element of the relative input field
	// also shows the hidden input if the conditional input was selected and persisted after refresh or when remembering form data
	if ( element.tagName === 'SELECT' ) {
		conditionalInput =  element.parentElement.querySelector('.conditional-content');
		if ( element.value === 'conditional' ) {
			conditionalInput.setAttribute('aria-hidden', false);
			conditionalInput.querySelector('input').disabled = false;
		} 
	} else if ( element.tagName === 'INPUT' && element.type === 'radio' ) {
		conditionalInput = element.closest("fieldset").nextElementSibling;
		if ( element.value === 'conditional' && element.checked ) {
			conditionalInput.setAttribute('aria-hidden', false);
			conditionalInput.querySelector('input').disabled = false;
		} 
	}

	// Hide/show conditional input when selected
	element.addEventListener('change', function(e) {
		if ( this.value === 'conditional' ) {
			conditionalInput.setAttribute('aria-hidden', false);
			conditionalInput.querySelector('input').disabled = false;
		} else {
			conditionalInput.setAttribute('aria-hidden', true);
			conditionalInput.querySelector('input').disabled = true;
		}
	});
} );