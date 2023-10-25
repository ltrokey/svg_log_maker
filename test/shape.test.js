const ShapeGenerator = require("../lib/shape.js");

// Testing Instantiation
describe("ShapeGenerator", () => {
  // Testing Instantiation
  describe("Instantiate", () => {
    it("should be an instance of ShapeGenerator Class", () => {
      const shapeGenerator = new ShapeGenerator();

      expect(shapeGenerator).toBeInstanceOf(ShapeGenerator);
    });
  });

  // Testing Triangle Shape
  describe("Initialize Triangle & Color", () => {
    it("should set shape & color properly", () => {
      const shape = "Triangle";
      const shapeColor = "blue";
      const expectedSvgContent = `<polygon points="150,18 244,182 56,182" fill="${shapeColor}" />`;
      const shapeGenerator = new ShapeGenerator();
      const svgShapeContent = shapeGenerator.generateSvgShape({
        shape,
        shapeColor,
      });

      expect(svgShapeContent).toBe(expectedSvgContent);
    });
  });

  // Testing Circle Shape
  describe("Initialize Circle & Color", () => {
    it("should set shape & color properly", () => {
      const shape = "Circle";
      const shapeColor = "pink";
      const expectedSvgContent = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
      const shapeGenerator = new ShapeGenerator();
      const svgShapeContent = shapeGenerator.generateSvgShape({
        shape,
        shapeColor,
      });

      expect(svgShapeContent).toBe(expectedSvgContent);
    });
  });

  // Testing Square Shape
  describe("Initialize Square & Color", () => {
    it("should set shape & color properly", () => {
      const shape = "Square";
      const shapeColor = "#556B2F";
      const expectedSvgContent = `<rect x="75" y="25" width="150" height="150" fill="${shapeColor}" />`;
      const shapeGenerator = new ShapeGenerator();
      const svgShapeContent = shapeGenerator.generateSvgShape({
        shape,
        shapeColor,
      });

      expect(svgShapeContent).toBe(expectedSvgContent);
    });
  });
});
