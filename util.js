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
