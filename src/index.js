import './styles.css';
import { homeLoad } from './home.js';
import { menuLoad } from './menu.js';
import { aboutLoad } from './about.js';

document.addEventListener('DOMContentLoaded', homeLoad);

(function () {
  const buttons = document.querySelector('nav');

  buttons.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
      const contentDiv = document.querySelector('#content');
      contentDiv.textContent = '';
      switch (event.target.textContent) {
        case 'Home':
          homeLoad();
          break;
        case 'Menu':
          menuLoad();
          break;
        case 'About':
          aboutLoad();
          break;
      }
    }
  });
})();
