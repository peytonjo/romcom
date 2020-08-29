// Create variables targetting the relevant DOM elements here 👇
var randomCoverTitle = document.querySelector('.cover-title');
var randomImg = document.querySelector('.cover-image');
var descriptorOne = document.querySelector('.tagline-1');
var descriptorTwo = document.querySelector('.tagline-2');
var ranCoverButton = document.querySelector('.random-cover-button');
var moveToFormButton = document.querySelector('.make-new-button');
var coverForm = document.querySelector('.form-view');
var homePage = document.querySelector('.home-view');
var randomCoverButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');

// On page load generate random values
generateRandomCover();

// We've provided a few variables below
var savedCovers = [
];

var currentCover = new Cover(getRandomImage(),getRandomTitle(),getDescriptor(),getDescriptor())

// Add your event listeners here 👇
ranCoverButton.addEventListener("click", generateRandomCover);
moveToFormButton.addEventListener("click", onClick);
homeButton.addEventListener("click", homeButtonOnClick);

// Create your event handlers and other functions here 👇
function onClick() {
  displayHiddenForm();
  hideButtons();
  addHomeButton();
};

function hideButtons() {
  randomCoverButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
};

function addHomeButton() {
  homeButton.classList.remove('hidden')
};

function displayHiddenForm() {
  coverForm.classList.remove('hidden')
  homePage.classList.add('hidden')
};

function homeButtonOnClick() {
  homePage.classList.remove('hidden')
  coverForm.classList.add('hidden')
};
 

function generateRandomCover(){
  var currentCover = new Cover(getRandomImage(),getRandomTitle(),getDescriptor(),getDescriptor())

  descriptorOne.innerText = currentCover.tagline1;
  descriptorTwo.innerText = currentCover.tagline2;
  randomImg.src = currentCover.cover;
  randomCoverTitle.innerText = currentCover.title;
};

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
