const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
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
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
  //puts an img over the background
  let bigdiv = document.getElementById('game');
  for(let iter of bigdiv.children){
    var img = document.createElement('img'); 
    img.src = 'https://i.pinimg.com/236x/b5/dc/6d/b5dc6d1dbfcefa9085f31237baa01c9b.jpg';
    img.classList.add('image');
    img.style.width = "100px";
    img.style.height = "100px";
    iter.appendChild(img);
  }
}
let temparr = []; //global
// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target.className);
  //let game = 1;
  temparr.push(event.target.className);
  console.log(temparr.length);
  gameplay(temparr);
  
}
function gameplay(arr)//will take in array from handleCard
{
  //array has two elements and they're both the same
  if((temparr.length === 2) && (temparr[0] === temparr[1])){
    var innerDivs = game.getElementsByTagName("DIV"); //list of divs

    //if all div's are gone game is over
    if(innerDivs.length==0){
      game = 0; 
    }
    for(var i=0; i<innerDivs.length; i++) //going thru the list
    {
      //console.log(innerDivs[i].className);
      //innerDivs[i].parentNode.removeChild(innerDivs[i]
      if(temparr[0] == innerDivs[i].className){
       removeElementsByClass(innerDivs[i].className); //function call
      }
      
    }
    temparr=[];
  }
  //reset the array to zero if more than two are clicked
  else if(temparr.length >= 2){
    temparr = [];
  }
}
//removes all instances of that classname
function removeElementsByClass(className){
  var elements = document.getElementsByClassName(className);
  while(elements.length > 0){
      console.log(elements)
      elements[0].parentNode.removeChild(elements[0]);
  }
}
//remove imag in order to reveal backgroud
//incomplete!
function showCard(event)
{
  //setTimeout(2000,showCard) to call this function
  const imag = document.getElementsByClassName('image');
  let container = imag.parentNode;
  container.removeChild(imag);
}
//add the imag back so it's hidden again
//incomplete!
function hideCard(event.target?)
{
  if(array.length === 0)
  {
    var img = document.createElement('img'); 
    img.src = 'https://i.pinimg.com/236x/b5/dc/6d/b5dc6d1dbfcefa9085f31237baa01c9b.jpg';
    img.classList.add('image');
    img.style.width = "100px";
    img.style.height = "100px";
    element.appendChild(img); 
      //element in not defined here. Needs to be targeted click
  }
  //want to rehide the card if array is empty by adding back the img
}

// when the DOM loads
createDivsForColors(shuffledColors);
