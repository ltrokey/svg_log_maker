class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
  render(svgType) {
    return `<${svgType} fill="${this.shapeColor}" />`;
  }
}

class Triangle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    return super.render('polygon points="150,18 244,182 56,182"');
  }
}

class Circle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    return super.render('circle cx="150" cy="100" r="80"');
  }
}

class Square extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    return super.render('rect x="75" y="25" width="150" height="150"');
  }
}

module.exports = {
  Shape,
  Triangle,
  Circle,
  Square,
};
