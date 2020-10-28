// Grab element(s) from the package
const listGroup = document.querySelector('.list-group');

// Create new page elements
const form = document.createElement('li');
const link = document.createElement('a');

// Style and fill new elements with content. 
form.classList.add('list-group-item');
link.setAttribute('href', "https://soundblab.com/reviews/albums/19368-frankie-rose-seventeen-seconds");
link.classList.add('article');
link.setAttribute('target', 'blank')
link.textContent = "Seventeen Seconds Review";

// 
listGroup.appendChild(form);
form.appendChild(link);
