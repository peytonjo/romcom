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

var currentCover = new Cover(getRandomImage(),getRandomTitle(),getDescriptor(),getDescriptor());

// Add your event listeners here 👇
ranCoverButton.addEventListener("click", generateRandomCover);
moveToFormButton.addEventListener("click", viewForm);
homeButton.addEventListener("click", viewHome);
viewSavedCoversBtn.addEventListener("click", viewSavedCovers);
makeNewBookBtn.addEventListener('click', savedNewBookInputs);

// Create your event handlers and other functions here 👇




function viewHome() {
  displayHomePage();
  homeHideButton();
  homeAddButtons();
  hideSavedCoversPage();
  hideCoverFormPage();
};

function viewSavedCovers(){
  displayHiddenSavedCovers();
  addHomeButton();
  hideCoverButtons();
};

function viewForm() {
  displayHiddenForm();
  hideCoverButtons();
  addHomeButton();
};

function displayHiddenSavedCovers(){
  savedPage.classList.remove("hidden")
  homePage.classList.add("hidden")
};

function hideSavedCoversPage(){
  savedPage.classList.add("hidden")
};

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
};

function homeHideButton() {
  homeButton.classList.add('hidden')
};

function homeAddButtons() {
  ranCoverButton.classList.remove('hidden')
  saveCoverButton.classList.remove('hidden')
};


function generateRandomCover() {
  // console.log(covers.length);
  // console.log(covers);
  if (covers.length > 27) {
    // console.log(covers.length, covers);
    // console.log("hi");
    var userImage = covers[covers.length - 1]
    var userTitles = titles[titles.length -1]
    var userDescriptorOne = descriptors[descriptors.length - 1]
    var userDescriptorTwo = descriptors[descriptors.length - 2]
    // console.log(userDescriptorOne, userDescriptorTwo)

    return new Cover(userImage, userTitles, userDescriptorOne, userDescriptorTwo)
    };

  var currentCover = new Cover(getRandomImage(),getRandomTitle(),getDescriptor(),getDescriptor())

  descriptorOne.innerText = currentCover.tagline1;
  descriptorTwo.innerText = currentCover.tagline2;
  randomImg.src = currentCover.cover;
  randomCoverTitle.innerText = currentCover.title;
};

function getRandomImage() {
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

function savedNewBookInputs(e) {
  e.preventDefault()
  var titleInput = document.querySelector('#title')
  titles.push(titleInput.value);
  console.log(titles)

  var coverInput = document.querySelector('#cover')
  covers.push(coverInput.value);

  var descriptorOneInput = document.querySelector('#descriptor1')
  descriptors.push(descriptorOneInput.value);

  var descriptorTwoInput = document.querySelector('#descriptor2')
  descriptors.push(descriptorTwoInput.value);
  // console.log(titles)
  // console.log(covers)
  // console.log(descriptors)

  var custom = new Cover(coverInput.value, titleInput.value, descriptorOneInput.value, descriptorTwoInput.value)
  viewHome();
}
