import './style.css';
import populateHome from './home.js';
import populateMenu from './menu.js';
import populateContact from './contact.js';


const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');
const contentDiv = document.querySelector('#content');

document.addEventListener('DOMContentLoaded', function(event) {
  document.getElementById('home').click();
});

function clear() {
  contentDiv.innerHTML = '';
};

home.addEventListener('click', () => {
  clear();
  home.style.backgroundColor = 'skyblue';
  menu.style.backgroundColor = '';
  contact.style.backgroundColor = '';
  contentDiv.appendChild(populateHome);
});

menu.addEventListener('click', () => {
  clear();
  home.style.backgroundColor = '';
  menu.style.backgroundColor = 'skyblue';
  contact.style.backgroundColor = '';
  contentDiv.appendChild(populateMenu);
});

contact.addEventListener('click', () => {
  clear();
  home.style.backgroundColor = '';
  menu.style.backgroundColor = '';
  contact.style.backgroundColor = 'skyblue';
  contentDiv.appendChild(populateContact);
});