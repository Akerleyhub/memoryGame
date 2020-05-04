const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "grey",
  "orange",
  "purple",
  "red",
  "blue",
  "grey",
  "green",
  "orange",
  "purple",
  "yellow",
  "yellow"
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
    img.style.width = "200px";
    img.style.height = "200px";
    iter.appendChild(img);
  }
}

let temparr = []; //global

function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target.className);
  //let game = 1;
  temparr.push(event.currentTarget.className);
  console.log(temparr);
  console.log(temparr.length);
  showCard(event.currentTarget); //exact target being clicked
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
function showCard(target)
{
  //target.style.visibility = 'hidden';
  //console.log(target.children);
  if(target.children[0] == undefined){
    return;
  }
  else{
    target.removeChild(target.children[0]);
    setTimeout(function(){
      hideCard(target);
    },2000);
  }
}
function hideCard(t)
{
  var img = document.createElement('img'); 
  img.src = 'https://i.pinimg.com/236x/b5/dc/6d/b5dc6d1dbfcefa9085f31237baa01c9b.jpg';
  img.classList.add('image');
  img.style.width = "200px";
  img.style.height = "200px";
  t.appendChild(img); 

  //want to rehide the card if array is empty by adding back the img
}


// when the DOM loads
createDivsForColors(shuffledColors);