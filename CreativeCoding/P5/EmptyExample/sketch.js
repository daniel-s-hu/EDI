function setup() {
  // runs ounces
  createCanvas(720, 720);
  fill("green");
  strokeWeight(8);
}

function draw() {
  // runs in a loop
  background(220);
  translate(60, 60);
  quad(0, 0, 300, 0, 300, 300, 0, 300);
  quad(300, 0, 600, 0, 600, 300, 300, 300); // increase x 300 px
  quad(0, 300, 300, 300, 300, 600, 0, 600); // increase y 300 px
  quad(300, 300, 600, 300, 600, 600, 300, 600); // increase y 300 px
  noLoop();
}
