var snowImg

function preload() {
  snowImg =loadImage("snow2.jpg");
}
function setup() {
 createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(snowImg);  
  drawSprites();
}