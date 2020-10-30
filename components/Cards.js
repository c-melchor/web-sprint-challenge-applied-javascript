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

    headlineDiv.textContent = `testing`;
    authorDiv.textContent = `author div here`;
    authorName.textContent = `By: christina melchor`
    imgSrc.src = 'data:image/jpeg;base64,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'

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


    result.data.articles.bootstrap.forEach((item) => {
        const newArticle = articleCard(item);
        articleHolderDiv.appendChild(newArticle);
        console.log(newArticle);
    });
    result.data.articles.javascript.forEach((item) => {
        const newArticle = articleCard(item);
        articleHolderDiv.appendChild(newArticle);
        console.log(newArticle);
    });
    result.data.articles.jquery.forEach((item) => {
        const newArticle = articleCard(item);
        articleHolderDiv.appendChild(newArticle);
        console.log(newArticle);
    });
    result.data.articles.node.forEach((item) => {
        const newArticle = articleCard(item);
        articleHolderDiv.appendChild(newArticle);
        console.log(newArticle);
    });
    result.data.articles.technology.forEach((item) => {
        const newArticle = articleCard(item);
        articleHolderDiv.appendChild(newArticle);
        console.log(newArticle);
    });
})
.catch(nope => {
console.log('help not working', nope)
})