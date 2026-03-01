function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  smooth();
}

function draw() {
  background(200);
  translate(0, 25 * Math.tan(0.01 * frameCount));
  rotateX(0.01 * frameCount);
  rotateY(0.015 * frameCount);
  rotateZ(0.02 * frameCount);
  fill(
    127 * Math.sin(0.03 * frameCount + 0) + 128,
    127 * Math.sin(0.03 * frameCount + 2) + 128,
    127 * Math.sin(0.03 * frameCount + 4) + 128,
  );
  box(Math.sqrt(windowWidth * windowHeight) / 10);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
