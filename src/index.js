const state ={
  dogImageContainer : null,
  addDogButton : null,
};

const NUMBER_OF_DOGS = 15;

const loadControls = () => {
  state.dogImageContainer = document.getElementById('dog-img-container');
  state.addDogButton = document.getElementById('addDogButton');
};

const pickRandomNumber = () => {
  // Pick a random number of the next image to use
  return Math.floor(Math.random() * NUMBER_OF_DOGS) + 1;
};

const handleAddButtonClicked = (event) => {
  const imgnumber = pickRandomNumber();
  const newImage = `../imgs/${imgnumber}.jpeg`;
  const newDog = document.createElement('img');

  newDog.src = newImage;
  newDog.alt = ' A random dog';
  state.dogImageContainer.prepend(newDog);
}


// const setRandomImage = () =>{
//   const imgnumber = pickRandomNumber();
//   const newImage = `../imgs/${imgnumber}.jpeg`;
//   state.dogImage.src = newImage;
// };
const registerEvents = () => {
  state.addDogButton.addEventListener('click',handleAddButtonClicked);
}
const onLoaded = () => {
  // steps to carry out when the page has loaded
  loadControls();
  registerEvents();
  // setRandomImage();
  console.log('JavaScript is working!');
};

onLoaded();
