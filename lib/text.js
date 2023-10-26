class Text {
  constructor() {
    this.userText = "";
    this.selectedFont = "";
    this.color = "";
  }
  setText(text) {
    this.userText = text;
  }
  setFont(font) {
    this.selectedFont = font;
  }
  setColor(textColor) {
    this.color = textColor;
  }
}

class XSmall extends Text {
  render() {
    return `<text x="125" y="110" font-family="${this.selectedFont}" font-size="25" fill="${this.color}">${this.userText}</text>`;
  }
}

class Small extends Text {
  render() {
    return `<text x="95" y="120" font-family="${this.selectedFont}" font-size="50" fill="${this.color}">${this.userText}</text>`;
  }
}

class Medium extends Text {
  render() {
    return `<text x="70" y="130" font-family="${this.selectedFont}" font-size="75" fill="${this.color}">${this.userText}</text>`;
  }
}

class Large extends Text {
  render() {
    return `<text x="40" y="140" font-family="${this.selectedFont}" font-size="100" fill="${this.color}">${this.userText}</text>`;
  }
}

class XLarge extends Text {
  render() {
    return `<text x="20" y="150" font-family="${this.selectedFont}" font-size="125" fill="${this.color}">${this.userText}</text>`;
  }
}

module.exports = { XSmall, Small, Medium, Large, XLarge };
