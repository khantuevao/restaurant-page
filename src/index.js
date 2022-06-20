import './style.css';
import Icon from './restphoto.jpg';

function componentOne() {
  const element = document.createElement('div');
  element.classList.add('image');

  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(componentOne());

function componentTwo() {
  const element = document.createElement('div');
  element.classList.add('header');

  const myHeader = document.createElement('h1');
  myHeader.textContent = 'Palo Alto restaurant';
  element.appendChild(myHeader);

  return element;
}

document.body.appendChild(componentTwo());

function componentThree() {
  const element = document.createElement('div');
  element.classList.add('about');

  const myAbout = document.createElement('p');
  myAbout.textContent = 'Welcome to Palo Alto! We hope you enjoy your visit. Happy hours!';
  element.appendChild(myAbout);

  return element;
}

document.body.appendChild(componentThree());
