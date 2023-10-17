let canvas1 = document.querySelector(".canvas");
console.log(canvas1);
let context = canvas1.getContext("2d"); //to get 2d context rendering

context.fillStyle = "orange"; //specifies the color that fills the context
context.fillRect(10, 10, 150, 100); //draws a rectangle with the specified fill style. The first 2 parameters are the x and y co ordinates from the top left corner. The last 2 are the width and height of the rectangle

// !DRAWING LINES WITH LINETO
// Draw C
context.beginPath();
context.moveTo(40, 20);
context.lineTo(17, 20);
context.lineTo(17, 50);
context.lineTo(40, 50);
// Letter O
context.moveTo(50, 20);
context.lineTo(50, 50);
context.lineTo(65, 50);
context.lineTo(65, 20);
context.lineTo(50, 20);

// letter L
context.moveTo(70, 20);
context.lineTo(70, 50);
context.lineTo(85, 50);

context.stroke();


// !FILL TEXT
let canvas2 = document.querySelector(".canvas2");
let context2 = canvas2.getContext("2d");
context2.fillStyle = "blue";
// context2.fillRect(10,10,200,100)
context2.font = "60px sans-serif";
context2.fillText("COLLINS", 15, 90);


// !STROKE TEXT
let canvas3 = document.querySelector(".canvas3");
let context3 = canvas3.getContext("2d");
context3.strokeStyle = "red";
context3.font = "60px sans-serif";
context3.strokeText("COLLINS", 15, 90);

// !STROKE RECTANGLE
const canvas4 = document.querySelector(".canvas4")
const context4 = canvas4.getContext("2d")
context4.strokeStyle = "orange";
context4.strokeRect(10, 10, 150, 100);

// !FILL RECTANGLE
let canvas5 = document.querySelector(".canvas5")
let context5 = canvas5.getContext("2d")
context5.fillStyle='orange';
context5.fillRect(10,10,150,100)

// !DRAWING AN IMAGE 
let canvas6  = document.querySelector(".canvas6")
let context6 = canvas6.getContext("2d")
let image = new Image()
image.src = "rat.png"
image.onload = function(){
    context6.drawImage(image, 90, 10, 100, 120);
    
}

// !USING CLOSEPATH
