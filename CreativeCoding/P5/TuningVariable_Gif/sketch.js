let gif;

function preload (){
gif = loadImage('Gif/Car.gif');
}

function setup() {
  // runs ounces
  createCanvas(windowWidth, windowHeight);
  fill("green");
  strokeWeight(1);
}

function draw() {
  background(255);
  translate(1,0);
  var num = 5; // variable for # of squares
  var sideLen = windowWidth/num; // variable for side length of each square

  for (var y = 0; y < windowHeight; y = y + sideLen) { // loop to create rows in y direction
    for (var x = 0; x < windowWidth; x = x + sideLen) { // loop to create a row of squares in x direction
    image(gif, x, y, windowWidth/num, windowWidth*.69/num);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
