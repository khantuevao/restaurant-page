export default populateHome();

function populateHome() {
  const box = document.createElement('div');
  box.classList.add('box');

  const title = document.createElement('div');
  title.classList.add('title');
  const titleTitle = document.createElement('h1');
  titleTitle.textContent = 'Palo Alto Smoothie Bar';
  title.appendChild(titleTitle);

  box.appendChild(title);

  const info = document.createElement('div');
  info.classList.add('divInBox');
  const infoText = document.createElement('p');
  infoText.textContent = 'Every wellness journey is different. Ours started in 1971, pioneering a national shift away from prescription pads and towards a more holistic approach to wellbeing. Since then, we\'ve been known for nourishing the most health-obsessed humans on the planet.'
  info.appendChild(infoText);
  const infoTitle = document.createElement('h2');
  infoTitle.textContent = 'Health-obsessed since 1971';
  info.appendChild(infoTitle);

  box.appendChild(info);

  const hours = document.createElement('div');
  hours.classList.add('divInBox');
  const hoursTitle = document.createElement('h2');
  hoursTitle.textContent = 'Hours';
  hours.appendChild(hoursTitle);
  const hoursText = document.createElement('p');
  hoursText.innerHTML = 'Sunday: 8am - 8pm<hr>Monday: 6am - 6pm<hr>Tuesday: 6am - 6pm<hr>Wednesday: 6am - 6pm<hr>Thursday: 6am - 10pm<hr>Friday: 6am - 10pm<hr>Saturday: 8am - 10pm';
  hours.appendChild(hoursText);

  box.appendChild(hours);

  const location = document.createElement('div');
  location.classList.add('divInBox');
  const locationTitle = document.createElement('h2');
  locationTitle.textContent = 'Location';
  location.appendChild(locationTitle);
  const locationText = document.createElement('p');
  locationText.textContent = '240 Portage Ave, Palo Alto, California 64386, USA';
  location.appendChild(locationText);

  box.appendChild(location);
  
  return box;
}