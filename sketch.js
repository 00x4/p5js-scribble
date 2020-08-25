const
  SCALE = 1;
  LAYERS = 1;

let
  drawCompleted = false;

function setup() {
  //createCanvas(800 * SCALE, 800 * SCALE);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if (drawCompleted) {
    return;
  }
  //Colors.Chocolate.background();
  background(Colors.Sky.hex);
  for (let i = 0; i < LAYERS; ++i) {
    drawIt();
  }
  drawCompleted = true;
}

const drawIt = (times) => {
  drawLines();
  drawBubbles();
};

const drawLines = () => {
  blendMode(ADD);
  for (let i = 0, until = width * 2; i < until; ++i) {
    if (random(1) <=  0.2) {
      continue;
    }
    strokeWeight(random(3) * SCALE);
    randomColor().stroke(random(255));
    const len = random(450) * random(1) * SCALE;
    line(i, 0, i - len, len);
  }
};

const randomColor = () => {
  const n = random(1);
  if (0.8 < n) {
    return Colors.Mushroom;
  } else if (0.6 < n && n <= 0.8) {
    return Colors.Strawberry;
  } else if (0.4 < n && n <= 0.6) {
    return Colors.Chick;
  } else if (0.2 < n && n <= 0.4) {
    return Colors.Sky;
  } else {
    return Colors.Hibiscus;
  }
};

const blendModeRandom = () => {
  blendMode(random(1) > 0.8 ? ADD : BLEND);
};

const drawBubbles = () => {
  for (let i = 0; i < 100; ++i) {
    blendModeRandom();
    drawBubble(posInRange(random(width)), random(height), max(20, random(40)));
  }
};

const posInRange = (x) => {
  const
    centerX = width / 2,
    rangeHalf = 80 * SCALE;
  return (centerX - rangeHalf < x && x < centerX + rangeHalf) ? x : posInRange(random(width));
};

const drawBubble = (centX, centY, weight) => {
  for (let i = 0, until = max(4, random(50)); i < until; ++i) {
    const
      c = randomColor(),
      len = max(weight * 0.7, random(weight)) * SCALE;
    if (i % 20 === 0) {
      c.stroke();
      strokeWeight(1 * SCALE);
      noFill();
      const ellipseLen = len * max(3, random(5)) * SCALE;
      ellipse(centX + bit(weight), centY + bit(weight), ellipseLen, ellipseLen);
    }
    noStroke();
    c.fill(max(220, random(255)));
    equilateralPolygon(
      centX - len * 0.4 + bit(weight),
      centY - len * 0.4 + bit(weight),
      len / 2 * SCALE, randomApex());
  }
};

const randomApex = () => {
  const x = random(12);
  return x > 2 ? x : randomApex();
};

const bit = (weight) => {
  return (random(weight) - random(weight)) * SCALE;
};
