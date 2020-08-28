// Create variables targetting the relevant DOM elements here 👇
var randomCoverTitle = document.querySelector('.cover-title')
var randomImg = document.querySelector('.cover-image')
var descriptorOne = document.querySelector('.tagline-1')
var descriptorTwo = document.querySelector('.tagline-2')

// On page load generate random values
descriptorOne.innerText = getDescriptor();
descriptorTwo.innerText = getDescriptor();
randomImg.src = getRandomImage();
randomCoverTitle.innerText = getRandomTitle()


// Create variables targetting the relevant DOM elements here 👇

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;


// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

//Get random image
function getRandomImage(){
  var randomImageIndex = getRandomIndex(covers);
  var randomImage = covers[randomImageIndex];

  return randomImage;
};

//Get random titles
function getRandomTitle(){
  var randomTitleIndex = getRandomIndex(titles);
  var randomTitle = titles[randomTitleIndex];

  return randomTitle;
};

function getDescriptor() {
  var index = getRandomIndex(descriptors)
  return descriptors[index]
};
