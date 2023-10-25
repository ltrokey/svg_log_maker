class LogoGenerator {
  generateSvgLogo(data) {
    const { text, font, fontSize, textColor, shape, shapeColor } = data
    const width = 300
    const height = 200

    // Create a string to store the SVG content
    let svgContent = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">`

    // Define the SVG shape based on user's choice
    switch (shape) {
      case "Square":
        svgContent += `<rect x="75" y="25" width="150" height="150" fill="${shapeColor}" />`
        break
      case "Circle":
        svgContent += `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`
        break
      case "Triangle":
        svgContent += `<polygon points="150,18 244,182 56,182" fill="${shapeColor}" />`
        break
    }

    const fontSizes = {
        "X Small": 25,
        Small: 50,
        Medium: 75,
        Large: 100,
        "X Large": 125,
      }

      const selectedFontSize = fontSizes[fontSize]

    switch (fontSize) {
      case "X Small":
        svgContent += `<text x="125" y="110" font-family="${font}" font-size="${selectedFontSize}" fill="${textColor}">${text}</text>`
        break
      case "Small":
        svgContent += `<text x="105" y="120" font-family="${font}" font-size="${selectedFontSize}" fill="${textColor}">${text}</text>`
        break
      case "Medium":
        svgContent += `<text x="80" y="130" font-family="${font}" font-size="${selectedFontSize}" fill="${textColor}">${text}</text>`
        break
      case "Large":
        svgContent += `<text x="60" y="140" font-family="${font}" font-size="${selectedFontSize}" fill="${textColor}">${text}</text>`
        break
      case "X Large":
        svgContent += `<text x="35" y="150" font-family="${font}" font-size="${selectedFontSize}" fill="${textColor}">${text}</text>`
        break
    }
    // Close the SVG element
    svgContent += "</svg>"

    return svgContent
  }
}

module.exports = LogoGenerator
