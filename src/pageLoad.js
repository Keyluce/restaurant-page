import bee from './bee.png';
export function pageLoad() {
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
  para.textContent = ` Beary's has the best porridge! The atmospher and customer service make
          you feel like you are sitting in the middle of the woods, eating like
          a bear! This is exactly the kind of place that I like to return to
          again and again.`;
  div.appendChild(para);
  para = document.createElement('p');
  para.textContent = 'Goldilocks';
  para.classList.add('author');
  div.appendChild(para);
  contentDiv.appendChild(div);

  div = document.createElement('div');
  div.classList.add('hours');
  div.innerHTML = ` <h2>Hours</h2>
        <div>
          <p>Sunday: 8am - 8pm</p>
          <p>Monday: 6am - 6pm</p>
          <p>Tuesday: 6am - 6pm</p>
          <p>Wednesday: 6am - 6pm</p>
          <p>Thursday: 6am -10pm</p>
          <p>Friday: 6am -10pm</p>
          <p>Saturday: 8am - 10pm</p>
        </div>`;
  contentDiv.appendChild(div);

  div = document.createElement('div');
  div.classList.add('location');
  div.innerHTML = `  <p>123 Forest Drive, Forestville, Maine</p>`;
  contentDiv.appendChild(div);
}
