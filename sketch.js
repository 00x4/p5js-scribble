let
  objs_ = [],
  colorIndex_ = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  //noStroke();
  blendMode(BLEND);
  for (let i = 0, until = 50; i < until; ++i) {
    objs_.push(mkObj(random(windowWidth), random(windowHeight)));
  }
}

function draw() {
  background(Colors.Drizzly.hex);
  if (frameCount % 20 === 0) {
    colorIndex_ = parseInt(random(5));
  }
  for (let i = 0, len = objs_.length; i < len; ++i) {
    const x = objs_[i];
    x.draw(colorIndex_);
  }
}

const mkObj = (x, y) => {
  const
    MAX_SIZE = min(windowWidth, windowHeight) * 2,
    C = [
      random([Colors.Strawberry, Colors.Coral, Colors.Peach]),
      random([Colors.Sky, Colors.Larimar]),
      random([Colors.Tangerine, Colors.Apricot, Colors.Omelet]),
      random([Colors.Amethyst, Colors.Violet, Colors.Sodapop]),
      random([Colors.Charcoal, Colors.Drizzly, Colors.Hibiscus])
    ];
  let
    size = random(MAX_SIZE),
    expanding = true;
  return {
    draw: function(colorIndex) {
      if (random(100) > 30) {
        size += random(300) * (expanding ? 1 : -1);
        if (expanding && size >= MAX_SIZE) {
          expanding = false;
        } else if (!expanding && size <= 0) {
          size = 0;
          expanding = true;
        }
      }
      strokeWeight(random(200));
      stroke(C[colorIndex].hex);
      C[colorIndex].fill(150);
      ellipse(x, y, size, size);
    }
  };
};
