**THE JAVASCRIPT CANVAS API**

- We use the canvas API to draw graphics on a web page. Everything drawn on the canvas is done with JavaScript.
- In the html file we use the canvas tag to create a canvas element. The canvas element has a width and height attribute that we can use to set the size of the canvas.
- We can draw a line on the canvas using the lineTo() method. The lineTo() method takes two arguments, the x and y coordinates of the line's end point.
- Before using the lineTo() method we need to use the beginPath() method. The beginPath() method starts a new path. After this, we can use the moveTo() method to move the path to a new point.
- After drawing a line we can use the stroke() method to draw the line.

```javascript
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
```

- Another method of filling a canvas with some text is by using the fillText() method. The fillText() method takes three arguments, the text to be displayed, the x and y coordinates of the text.
- We can also use the font property to set the font of the text. The font property takes a string value that specifies the font size and font family.

```javascript
let canvas2 = document.querySelector(".canvas2");
let context2 = canvas2.getContext("2d");
context2.fillStyle = "blue";
context2.font = "60px sans-serif";
context2.fillText("COLLINS", 15, 90);
```

- Finally, we can also use the stroketext() method to draw text on the canvas. The strokeText() method takes the same arguments as the fillText() method.

```javascript
let canvas3 = document.querySelector(".canvas3");
let context3 = canvas3.getContext("2d");
context3.strokeStyle = "red";
context3.font = "60px sans-serif";
context3.strokeText("COLLINS", 15, 90);
```
- Drawing an eclipse on the canvas. We use the arc() method to draw an eclipse. The arc() method takes six arguments, the x and y coordinates of the center of the eclipse, the radius of the eclipse, the start angle and end angle of the eclipse, and a boolean value that determines whether the eclipse should be drawn in a clockwise or anticlockwise direction.
```javascript
let canvas8 = document.querySelector(".canvas8")
let context8 = canvas8.getContext("2d")
context8.beginPath()
context8.ellipse(100, 80, 30, 50, Math.PI/4, 0, 2 * Math.PI); 
context8.stroke();
