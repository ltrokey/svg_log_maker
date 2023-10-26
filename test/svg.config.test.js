const svgConfig = require("../utils/svg.config.js");

describe("SVG Configuration", () => {
  it("should export the correct width and height", () => {

    expect(svgConfig.width).toBe(300);
    expect(svgConfig.height).toBe(200);
  });

  it("should provide the correct SVG opening tag", () => {
    const openingTag = svgConfig.getSvgOpeningTag();
    const expectedOpeningTag = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;

    expect(openingTag).toBe(expectedOpeningTag);
  });

  it("should provide the correct SVG closing tag", () => {
    const closingTag = svgConfig.getSvgClosingTag();
    const expectedClosingTag = `</svg>`;

    expect(closingTag).toBe(expectedClosingTag);
  });
});
