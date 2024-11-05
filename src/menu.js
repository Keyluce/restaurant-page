import bee from './bee.png';
export function menuLoad() {
  const contentDiv = document.querySelector('#content');
  const imageLogo = document.createElement('img');
  imageLogo.src = bee;
  imageLogo.alt = 'bee-logo';
  contentDiv.appendChild(imageLogo);

  let heading = document.createElement('h1');
  heading.textContent = "Beary's Breakfast Bar";
  contentDiv.appendChild(heading);
  let div = document.createElement('div');
  div.classList.add('about');
  contentDiv.appendChild(div);
  let para = document.createElement('p');
  para.textContent = `Menu is still being made!`;
  div.appendChild(para);
  contentDiv.appendChild(div);
}
