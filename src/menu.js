import Green from './green.jpg';
import Red from './red.jpg';
import Blue from './blue.jpg';

export default populateMenu();

function populateMenu() {
  const box = document.createElement('div');
  box.classList.add('box');

  const title = document.createElement('div');
  title.classList.add('title');
  const titleTitle = document.createElement('h1');
  titleTitle.textContent = 'Menu';
  title.appendChild(titleTitle);

  box.appendChild(title);

  const menuItemOne = document.createElement('div');
  menuItemOne.classList.add('menuItem');
  const menuItemOneTitle = document.createElement('h2');
  menuItemOneTitle.textContent = '#greenjuice';
  menuItemOne.appendChild(menuItemOneTitle);
  const menuItemOneText = document.createElement('p');
  menuItemOneText.textContent = 'Amp up your energy and give your immune system a major boost with this nutrition-packed blend of organic greens, lemon and ginger. This one has it all: vitamins, minerals, protein and electrolytes to leave you feeling fully renewed, revitalized and ready to take on the day.';
  menuItemOne.appendChild(menuItemOneText);
  const menuImgOne = new Image();
  menuImgOne.classList.add('menuImg');
  menuImgOne.src = Green;
  menuItemOne.appendChild(menuImgOne);

  box.appendChild(menuItemOne);

  const menuItemTwo = document.createElement('div');
  menuItemTwo.classList.add('menuItem');
  const menuItemTwoTitle = document.createElement('h2');
  menuItemTwoTitle.textContent = 'Endless Summer - Limited Edition';
  menuItemTwo.appendChild(menuItemTwoTitle);
  const menuItemTwoText = document.createElement('p');
  menuItemTwoText.textContent = 'Brimming with antioxidants and electrolytes, this refreshing fruity blend is formulated to keep you healthy, hydrated and energized (with an amazing taste to boot). Our addition of vegan probiotics helps support immunity and ensures your digestive system in great shape.';
  menuItemTwo.appendChild(menuItemTwoText);
  const menuImgTwo = new Image();
  menuImgTwo.classList.add('menuImg');
  menuImgTwo.src = Red;
  menuItemTwo.appendChild(menuImgTwo);

  box.appendChild(menuItemTwo);

  const menuItemThree = document.createElement('div');
  menuItemThree.classList.add('menuItem');
  const menuItemThreeTitle = document.createElement('h2');
  menuItemThreeTitle.textContent = 'First Aid';
  menuItemThree.appendChild(menuItemThreeTitle);
  const menuItemThreeText = document.createElement('p');
  menuItemThreeText.textContent = 'Keep bacteria at bay with this nutrition-packed mixture of blueberry, ginger and cayenne pepper. Vitamins, minerals, essential enzymes and capsaicin get to work stimulating digestion, increasing circulation, promoting alkalinity and alleviating congestion, so you can use those sick days for vacations instead.';
  menuItemThree.appendChild(menuItemThreeText);
  const menuImgThree = new Image();
  menuImgThree.classList.add('menuImg');
  menuImgThree.src = Blue;
  menuItemThree.appendChild(menuImgThree);

  box.appendChild(menuItemThree);
  
  return box;
}