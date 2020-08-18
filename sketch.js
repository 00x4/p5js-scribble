const
  DELAY_MS = 50,
  MOUSE_MOVE_THRESHOLD = 10,
  LIFE_LIMIT = 10;

var
  _ripples = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(40, 40, 40);

  drawRipples();
  const move = (abs(pmouseX - mouseX) + abs(pmouseY - mouseY)) / 2;
  if (move > MOUSE_MOVE_THRESHOLD) {
    _ripples.push(newRipple(pmouseX, pmouseY, random(100, 300), false));
  } else if (random(100) > 70) {
    _ripples.push(newRipple(random(width), random(height), random(100, 300), false));
  }
}

const newRipple = (x, y, diameter, noOrbit) => {
  var
    age = 0,
    orbitStartAngle = random(360),
    isOrbitReverse = (random(100) > 50);

  const step = () => {
    diameter += age;
    age += 0.2;
  };

  const isAlive = () => {
    return (age < LIFE_LIMIT);
  };

  const draw = (onlyOrbit) => {
    if (!onlyOrbit) {
      drawBody();
    }
    if (!noOrbit) {
      drawOrbit();
    }
  };

  const drawBody = () => {
    noFill();
    stroke(200, 200, 200, 120 - min(120, age * 10));
    for (var child = diameter; child > 0; child -= 100) {
      ellipse(x, y, child, child);
    }
  };

  const drawOrbit = () => {
    push();
    translate(x, y);
    fill(random(200, 255), random(200, 255), random(150, 200), 50);
    noStroke();
    if (isOrbitReverse) {
      rotate((360 - (orbitStartAngle + age * 10)) * PI / 180);
    } else {
      rotate((orbitStartAngle + age * 10) * PI / 180);
    }
    const orbitSize = age * 10;
    ellipse(0, diameter / 2, orbitSize, orbitSize);
    ellipse(0, diameter / -2, orbitSize / 2, orbitSize / 2);
    pop();
  };

  return {
    step: step,
    isAlive: isAlive,
    draw: draw
  };
};

const drawRipples = () => {
  var dels = [];
  for (var i = 0, len = _ripples.length; i < len; ++i) {
    const ripple = _ripples[i];
    ripple.draw();
    ripple.step();
  }
  _ripples = _ripples.filter((x) => { return x.isAlive(); });
};

const negativeHalf = function(v) {
  return (random(1) > 0.5) ? v : v * -1;
};
