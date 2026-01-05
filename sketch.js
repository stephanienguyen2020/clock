let lastMinute = -1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100);
  strokeCap(ROUND);
}

function draw() {
  background(230, 30, 15);

  let h = hour();
  let m = minute();
  let s = second();

  if (m !== lastMinute) {
    console.log(m);
    lastMinute = m;
  }

  translate(width / 2, height / 2);
  rotate(-90);

  // --- Reference Ticks ---
  strokeWeight(4);
  strokeCap(SQUARE);
  for (let i = 0; i < 12; i++) {
    push();
    rotate(i * 30);

    // Hour markers (Inner)
    stroke(40, 80, 30);
    line(60, 0, 80, 0);

    // Minute markers (Middle)
    stroke(200, 80, 30);
    line(100, 0, 120, 0);

    // Second markers (Outer)
    stroke(320, 80, 30);
    line(140, 0, 160, 0);

    pop();
  }
  strokeCap(ROUND);

  noFill();
  strokeWeight(20);

  // --- Seconds ---
  let sWeight = map(sin(frameCount * 6), -1, 1, 15, 25);
  strokeWeight(sWeight);
  stroke(320, 80, 90);
  let sAngle = map(s, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, sAngle);

  // Tip for Seconds
  push();
  rotate(sAngle);
  translate(150, 0);
  noStroke();
  fill(320, 20, 100);
  ellipse(0, 0, 8, 8);
  pop();

  // --- Minutes ---
  strokeWeight(20);
  stroke(200, 80, 90);
  let mAngle = map(m, 0, 60, 0, 360);
  arc(0, 0, 220, 220, 0, mAngle);

  // Tip for Minutes
  push();
  rotate(mAngle);
  translate(110, 0);
  noStroke();
  fill(200, 20, 100);
  ellipse(0, 0, 8, 8);
  pop();

  // --- Hours ---
  strokeWeight(20);
  stroke(40, 80, 90);
  let h12 = h % 12;
  let hAngle = map(h12, 0, 12, 0, 360);
  arc(0, 0, 140, 140, 0, hAngle);

  // Tip for Hours
  push();
  rotate(hAngle);
  translate(70, 0);
  noStroke();
  fill(40, 20, 100);
  ellipse(0, 0, 8, 8);
  pop();

  // --- Center/Decor ---

  rotate(90);
  noStroke();

  // Glowing center core
  for (let i = 0; i < 5; i++) {
    fill(0, 0, 100, 0.15 - i * 0.03);
    let pulse = map(sin(frameCount * 3), -1, 1, 0, 10);
    let size = 20 + i * 15 + pulse;
    ellipse(0, 0, size, size);
  }

  fill(0, 0, 100, 0.8);
  ellipse(0, 0, 10, 10);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
