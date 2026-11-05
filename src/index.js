const state ={
  dogImage : null,
};
const NUMBER_OF_DOGS = 15;

const loadControls = () => {
  state.dogImage = document.getElementById('dog-image');
}

const pickRandomNumber = () => {
  // Pick a random number of the next image to use
  return Math.floor(Math.random() * NUMBER_OF_DOGS) + 1;
};

const setRandomImage = () =>{
  const imgnumber = pickRandomNumber();
  const newImage = `../imgs/${imgnumber}.jpeg`;
  state.dogImage.src = newImage;
};

const onLoaded = () => {
  // steps to carry out when the page has loaded
  loadControls();
  setRandomImage();
  console.log('JavaScript is working!');
};

onLoaded();
