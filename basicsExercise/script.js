// Initial code:
//--
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);
// --

// Exercise - First part:
const p1 = document.createElement('p');
p1.style.color = 'red';
p1.textContent = "Hey I'm red!";
container.appendChild(p1);

const h3 = document.createElement('h3');
h3.style.color = 'blue';
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);

const container2 = document.createElement('div');
container2.style.border = 'solid';
container2.style.backgroundColor = 'pink';
container.appendChild(container2);

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
container2.appendChild(h1);

const p2 = document.createElement('p');
p2.textContent = 'ME TOO!';
container2.appendChild(p2);

// Events part:
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
  alert("Hello World");
});

function alertFunction() {
  alert("YAY! YOU DID IT!");
}

// METHOD 2 WITH FUNCTION
btn.onclick = alertFunction;

// METHOD 3 WITH FUNCTION
btn2.addEventListener('click', alertFunction);

btn2.addEventListener('click', function (e) {
  console.log(e.target);
});

btn2.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});

// Buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// We use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // And for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});

