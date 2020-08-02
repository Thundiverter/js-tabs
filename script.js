'use strict';

// List of all elements in "tab-content" class
let tabContents = document.querySelectorAll('.tab-content');

// Hides all elements in "tab-content" class and then shows the first one
for (let i = 0; i < tabContents.length; i++) { tabContents[i].style.display = 'none'; }
tabContents[0].style.display = '';

// When a button is clicked, all elements in "tab-content" class disappear and then shows the chosen one
function openTab(name) {
    for (let j = 0; j < tabContents.length; j++) { tabContents[j].style.display = 'none'; }
    document.querySelector(`#tab-${name}`).style.display = '';
}