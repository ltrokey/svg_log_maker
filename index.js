//Packages for Application
const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shape.js");
const { XSmall, Small, Medium, Large, XLarge } = require("./lib/text.js");
const svgConfig = require("./utils/svg.config.js");

// Question Prompt for Logo Specs
const questions = [
  {
    type: "input",
    message: "Text - Please enter up to 3 characters:",
    name: "text",
    validate: (input) => {
      return input.trim() === ""
        ? "Please enter up to 3 characters."
        : input.length > 3
        ? "Invalid entry, please enter no more than 3 characters."
        : true;
    },
  },
  {
    type: "list",
    message: "Font - Please select a font:",
    choices: ["Serif", "Sans-serif", "Monospace", "Cursive", "Fantasy"],
    name: "font",
    validate: (input) => {
      return input ? true : "Invalid entry, please select a font.";
    },
  },
  {
    type: "list",
    message: "Font Size - Please select a font size:",
    choices: [XSmall, Small, Medium, Large, XLarge],
    name: "fontSizeClass",
    validate: (input) => {
      return input ? true : "Invalid entry, please select a font.";
    },
  },
  {
    type: "input",
    message: "Text Color - Please enter a color or a hexadecimal number:",
    name: "textColor",
    validate: (input) => {
      return input.trim() === ""
        ? "Invalid entry, please enter a color or a hexadecial number."
        : true;
    },
  },
  {
    type: "list",
    message: "Shape - Please select a shape:",
    choices: [Triangle, Circle, Square],
    name: "shapeClass",
    validate: (input) => {
      return input ? true : "Invalid entry, please select a font.";
    },
  },
  {
    type: "input",
    message: "Shape Color - Please enter a color or a hexadecimal number:",
    name: "shapeColor",
    validate: (input) => {
      return input.trim() === ""
        ? "Invalid entry, please enter a color or a hexadecial number."
        : true;
    },
  },
];

// Function to write README file
function writeToFile(fileName, svgContent) {
  fs.writeFile(fileName, svgContent, (err) => {
    err ? console.log(err) : console.log("SVG file generated successfully.");
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then(async (data) => {
    console.log("Font Size Class:", data.fontSizeClass);
    console.log("Text:", data.text);
    console.log("Font:", data.font);
    console.log("Text Color:", data.textColor);

    const svgContent = svgConfig.getSvgOpeningTag();

    // Create an instance of the selected font size class
    const FontSizeClass = data.fontSizeClass;
    const fontSize = new FontSizeClass(data.text, data.font, data.textColor);

    // Create an instance of the selected shape class
    const ShapeClass = data.shape;
    const shape = new ShapeClass(data.shapeColor);

    const svgShapeContent = shape.render();
    const svgTextContent = fontSize.render();

    const combinedSvgContent =
      svgContent + svgShapeContent + svgTextContent + "</svg>";

    const fileName = "logo.svg";

    writeToFile(fileName, combinedSvgContent);
  });
}

// Function call to initialize app
init();
