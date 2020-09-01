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
var userDescriptorInput1 = document.querySelector('#descriptor1')
var userDescriptorInput2 = document.querySelector('#descriptor2')
var savedCoverSection = document.querySelector('.saved-covers-section')

generateRandomCover();

// We've provided a few variables below
var savedCovers = [
];
var currentCover;

// Add your event listeners here 👇
ranCoverButton.addEventListener("click", generateRandomCover);
moveToFormButton.addEventListener("click", viewForm);
homeButton.addEventListener("click", viewHome);
viewSavedCoversBtn.addEventListener("click", viewSavedCovers);
makeNewBookBtn.addEventListener("click", saveNewBookInputs)
saveCoverButton.addEventListener("click", saveNewCover)

// Create your event handlers and other functions here 👇


function saveNewBookInputs(event){
  event.preventDefault();
  imgInput();
  titleInput();
  firstDescriptorInput();
  secondDescriptorInput();
  generateUserCover();
  viewHome();
}

function imgInput(){ // look into refactor (dynamic inputs ??)
  covers.push(userImgInput.value)
}

function titleInput(){ // look into refactor (dynamic inputs ??)
  titles.push(userTitleInput.value)
}

function firstDescriptorInput(){ // look into refactor (dynamic inputs ??)
  descriptors.push(userDescriptorInput1.value)
}

function secondDescriptorInput(){ // look into refactor (dynamic inputs ??)
  descriptors.push(userDescriptorInput2.value)
}

function generateUserCover() {  // this is a lot like generateRandomCover can we make one function dynamic?
  var userCover = new Cover(userImgInput.value, userTitleInput.value, userDescriptorInput1.value, userDescriptorInput2.value)

  descriptorOne.innerText = userCover.tagline1;
  descriptorTwo.innerText = userCover.tagline2;
  randomImg.src = userCover.cover;
  randomCoverTitle.innerText = userCover.title;

  currentCover = userCover
}

function saveNewCover() {
  console.log('currentCover:', currentCover)
 if (savedCovers.indexOf(currentCover) === -1) {
   savedCovers.push(currentCover)
   console.log(savedCovers)
 }
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
};

function viewForm() {
  displayHiddenForm();
  hideCoverButtons();
  addHomeButton();
};

function addSavedCovers(){
  for(var i = 0; i < savedCovers.length; i++){
    savedCoverSection.innerHTML += `
      <section class="mini-cover">
        <img class="cover-image" src= ${savedCovers[i].cover}>
        <h2 class="cover-title"> ${savedCovers[i].title} </h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png">
      </section>
    `
  }
}

function displayHiddenSavedCovers(){
  savedPage.classList.remove("hidden")
  homePage.classList.add("hidden")
  addSavedCovers();
}

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
  var bookCover = new Cover(getRandomImage(),getRandomTitle(),getDescriptor(),getDescriptor());

  descriptorOne.innerText = bookCover.tagline1;
  descriptorTwo.innerText = bookCover.tagline2;
  randomImg.src = bookCover.cover;
  randomCoverTitle.innerText = bookCover.title;

  currentCover = bookCover
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
