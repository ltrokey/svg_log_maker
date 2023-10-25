class ShapeGenerator {
  generateSvgShape(data) {
    const { shape, shapeColor } = data;

    let svgContent = "";

    // Define the SVG shape based on user's choice
    switch (shape) {
      case "Square":
        svgContent += `<rect x="75" y="25" width="150" height="150" fill="${shapeColor}" />`;
        break;
      case "Circle":
        svgContent += `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
        break;
      case "Triangle":

        svgContent += `<polygon points="150,18 244,182 56,182" fill="${shapeColor}" />`;
        break;
    }

    return svgContent;
  }
}

module.exports = ShapeGenerator;
