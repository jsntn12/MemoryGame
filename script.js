const gameContainer = document.getElementById("game");
let header = document.getElementById("header");

const COLORS = [
  "red", "blue", "green", "orange", "purple", "black", "red", "blue", "green", "orange", "purple", "black"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);
    // Decrease counter by 1
    counter--;
    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

let shuffledColors = shuffle(COLORS);
// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  let counter = 1
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");
    const newImg = document.createElement("img");
    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    newDiv.setAttribute("id", counter);
    newImg.src = "images/blank.jpg";
    newDiv.append(newImg);
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);
    // append the div to the element with an id of game
    gameContainer.append(newDiv);
    counter++
  }
}
let usrGss = [];
let usrId = [];
// TODO: Implement this function!
let score = 0;
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  usrGss.push(this.classList.value);
  event.target.classList.toggle("hideImage"); 
  usrId.push(this.id);
  document.getElementById(this.id).removeEventListener("click", handleCardClick);
  
  
  
  // check the guesses match
  if (usrGss.length >= 2 && usrGss[0] === usrGss[1]){
    console.log("IN the if statement")
    usrGss = [];
    usrId = [];
    score +=10;
    header.innerText = 'Score = ' + score;

    // reset the array 
  }
  // check if length of usrGss > 2 reset to 0 added event listender
  else if(usrGss.length >= 2){
    console.log("THE else if");
      let blank1 = document.getElementById(usrId[0]);
      let blank2 = document.getElementById(usrId[1]);
      score--

      
    setTimeout(function(){
      blank1.firstChild.classList.toggle("hideImage");
      blank2.firstChild.classList.toggle("hideImage");
      blank1.addEventListener("click", handleCardClick);
      blank2.addEventListener("click", handleCardClick); 

    }, 500)

    usrGss = [];
    usrId = [];
  }

}

// when the DOM loads
createDivsForColors(shuffledColors);

/* */

// add the image as background of div 
// attach an img to the color div 
// test the none display with hover
// add the cliked event to array
// remove event listener from this 
// compare the event in array 
// add event listener to clicked items 
