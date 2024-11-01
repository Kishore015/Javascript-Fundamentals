// selecting elements in the DOM
// get element by ID
const heading = document.getElementById('main-heading').innerText;
console.log(`Got heading from site - ${heading}`);

// get elements by class name

const className = document.getElementsByClassName('list-item');
console.log(className)

// get element by tag name
const divEle = document.getElementsByTagName('div')
console.log(divEle)

// querySelector()

const headingQuery = document.querySelector('#main-heading').innerText;
console.log(headingQuery)

// querySelectorAll()

const listitems = document.querySelectorAll('.list-item');
console.log(listitems)

/* ======== DOM Manipulation =============== */

// styling elements

const title = document.querySelector('#main-heading');
title.style.color = "blue";

const li = document.querySelectorAll('.list-item');
// li.forEach(item => item.style.color = "green");
for(let i=0; i<li.length;i++){
    li[i].style.color = "brown"
}




// creating elements
const ul = document.querySelector('ul');
const newLi = document.createElement('li');
ul.append(newLi)
newLi.innerText = "Transformers";

// Add or remove attributes
newLi.setAttribute('class', 'list-item')
newLi.removeAttribute('class')

// Add or remove classes
newLi.classList.add('list-item');
newLi.classList.remove('list-item')

console.log(newLi.classList.contains('list-item'))

// remove element
newLi.remove()
