var rate;
var posX=0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	textAlign(LEFT);
	textSize(30);
	rectMode(LEFT);
  background(255);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	posX++;
	if ( posX > width ) { posX = 0; } //print("reset "+pX); }
	rate = frameRate();
	noStroke();
  fill(255);
	rect(width / 2-35, height / 2-35,100,40);     // clean old number
	fill(255-rate*3,rate*3,0);
	text(nf(rate, 1, 1), width / 2, height / 2);
	stroke(255-rate*3,rate*3,0);
  line(posX,height/2+200,posX,height/2+200-2*rate+1);
	stroke(255);                                  // clear old longer lines
  line(posX,height/2+200-2*rate,posX,height/2-200);
  line(posX+1,height/2+200,posX+1,height/2-200);    // and show a leading empty line

}
