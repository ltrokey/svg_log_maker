class TextGenerator {
  generateSvgText(data) {
    const { text, font, fontSize, textColor } = data;

    let svgContent = ''

    const fontSizes = {
      "X Small": 25,
      Small: 50,
      Medium: 75,
      Large: 100,
      "X Large": 125,
    };

    const selectedFontSize = fontSizes[fontSize];

    switch (fontSize) {
      case "X Small":
        svgContent += `<text x="125" y="110" font-family="${font}" font-size="${selectedFontSize}" fill="${textColor}">${text}</text>`;
        break;
      case "Small":
        svgContent += `<text x="105" y="120" font-family="${font}" font-size="${selectedFontSize}" fill="${textColor}">${text}</text>`;
        break;
      case "Medium":
        svgContent += `<text x="80" y="130" font-family="${font}" font-size="${selectedFontSize}" fill="${textColor}">${text}</text>`;
        break;
      case "Large":
        svgContent += `<text x="60" y="140" font-family="${font}" font-size="${selectedFontSize}" fill="${textColor}">${text}</text>`;
        break;
      case "X Large":
        svgContent += `<text x="35" y="150" font-family="${font}" font-size="${selectedFontSize}" fill="${textColor}">${text}</text>`;
        break;
    }
    // Close the SVG element
    svgContent += "</svg>";

    return svgContent;
  }
}

module.exports = TextGenerator;
