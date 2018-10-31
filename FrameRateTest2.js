function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  textAlign(CENTER, CENTER);
  text(frameRate(), width / 2, height / 2);
}


