const equilateralPolygon = (centerX, centerY, radius, apex) => {
  if (apex < 3) {
    apex = 3;
  }
  push();
  translate(centerX, centerY);
  if (apex % 2 != 0) {
    rotate(radians(-90));
  }
  beginShape();
  for (let i = 0; i < apex; ++i) {
    const angle = radians(360 * i / apex);
    vertex(radius * cos(angle), radius * sin(angle));
  }
  endShape(CLOSE);
  pop();
};

const equilateralTriangle = (centerX, centerY, radius) => {
  equilateralPolygon(centerX, centerY, radius, 3);
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
  Snow: Color("#ffffff"),
  Drizzly: Color("#f2f2f2"),
  Smoke: Color("#bfbfbf"),
  Konjac: Color("#909090"),
  Raincloud: Color("#606060"),
  Charcoal: Color("#343434"),
  Crow: Color("#000000"),
  Lotus: Color("#ffc0ef"),
  Flamingo: Color("#ff9acc"),
  Ume: Color("#ff00A6"),
  Hibiscus: Color("#ff0086"),
  Raspberry: Color("#cf4078"),
  Cherryblossom: Color("#fbdade"),
  Peach: Color("#ffaaaa"),
  Coral: Color("#ff7f8f"),
  Strawberry: Color("#d83861"),
  Rouge: Color("#a80831"),
  Honey: Color("#ffd334"),
  Apricot: Color("#ffac0d"),
  Tangerine: Color("#eb8400"),
  Goldfish: Color("#ef454a"),
  Wintercherry: Color("#cc413a"),
  Vanilla: Color("#fff6ce"),
  Omelet: Color("#ffef73"),
  Chick: Color("#ffdf20"),
  Lemon: Color("#d9ca00"),
  Mustard: Color("#d0af4c"),
  Muscat: Color("#c0ff40"),
  Kiwi: Color("#80ff00"),
  Treefrog: Color("#40bf00"),
  Basil: Color("#108f00"),
  Pine: Color("#005f00"),
  Wasabi: Color("#a8bf93"),
  Avocado: Color("#b8ca6d"),
  Matcha: Color("#93be55"),
  Moss: Color("#7c7a37"),
  Olive: Color("#575531"),
  Mint: Color("#bdf7df"),
  Bamboo: Color("#58ce91"),
  Emerald: Color("#00a474"),
  Broccoli: Color("#006d56"),
  Forest: Color("#004d36"),
  Sodapop: Color("#bffefe"),
  Jadevine: Color("#40e0d0"),
  Morpho: Color("#00ced1"),
  Aquamarine: Color("#00939e"),
  Deepsea: Color("#00687c"),
  Larimar: Color("#9dcce0"),
  Sky: Color("#009cd1"),
  Sapphire: Color("#006bc3"),
  Lapislazuli: Color("#093d86"),
  Midnight: Color("#353a55"),
  Wisteria: Color("#d2c4f8"),
  Violet: Color("#a885d2"),
  Hydrangea: Color("#9568a6"),
  Amethyst: Color("#614876"),
  Rumraisin: Color("#523c51"),
  Mushroom: Color("#f3d2d5"),
  Adzuki: Color("#c19fa3"),
  Cocoa: Color("#8D6A70"),
  Acorn: Color("#744744"),
  Chocolate: Color("#604840"),
  Coconut: Color("#ebe7e1"),
  Chai: Color("#ded2bf"),
  Cafeaulait: Color("#af8c6c"),
  Walnut: Color("#93664f"),
  Muddywater: Color("#5d5245")
};
