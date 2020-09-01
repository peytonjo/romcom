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
var userTitleInput = document.querySelector('#title');
var userImgInput = document.querySelector('#cover');
var userDescriptorInput1 = document.querySelector('#descriptor1');
var userDescriptorInput2 = document.querySelector('#descriptor2');
var saveButton = document.querySelector('.save-cover-button');


// On page load generate random values
generateRandomCover();

// We've provided a few variables below
var savedCovers = [];

// Add your event listeners here 👇
ranCoverButton.addEventListener("click", generateRandomCover);
moveToFormButton.addEventListener("click", viewForm);
homeButton.addEventListener("click", viewHome);
viewSavedCoversBtn.addEventListener("click", viewSavedCovers);
makeNewBookBtn.addEventListener("click", saveNewBookInputs)
saveButton.addEventListener('click', saveCover)

// Create your event handlers and other functions here 👇
function saveCover(event) {
  event.preventDefault();
  var coverToSave =  new Cover(randomImg.src, randomCoverTitle.innerText, descriptorOne.innerText, descriptorTwo.innerText);
};


 // look through the savedCovers array
 // compare coverToSave img, title, descriptors with each items img, title, descriptors in savedCovers

// function checkDuplicates() {
//   for (var i = 0; i < savedCovers.length + 1; i++) {
//     if (savedCovers.length < 1 || savedCovers[i].cover !== randomImg.src) {
//       savedCovers.push(coverToSave)
//     } else {
//     }
//   }

  // if (savedCovers.find(cover => cover.cover === randomImg.src) == undefined) {
  //   console.log('hi')
  //   savedCovers.push(coverToSave)
  // } else {
  //   console.log('yay')
  // }
// };

function saveNewBookInputs(event){
  event.preventDefault();
  imgInput();
  titleInput();
  firstDescriptorInput();
  secondDescriptorInput();
  generateUserCover();
}

function imgInput(){
  covers.push(userImgInput.value)
}

function titleInput(){
  titles.push(userTitleInput.value)
}

function firstDescriptorInput(){
  descriptors.push(userDescriptorInput1.value)
}

function secondDescriptorInput(){
  descriptors.push(userDescriptorInput2.value)
}

function generateUserCover() {  // this is a lot like generateRandomCover can we make one function dynamic?
  var userCover = new Cover(userImgInput.value, userTitleInput.value, userDescriptorInput1.value, userDescriptorInput2.value)

  descriptorOne.innerText = userCover.tagline1;
  descriptorTwo.innerText = userCover.tagline2;
  randomImg.src = userCover.cover;
  randomCoverTitle.innerText = userCover.title;

  viewHome();
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
