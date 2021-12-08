const heading = document.getElementsByTagName('h1');

const para = document.getElementsByClassName('para')

console.log(heading)

console.log(para)


// Create html heading

const heading1 = document.createElement('h1');

const heading_text = document.createTextNode('This is created by Javascript');

heading1.appendChild(heading_text);

const div = document.getElementById('welcome');

div.appendChild(heading1);


// Create a paragraph

const para1 = document.createElement('p');

const para_text = document.createTextNode('This is also created by Javascript');

para1.appendChild(para_text);


// const div = document.getElementById('welcome2')
div.appendChild(para1);

heading1.style.color = "blue";

heading1.style.background = "rgb(255,0,0)";

// Create Image
const img = document.createElement('img');
img.src = "https://getbootstrap.com/docs/5.1/assets/img/bootstrap-icons.png";

const image_div = document.getElementById('welcome2');
image_div.appendChild(img);
img.style.width = "500px";

function myFunction(){
    let paragraph = document.getElementById('hidden_para');
    paragraph.style.display = "block";
}



