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
