class Text {
  constructor(text, font, textColor) {
    this.text = text;
    this.font = font;
    this.textColor = textColor;
  }

  render(x, y, fontSize) {
    return `<text x="${x}" y="${y}" font-family="${this.font}" font-size="${fontSize}" fill="${this.textColor}">${this.text}</text>`;
  }
}

class XSmall extends Text {
  constructor(text, font, textColor) {
    super(text, font, textColor);
  }

  render() {
    return super.render(125, 110, 25);
  }
}

class Small extends Text {
  constructor(text, font, textColor) {
    super(text, font, textColor);
  }

  render() {
    return super.render(105, 120, 50);
  }
}

class Medium extends Text {
  constructor(text, font, textColor) {
    super(text, font, textColor);
  }

  render() {
    return super.render(80, 130, 75);
  }
}

class Large extends Text {
  constructor(text, font, textColor) {
    super(text, font, textColor);
  }

  render() {
    return super.render(70, 140, 100);
  }
}

class XLarge extends Text {
  constructor(text, font, textColor) {
    super(text, font, textColor);
  }

  render() {
    return super.render(35, 150, 125);
  }
}

module.exports = { XSmall, Small, Medium, Large, XLarge };
