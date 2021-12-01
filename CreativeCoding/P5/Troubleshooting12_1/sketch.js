// copied empty example
// copy/paste 2x2 loop (code verified)
// assest folder w png
// checked color of fill (code verified)
// p5.js loadImage reference
// replaced grid w image
// pushed to Github

let img; // declare image variable

function preload (){
img = loadImage('assets/AiBGsingle.png');
}

function setup() {
  // runs ounces
  createCanvas(720, 720);
  fill("green");
  strokeWeight(8);
}

function draw() {

  image(img,0,0);
  // runs in a loop
  background(220);
  translate(60, 60);

  for (var y = 0; y < 600; y = y + 300) { // loop to create rows in y direction
    for (var x = 0; x < 600; x = x + 300) { // loop to create a row of squares in x direction
    image(img,x,y);
  }
  }

  noLoop();
}
