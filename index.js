const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shape");
const { XSmall, Small, Medium, Large, XLarge } = require("./lib/text");
const svgConfig = require("./utils/svg.config");
const path = require("path");

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
    choices: ["XSmall", "Small", "Medium", "Large", "XLarge"],
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
        ? "Invalid entry, please enter a color or a hexadecimal number."
        : true;
    },
  },
  {
    type: "list",
    message: "Shape - Please select a shape:",
    choices: ["Triangle", "Circle", "Square"],
    name: "shapeClass",
    validate: (input) => {
      return input ? true : "Invalid entry, please select a shape.";
    },
  },
  {
    type: "input",
    message: "Shape Color - Please enter a color or a hexadecimal number:",
    name: "shapeColor",
    validate: (input) => {
      return input.trim() === ""
        ? "Invalid entry, please enter a color or a hexadecimal number."
        : true;
    },
  },
];

function writeToFile(fileName, svgContent) {
  const distFolder = "dist";
  const filePath = path.join(__dirname, distFolder, fileName);

  fs.writeFile(filePath, svgContent, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(
        `SVG file generated successfully in the "${distFolder}" folder.`
      );
    }
  });
}

function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      const { text, font, fontSizeClass, textColor, shapeClass, shapeColor } =
        data;

      let svgShapeContent;
      switch (shapeClass) {
        case "Triangle":
          svgShapeContent = new Triangle();
          break;
        case "Circle":
          svgShapeContent = new Circle();
          break;
        case "Square":
          svgShapeContent = new Square();
          break;
      }

      svgShapeContent.setColor(shapeColor);

      let svgTextContent;
      switch (fontSizeClass) {
        case "XSmall":
          svgTextContent = new XSmall();
          break;
        case "Small":
          svgTextContent = new Small();
          break;
        case "Medium":
          svgTextContent = new Medium();
          break;
        case "Large":
          svgTextContent = new Large();
          break;
        case "XLarge":
          svgTextContent = new XLarge();
          break;
      }

      svgTextContent.setText(text);
      svgTextContent.setFont(font);
      svgTextContent.setColor(textColor);

      const svgOpeningTag = svgConfig.getSvgOpeningTag();
      const svgClosingTag = svgConfig.getSvgClosingTag();

      const combinedSvgContent = `
        ${svgOpeningTag}
        ${svgShapeContent.render()}
        ${svgTextContent.render()}
        ${svgClosingTag}
      `;

      const fileName = "logo.svg";
      writeToFile(fileName, combinedSvgContent);
    })
    .catch((err) => {
      console.error(err);
    });
}

init();
