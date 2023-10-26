const { Shape, Triangle, Circle, Square } = require("../lib/shape.js");

// Shape Class
describe("Shape", () => {

  describe("Instantiation", () => {
    it("should be an instance of Shape Class", () => {
      const shape = new Shape();

      expect(shape).toBeInstanceOf(Shape);
    });
    it("should have a default color property", () => {
      const shape = new Shape();

      expect(shape.color).toBe("");
    });
  });

  describe("setColor", () => {
    it("should set the color property", () => {
      const shape = new Shape();
      shape.setColor("blue");

      expect(shape.color).toBe("blue");
    });
  });

  describe("render", () => {
    it("should throw an error", () => {
      const shape = new Shape();

      expect(() => shape.render()).toThrow(
        "Subclasses must implement the render method"
      );
    });
  });
});

// Triangle Class
describe("Triangle", () => {

  describe("Instantiation", () => {
    it("should be an instance of Triangle Class", () => {
      const triangle = new Triangle();

      expect(triangle).toBeInstanceOf(Triangle);
    });
  });

  describe("Render", () => {
    it("should render a triangle SVG", () => {
      const triangle = new Triangle();
      triangle.setColor("green");
      let svgShapeString = triangle.render();

      expect(svgShapeString).toContain(
        '<polygon points="150,18 244,182 56,182" fill="green" />'
      );
    });
  });
});

// Circle Class
describe("Circle", () => {

  describe("Instantiation", () => {
    it("should be an instance of Circle Class", () => {
      const circle = new Circle();
      expect(circle).toBeInstanceOf(Circle);
    });
  });

  describe("Render", () => {
    it("should render a circle SVG", () => {
      const circle = new Circle();
      circle.setColor("pink");
      let svgString = circle.render();

      expect(svgString).toContain(
        '<circle cx="150" cy="100" r="80" fill="pink" />'
      );
    });
  });
});

// Square Class
describe("Square", () => {

  describe("Instantiation", () => {
    it("should be an instance of Square Class", () => {
      const square = new Square();

      expect(square).toBeInstanceOf(Square);
    });
  });

  describe("Render", () => {
    it("should render a square SVG", () => {
      const square = new Square();
      square.setColor("orange");
      let svgString = square.render();

      expect(svgString).toContain(
        '<rect x="75" y="25" width="150" height="150" fill="orange" />'
      );
    });
  });
});
