import bee from './bee.png';
export function pageLoad() {
  const contentDiv = document.querySelector('#content');
  const imageLogo = document.createElement('img');
  imageLogo.src = bee;
  imageLogo.alt = 'bee-logo';
  contentDiv.appendChild(imageLogo);
}
