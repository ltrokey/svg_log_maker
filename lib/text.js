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
  render() {
    throw new Error("Subclasses must implement the render method");
  }
}

class XSmall extends Text {
  render() {
    return `<text x="125" y="105" font-family="${this.selectedFont}" font-size="25" fill="${this.color}">${this.userText}</text>`;
  }
}

class Small extends Text {
  render() {
    return `<text x="105" y="115" font-family="${this.selectedFont}" font-size="50" fill="${this.color}">${this.userText}</text>`;
  }
}

class Medium extends Text {
  render() {
    return `<text x="85" y="125" font-family="${this.selectedFont}" font-size="75" fill="${this.color}">${this.userText}</text>`;
  }
}

class Large extends Text {
  render() {
    return `<text x="60" y="135" font-family="${this.selectedFont}" font-size="100" fill="${this.color}">${this.userText}</text>`;
  }
}

class XLarge extends Text {
  render() {
    return `<text x="40" y="145" font-family="${this.selectedFont}" font-size="115" fill="${this.color}">${this.userText}</text>`;
  }
}

module.exports = { Text, XSmall, Small, Medium, Large, XLarge };
