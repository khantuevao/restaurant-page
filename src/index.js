import './style.css';
import populateHome from './home.js'



const home = document.getElementById('home');
const menu = document.getElementById('menu');
const about = document.getElementById('about');
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
  about.style.backgroundColor = '';
  contentDiv.appendChild(populateHome);
});

menu.addEventListener('click', () => {
  clear();
  home.style.backgroundColor = '';
  menu.style.backgroundColor = 'skyblue';
  about.style.backgroundColor = '';
  populateMenu;
});

about.addEventListener('click', () => {
  clear();
  home.style.backgroundColor = '';
  menu.style.backgroundColor = '';
  about.style.backgroundColor = 'skyblue';
  populateAbout;
});









