// Create variables targetting the relevant DOM elements here 👇
var randomCoverTitle = document.querySelector('.cover-title')
var randomImg = document.querySelector('.cover-image')
var descriptorOne = document.querySelector('.tagline-1')
var descriptorTwo = document.querySelector('.tagline-2')
var ranCoverButton = document.querySelector('.random-cover-button');

ranCoverButton.addEventListener("click", generateRandomCover);


// On page load generate random values
generateRandomCover();


// Create variables targetting the relevant DOM elements here 👇
// We've provided a few variables below
var savedCovers = [
];

var currentCover = new Cover(getRandomImage(),getRandomTitle(),getDescriptor(),getDescriptor())



// Add your event listeners here 👇
// Create your event handlers and other functions here 👇
var homeBtn = document.querySelector(".home-button")
var saveCoverBtn = document.querySelector(".save-cover-button")
var viewSavedCoversBtn = document.querySelector(".view-saved-button")
var savedPage = document.querySelector(".saved-view")
var homePage = document.querySelector('.home-view')

viewSavedCoversBtn.addEventListener("click", viewSavedCovers);
homeBtn.addEventListener("click", viewHomePage);

function viewSavedCovers(){
  homeBtn.classList.remove("hidden")
  savedPage.classList.remove("hidden")
  homePage.classList.add("hidden")
  ranCoverButton.classList.add("hidden")
  saveCoverBtn.classList.add("hidden")
}

function viewHomePage(){
  homeBtn.classList.add("hidden")
  savedPage.classList.add("hidden")
  homePage.classList.remove("hidden")
  ranCoverButton.classList.remove("hidden")
  saveCoverBtn.classList.remove("hidden")
}










function generateRandomCover(){
  var currentCover = new Cover(getRandomImage(),getRandomTitle(),getDescriptor(),getDescriptor())

  descriptorOne.innerText = currentCover.tagline1;
  descriptorTwo.innerText = currentCover.tagline2;
  randomImg.src = currentCover.cover;
  randomCoverTitle.innerText = currentCover.title;
}



function getRandomImage(){
  var randomImageIndex = getRandomIndex(covers);
  var randomImage = covers[randomImageIndex];

  return randomImage;
};


function getRandomTitle(){
  var randomTitleIndex = getRandomIndex(titles);
  var randomTitle = titles[randomTitleIndex];

  return randomTitle;
};

function getDescriptor() {
  var index = getRandomIndex(descriptors)
  return descriptors[index]
};

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
