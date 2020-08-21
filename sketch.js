const scale = 1;

function setup() {
  createCanvas(1280 * scale, 720 * scale);
}

var drawCompleted = false;

function draw() {
  if (drawCompleted) {
    return;
  }
  doDraw();
  drawCompleted = true;
}

const doDraw = function() {
  Colors.Coconut.background();
  noStroke();

  // vertical lines
  for (var i = 0; i < 250; ++i) {
    const n = random(1),
      alpha = random(70);
    if (n < 0.2) {
    } else if (n < 0.4) {
      Colors.Hibiscus.stroke(alpha);
    } else if (n < 0.6) {
      Colors.Mustard.stroke(alpha);
    } else if (n < 0.8) {
      Colors.Cocoa.stroke(alpha);
    } else {
      Colors.Amethyst.stroke(alpha);
    }
    strokeWeight(random(3) * scale);
    const x = random(width);
    line(x, 0, x + negativeHalf(random(30)), height);
  }

  noStroke();
  blendMode(MULTIPLY);
  for (var i = 0; i < 200; ++i) {
    drawFlower(290 * scale);
    drawStar(470 * scale);
  }

  // triangles
  noStroke();
  blendMode(MULTIPLY);
  const triangleNum = 350;
  for (var i = 0; i < triangleNum; ++i) {
    Colors.Deepsea.fill(random(255));
    const
      x1 = random(width + 30 * scale) - 30 * scale,
      x2 = x1 + max(random(50 * scale), 10 * scale);
    triangle(x1, 0, x2, 0, x1 + (x2 - x1) / 2, max(100 * scale, random(180 * scale)));
  }
  for (var i = 0; i < triangleNum; ++i) {
    Colors.Deepsea.fill(random(255));
    const
      x1 = random(width + 30 * scale) - 30 * scale,
      x2 = x1 + max(random(50 * scale), 10 * scale);
    triangle(x1, height, x2, height, x1 + (x2 - x1) / 2, height - max(100 * scale, random(180 * scale)));
  }

  // top / bottom bubbles
  noStroke();
  blendMode(BLEND);
  Colors.Coconut.fill();
  for (var i = 0; i < 30; ++i) {
    const size = random(30 * scale);
    ellipse(random(width), 20 * scale + negativeHalf(random(20 * scale)), size, size);
    ellipse(random(width), height - 20 * scale + negativeHalf(random(20 * scale)), size, size);
  }
};

const drawFlower = function(baseY) {
  const n = random(1),
    alpha = max(random(255), 150);
  if (n < 0.2) {
    Colors.Coral.fill(alpha);
  } else if (n < 0.4) {
    Colors.Omelet.fill(alpha);
  } else if (n < 0.6) {
    Colors.Hydrangea.fill(alpha);
  } else if (n < 0.8) {
    Colors.Apricot.fill(alpha);
  } else {
    Colors.Sky.fill(alpha);
  }
  flower(random(width), baseY + negativeHalf(random(40)), random(70 * scale), random(360));
};

const flower = function(centerX, centerY, size, angle) {
  const
    longLen = size * 0.6,
    shortLen = longLen,
    longWidth = longLen * 0.7,
    shortWidth = shortLen * 0.7;
  ellipseMode(CENTER);
  push();
  translate(centerX, centerY);
  rotate(radians(-45 + angle));
  ellipse(longLen / 2, 0, longLen, longWidth);
  ellipse(0, longLen / 2 * -1, longWidth, longLen);
  ellipse(shortLen / 2 * -1, 0, shortLen, shortWidth);
  ellipse(0, shortLen / 2, shortWidth, shortLen);
  pop();
};

const drawStar = function(baseY) {
  Colors.Cocoa.fill(random(255));
  const len = max(10 * scale, random(70 * scale));
  push();
  translate(random(width), baseY + negativeHalf(random(30 * scale)));
  rotate(radians(random(360)));
  star(0, 0, len, len / 5, randomApex());
  pop();
};

const randomApex = function() {
  return 6 + Math.floor(random(2));
};

var star = function(centerX, centerY, radiusLong, radiusShort, apex) {
  if (!apex || apex < 3) {
    apex = 5;
  }
  push();
  translate(centerX, centerY);
  rotate(radians(-90));
  beginShape();
  const totalApex = apex * 2;
  for (var i = 0; i < totalApex * 2; ++i) {
    const
      radius = (i % 2 == 0) ? radiusLong : radiusShort,
      angle = radians(360 * i / totalApex);
    vertex(radius * cos(angle), radius * sin(angle));
  };
  endShape(CLOSE);
  pop();
};

const negativeHalf = function(v) {
  return (random(1) > 0.5) ? v : v * -1;
};

const Color = function(hex) {
  if (hex.startsWith("#")) {
    hex = hex.substring(1);
  }
  return {
    r: parseInt(hex.substring(0, 2), 16),
    g: parseInt(hex.substring(2, 4), 16),
    b: parseInt(hex.substring(4, 6), 16),

    background: function(alpha) {
      background(this.r, this.g, this.b, alpha);
    },

    stroke: function(alpha) {
      stroke(this.r, this.g, this.b, alpha);
    },

    fill: function(alpha) {
      fill(this.r, this.g, this.b, alpha);
    }
  };
};

const Colors = {
  Hibiscus: Color("#ff0086"),
  Coral: Color("#ff7f8f"),
  Apricot: Color("#ffac0d"),
  Omelet: Color("#ffef73"),
  Mustard: Color("#d0af4c"),
  Deepsea: Color("#00687c"),
  Sky: Color("#009cd1"),
  Hydrangea: Color("#9568a6"),
  Amethyst: Color("#614876"),
  Cocoa: Color("#8D6A70"),
  Coconut: Color("#ebe7e1")
};
