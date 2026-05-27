"use strict";
const simulateButton = document.querySelector('button#simulation');
simulateButton?.addEventListener('click', () => {
    const wrapper = document.querySelector('.loader-example');
    if (wrapper) {
        wrapper.innerHTML = '';
    }
    wrapper?.insertAdjacentHTML('beforeend', `
<div class="loader-wrapper">
    <div class="loader bar-loader">
        <div class="bar bg-blue-primary"></div>
        <div class="bar bg-red-st-andrews"></div>
        <div class="bar bg-yellow"></div>
    </div>
    <span class="icon icon-lg icon-crest"></span>
    <p class="mt-md mb-0">Loading</p>
</div>

<div class="loader-wrapper">
    <div class="loader">
        <span class="icon icon-lg icon-crest"></span>
    </div>
    <p class="mt-md mb-0">Loading</p>
</div>
`);
    setTimeout(() => {
        const loader = wrapper?.querySelectorAll('.loader-wrapper');
        loader.forEach((element) => element.remove());
        wrapper?.insertAdjacentHTML('beforeend', `<p>Loaded!</p>`);
    }, 2000);
});
