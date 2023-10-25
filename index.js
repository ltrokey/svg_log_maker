//Packages for Application
const inquirer = require("inquirer");
const fs = require("fs");
const LogoGenerator = require("./lib/shapes");

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
    choices: ["X Small", "Small", "Medium", "Large", "X Large"],
    name: "fontSize",
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
    choices: ["Triangle", "Circle", "Square"],
    name: "shape",
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
  inquirer.prompt(questions).then((data) => {
    const logoGenerator = new LogoGenerator()
    const svgContent = logoGenerator.generateSvgLogo(data);
    const fileName = "logo.svg";
    writeToFile(fileName, svgContent);
  });
}

// Function call to initialize app
init();
