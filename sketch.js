function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  const t = millis() / 1000;
  background(200);
  translate(0, 25 * sin(t * 0.6));
  rotateX(t * 0.6);
  rotateY(t * 0.9);
  rotateZ(t * 1.2);
  fill(
    127 * sin(t * 1.8 + 0) + 128,
    127 * sin(t * 1.8 + TWO_PI / 3) + 128,
    127 * sin(t * 1.8 + (TWO_PI * 2) / 3) + 128,
  );
  box(sqrt(windowWidth * windowHeight) / 10);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
