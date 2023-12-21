// write your code here!
//global variables
const baseURL = 'http://localhost:3000/ducks'
let selectedDuck;
let currLikes;

//DOM selections
const duckNav = document.querySelector('#duck-nav');
const duckName = document.querySelector('#duck-display-name');
const duckImage = document.querySelector('#duck-display-image');
const duckLikes = document.querySelector('#duck-display-likes');
const duckForm = document.querySelector('#new-duck-form')


//fetch functions
function getDucks(url){
    fetch(url)
        .then(resp => resp.json())
        .then(ducksArr => renderNav(ducksArr))
    }

//render functions
function renderNav(ducksArr){
    ducksArr.forEach(duckObj => {
        const duck = document.createElement('img');
        duck.src = duckObj.img_url;
        duck.addEventListener('click', () => renderDuckDetail(duckObj));
        duckNav.appendChild(duck);
    })
}

function renderDuckDetail(duckObj){
    duckName.textContent = duckObj.name;
    duckImage.src = duckObj.img_url;
    duckLikes.textContent = `${duckObj.likes} likes`
    currLikes = duckObj.likes;
    selectedDuck = duckObj;
}

//event listeners and handlers
duckForm.addEventListener('submit', (e) => handleSubmit(e))

function handleSubmit(e){
    e.preventDefault();
    const newDuck = {
        name : e.target['duck-name-input'].value,
        img_url : e.target['duck-image-input'].value,
        likes : 0
    }
    renderNav([newDuck]);
}

duckLikes.addEventListener('click', () => {
    currLikes++;
    duckLikes.textContent = `${currLikes} likes`;
    selectedDuck.likes = currLikes;
    console.log(selectedDuck)
})

//initializers
getDucks(baseURL)

/*Instructions:
1) When the page loads, fetch the ducks and display each duck image
in the #duck-nav.
    render duck images to #duck-nav
2) When a user clicks one of the duck images:
    it shows the duck's name, the image, and a likes button
    with the number of likes in the #duck-display
3) When the likes button is clicked,
    it increments the number of likes displayed for that duck.
    Be sure that the button continues to read "X likes".
4) When the #new-duck-form is submitted, 
    it generates a new duck image in the #duck-nav.
    When clicked, it acts like the other images in the #duck-nav and shows
     a name, image, and like button in the #duck-display. 
     No persistence is needed. A duck starts with 0 likes.
*/