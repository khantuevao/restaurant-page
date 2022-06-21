import Chef from './chef.jpeg';
import Manager from './manager.jpg';
import Waiter from './waiter.jpg';

export default populateAbout();

function populateAbout() {
  const box = document.createElement('div');
  box.classList.add('box');

  const title = document.createElement('div');
  title.classList.add('title');
  const titleTitle = document.createElement('h1');
  titleTitle.textContent = 'Contacts';
  title.appendChild(titleTitle);

  box.appendChild(title);

  const contactOne = document.createElement('div');
  contactOne.classList.add('contact');
  const contactOneLeft = document.createElement('div');
  const contactImgOne = new Image();
  contactImgOne.classList.add('contactImg');
  contactImgOne.src = Chef;
  contactOneLeft.appendChild(contactImgOne);
  contactOne.appendChild(contactOneLeft);
  const contantOneRight = document.createElement('div');
  const contactOneTitle = document.createElement('h2');
  contactOneTitle.textContent = 'Smoothie God';
  contantOneRight.appendChild(contactOneTitle);
  const contactOneText = document.createElement('p');
  contactOneText.innerHTML = 'Chef<hr>284-764-9175<hr>smoothiechef@notFake.com';
  contantOneRight.appendChild(contactOneText);
  contactOne.appendChild(contantOneRight);

  box.appendChild(contactOne);

  const contactTwo = document.createElement('div');
  contactTwo.classList.add('contact');
  const contactTwoLeft = document.createElement('div');
  const contactImgTwo = new Image();
  contactImgTwo.classList.add('contactImg');
  contactImgTwo.src = Manager;
  contactTwoLeft.appendChild(contactImgTwo);
  contactTwo.appendChild(contactTwoLeft);
  const contantTwoRight = document.createElement('div');
  const contactTwoTitle = document.createElement('h2');
  contactTwoTitle.textContent = 'Smoothie Bro';
  contantTwoRight.appendChild(contactTwoTitle);
  const contactTwoText = document.createElement('p');
  contactTwoText.innerHTML = 'Manager<hr>458-253-4486<hr>smoothiemanager@notFake.com';
  contantTwoRight.appendChild(contactTwoText);
  contactTwo.appendChild(contantTwoRight);

  box.appendChild(contactTwo);

  const contactThree = document.createElement('div');
  contactThree.classList.add('contact');
  const contactThreeLeft = document.createElement('div');
  const contantImgThree = new Image();
  contantImgThree.classList.add('contactImg');
  contantImgThree.src = Waiter;
  contactThreeLeft.appendChild(contantImgThree);
  contactThree.appendChild(contactThreeLeft);
  const contactThreeRight = document.createElement('div');
  const contactThreeTitle = document.createElement('h2');
  contactThreeTitle.textContent = 'Smoothie Mam';
  contactThreeRight.appendChild(contactThreeTitle);
  const contactThreeText = document.createElement('p');
  contactThreeText.innerHTML = 'Waiter<hr>625-788-5892<hr>smoothiewaiter@notFake.com';
  contactThreeRight.appendChild(contactThreeText);
  contactThree.appendChild(contactThreeRight);

  box.appendChild(contactThree);

  return box;
}