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
var viewSavedCoversBtn = document.querySelector(".view-saved-button");
var savedPage = document.querySelector(".saved-view");
var makeNewBookBtn = document.querySelector('.create-new-book-button');


// On page load generate random values
generateRandomCover();

// We've provided a few variables below
var savedCovers = [
];

// Add your event listeners here 👇
ranCoverButton.addEventListener("click", generateRandomCover);
moveToFormButton.addEventListener("click", viewForm);
homeButton.addEventListener("click", viewHome);
viewSavedCoversBtn.addEventListener("click", viewSavedCovers);
makeNewBookBtn.addEventListener("click", saveNewBookInputs)

// Create your event handlers and other functions here 👇
function saveNewBookInputs(event){
  imgInput(event);
  titleInput(event);
  firstDescriptorInput(event);
  secondDescriptorInput(event);
}

function imgInput(event){
  event.preventDefault()
  var userImgInput = document.querySelector('#cover')
  covers.push(userImgInput.value)
}

function titleInput(event){
  event.preventDefault()
  var userTitleInput = document.querySelector('#title')
  titles.push(userTitleInput.value)
}

function firstDescriptorInput(event){
  event.preventDefault()
  var userDescriptorInput1 = document.querySelector('#descriptor1')
  descriptors.push(userDescriptorInput1.value)
}

function secondDescriptorInput(event){
  event.preventDefault()
  var userDescriptorInput2 = document.querySelector('#descriptor2')
  descriptors.push(userDescriptorInput2.value)
}

function viewHome() {
  displayHomePage();
  homeHideButton();
  homeAddButtons();
  hideSavedCoversPage();
  hideCoverFormPage();
};

function viewSavedCovers(){
  hideCoverFormPage();
  displayHiddenSavedCovers();
  addHomeButton();
  hideCoverButtons();
}

function viewForm() {
  displayHiddenForm();
  hideCoverButtons();
  addHomeButton();
};

function displayHiddenSavedCovers(){
  savedPage.classList.remove("hidden")
  homePage.classList.add("hidden")
}

function hideSavedCoversPage(){
  savedPage.classList.add("hidden")
}

function hideCoverButtons() {
  ranCoverButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
};

function addHomeButton() {
  homeButton.classList.remove('hidden')
};

function displayHiddenForm() {
  coverForm.classList.remove('hidden')
  homePage.classList.add('hidden')
};

function displayHomePage() {
  homePage.classList.remove('hidden')
};

function hideCoverFormPage(){
  coverForm.classList.add('hidden')
}

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
