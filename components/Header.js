// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerCont = document.querySelector('.header-container')

function Header() {
    const bigDiv = document.createElement('div');
    const date = document.createElement('span');
    const headerEl =  document.createElement('h1');
    const temperature = document.createElement('span')

    bigDiv.classList.add('header');
    date.classList.add('date');
    temperature.classList.add('temp');

    date.textContent = `MARCH 28, 2020`;
    headerEl.textContent =`Lambda Times`;
    temperature.textContent = `98°`

    bigDiv.appendChild(date);
    bigDiv.appendChild(headerEl);
    bigDiv.appendChild(temperature);
  
    return bigDiv

}

const finishedProduct = headerCont.appendChild(Header());

console.log(finishedProduct)
