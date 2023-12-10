const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function promptUser() {
  const userInput = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (value) => value.length <= 3,
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal):',
    },
  ]);

  return userInput
}

function generateSVG(text, textColor, shape, shapeColor) {
  let svgElement

  switch (shape) {
    case 'circle':
      svgElement = new Circle(text, textColor, shapeColor);
      break;
    case 'triangle':
      svgElement = new Triangle(text, textColor, shapeColor);
      break;
    case 'square':
      svgElement = new Square(text, textColor, shapeColor);
      break;
    default:
      throw new Error('Invalid shape')
  }

  const svgContent = svgElement.getSVG()
  fs.writeFileSync('dist/logo.svg', svgContent)

  console.log('Generated logo.svg')
}

async function run() {
  const userInput = await promptUser()
  generateSVG(userInput.text, userInput.textColor, userInput.shape, userInput.shapeColor)
}

run()