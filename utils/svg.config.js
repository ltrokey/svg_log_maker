// svgConfig.js
const svgWidth = 300;
const svgHeight = 200;

module.exports = {
  width: svgWidth,
  height: svgHeight,
  getSvgOpeningTag: () => `<svg width="${svgWidth}" height="${svgHeight}" xmlns="http://www.w3.org/2000/svg">`,
  getSvgClosingTag: () => `</svg>`,
};
