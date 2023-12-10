// requiring necessary modules
const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

// prompts user for logo options
async function promptUser() {
  const userInput = await inquirer.prompt([
    {
      // 3 cha text (ABC, XYZ, 123, &8^, etc)
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (value) => value.length <= 3,
    },
    {
        // text color (white, red, navyblue, #14a279, etc)
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal):',
    },
    {
        // shape (circle, triangle, or square)
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
        // shape color (same kind of input as text color)
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal):',
    }
  ]);

  return userInput
}

// generates the svg file
function generateSVG(text, textColor, shape, shapeColor) {
  let svgElement

  // switch block for different shape options, uses constructors in shapes.js
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


  //writes svg file to dist folder
  const svgContent = svgElement.getSVG()
  fs.writeFileSync('dist/logo.svg', svgContent)

  console.log('Generated logo.svg')
}

// runs generate svg awaiting user input
async function run() {
  const userInput = await promptUser()
  generateSVG(userInput.text, userInput.textColor, userInput.shape, userInput.shapeColor)
}

// runs file
run()

//         _-_.
//      _-',^. `-_.
//  ._-' ,'   `.   `-_ 
// !`-_._________`-':::
// !   /\        /\::::
// ;  /  \  1   /..\:::
// ! /    \    /....\::
// !/      \  /......\:
// ;--.___. \/_.__.--;; 
//  '-_    `:!;;;;;;;'
//     `-_, :!;;;''
//         `-!'   rolled a nat 1 for finding motivation