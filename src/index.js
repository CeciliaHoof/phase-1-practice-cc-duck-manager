// write your code here!
//global variables
const baseURL = 'http://localhost:3000/ducks'

//DOM selections
const duckNav = document.querySelector('#duck-nav');
const duckName = document.querySelector('#duck-display-name');
const duckImage = document.querySelector('#duck-display-image')
const duckLikes = document.querySelector('#duck-display-likes')
console.log(duckName, duckImage, duckLikes)

//fetch functions
function getDucks(url){
    fetch(url)
        .then(resp => resp.json())
        .then(ducksArr => {
            ducksArr.forEach(duckObj => renderNav(duckObj))
        })
    }

//render functions
function renderNav(duckObj){
    const duck = document.createElement('img');
    duck.src = duckObj.img_url;
    duck.addEventListener('click', () => renderDuckDetail(duckObj))
    duckNav.appendChild(duck);
}

function renderDuckDetail(duckObj){
    duckName.textContent = duckObj.name;
    duckImage.src = duckObj.img_url;
    duckLikes.textContent = `${duckObj.likes} likes`
}

//event listeners and handlers

//initializers
getDucks(baseURL)

/*Instructions:
1) When the page loads, fetch the ducks and display each duck image
in the #duck-nav.
    render duck images to #duck-nav
2) When a user clicks one of the duck images:
    it shows the duck's name, the image, and a likes button
    with the number of likes in the #duck-displaylike so:*/