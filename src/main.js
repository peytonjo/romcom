// Create variables targetting the relevant DOM elements here 👇
var randomCoverTitle = document.querySelector('.cover-title');
var randomImg = document.querySelector('.cover-image');
var descriptorOne = document.querySelector('.tagline-1');
var descriptorTwo = document.querySelector('.tagline-2');
var ranCoverButton = document.querySelector('.random-cover-button');
var moveToFormButton = document.querySelector('.make-new-button');
var coverForm = document.querySelector('.form-view');
var homePage = document.querySelector('.home-view');
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
  formHideButtons();
  formAddHomeButton();
};

function formHideButtons() {
  ranCoverButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
};

function formAddHomeButton() {
  homeButton.classList.remove('hidden')
};

function displayHiddenForm() {
  coverForm.classList.remove('hidden')
  homePage.classList.add('hidden')
};

function homeButtonOnClick() {
  displayHomePage();
  homeHideButton();
  homeAddButtons();
};

function displayHomePage() {
  homePage.classList.remove('hidden')
  coverForm.classList.add('hidden')
};

function homeHideButton() {
  homeButton.classList.add('hidden')
};

function homeAddButtons() {
  ranCoverButton.classList.remove('hidden')
  saveCoverButton.classList.remove('hidden')
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
