// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const articleHolderDiv = document.querySelector('.cards-container')

function articleCard(artObj){
    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const imgSrc = document.createElement('img');
    const authorName = document.createElement('span');

    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container');

    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgDiv);
    authorDiv.appendChild(authorName);
    imgDiv.appendChild(imgSrc);

    // headlineDiv.textContent=`${artObj.headline}`;

    cardDiv.addEventListener('click', () => {
        console.log(headlineDiv.textContent)
        //CLICK EVENT WORKS 8:50AM
    })
    // imgDiv.src =

    return cardDiv;
}

articleHolderDiv.appendChild(articleCard());
// console.log(articleHolderDiv); THIS IS WORKING 8:50AM
// console.log(articleCard()); THIS IS WORKING 8:50AM



axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(result => {
    console.log(result)
    // for(let i = 0; i < 6; i++){
        const keys = Object.keys(result.data.articles);
    keys.forEach(element => {
        const newArticle = articleCard(element);
        articleHolderDiv.appendChild(newArticle);
        console.log(newArticle);
    });
// }
})
.catch(nope => {
console.log('help not working', nope)
})