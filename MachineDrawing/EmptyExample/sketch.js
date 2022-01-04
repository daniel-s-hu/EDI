function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  drawCircle(300,200,300);


}

function drawCircle(x,y,d) {
  ellipse(x,y,d);
  if(x<width){
   drawCircle(x+20,y,d*.8);
  }
}

//function drawCircle2(x,y,d) {
  //ellipse(x,y,d);
  //drawCircle(x,y+20,d);
//}
