var
  _dotColor,
  _isEllipse,
  _counter;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(150);
  fill(255);
  rectMode(CENTER);
  ellipseMode(CENTER);
  _dotColor = color(random(230, 255), random(230, 255), random(230, 255));
  _isEllipse = false;
  _counter = 0;
}

function draw() {
  const size = max(10, random(80));
  _dotColor = changeColorLittleBit(_dotColor);
  fill(_dotColor);
  stroke(150);
  strokeWeight(1);
  if (random(100) < 50) {
    _isEllipse = !_isEllipse;
  }
  drawCloud(size);
  if (_counter ++ > 10) {
    drawSmoke();
    _counter = 0;
  }
}

const negativeHalf = function(v) {
  return (random(1) > 0.5) ? v : v * -1;
};

const changeColorLittleBit = (c) => {
  return color(
    min(max(red(c) + random(-3, 3), 230), 255),
    min(max(green(c) + random(-3, 3), 230), 255),
    min(max(blue(c) + random(-3, 3), 230), 255)
  );
};

const drawCloud = (size) => {
  if (random(100) < 50) {
    blendMode(BLEND);
  } else {
    blendMode(MULTIPLY);
  }
  for (var i = 0; i < 50; ++i) {
    const
      x = random(width),
      y = random(height);
    if (_isEllipse) {
      ellipse(x, y, size, size);
    } else {
      rect(x, y, size, size);
    }
  }
};

const drawSmoke = () => {
  blendMode(BLEND);
  fill(color(255, 30));
  noStroke();
  rect(width / 2, height / 2, width, height);
};
