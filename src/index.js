// write your code here!
//global variables
const baseURL = 'http://localhost:3000/ducks'

//DOM selections
const duckNav = document.querySelector('#duck-nav');

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
    const duckImg = document.createElement('img');
    duckImg.src = duckObj.img_url;
    duckNav.appendChild(duckImg);
}

//event listeners and handlers

//initializers
getDucks(baseURL)

/*Instructions:
1) When the page loads, fetch the ducks and display each duck image
in the #duck-nav.
    render duck images to #duck-nav*/