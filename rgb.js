var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyMode = document.getElementById("easy");
var hardMode = document.getElementById("hard");



easyMode.addEventListener("click", function() {
    hardMode.classList.remove("selected");
    easyMode.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
          squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardMode.addEventListener("click", function(){
    easyMode.classList.remove("selected");
    hardMode.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});


resetButton.addEventListener("click", function() {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    // pick new random colors from array
    pickedColor = pickColor();
    // change the color in display
    colorDisplay.textContent = pickedColor;
    this.textContent = "New Colors";

    messageDisplay.textContent = "";
    // change colors of the squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i]
    }
    h1.style.backgroundColor = "steelblue";
    })

colorDisplay.textContent = pickedColor; 

// adding initial colors to squares
for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    // adding click listeners to squares
squares[i].addEventListener("click", function(){
    // grab color of picked square
   var clickedColor = this.style.backgroundColor;
     // compare the color with picked square
     console.log(clickedColor, pickedColor);
   if(clickedColor === pickedColor) {
       messageDisplay.textContent = "CORRECT"
       resetButton.textContent = "PLAY AGAIN ?"
       changeColors(pickedColor);
       h1.style.backgroundColor = pickedColor;
   } else {
       this.style.backgroundColor = "#232323"
       messageDisplay.textContent = "TRY AGAIN"
   }
});
};

function changeColors (color) {
    // loop through all squares
    for(var i = 0; i < squares.length; i++) {
        // change color of each square to pickedColor
        squares[i].style.backgroundColor = color;
      }
    
};

//picking random color of square to guess
function pickColor () {
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
};

function generateRandomColors(num) {
// picking random colors of squares
// make an array
var arr = []
// add num random colors
for (var i = 0; i < num; i++) {
//get random color and push to array
arr.push(randomColor())
};
// return the array
return arr;
}

function randomColor(){
    //pick random red 0-255
   var r = Math.floor(Math.random() * 256);
    //pick random green 0-255
   var g = Math.floor(Math.random() * 256);
    //pick random blue 0-255
   var b = Math.floor(Math.random() * 256);

   return "RGB(" + r + ", " + g + ", " + b +")"; 
};