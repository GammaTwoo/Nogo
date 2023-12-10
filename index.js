const inquirer = require('inquirer')
const svgBuilder = require('svg-builder')
const fs = require('fs')

async function generateLogo() {
    const { text } = await inquirer.prompt({
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters'
    })

    const { textColor } = await inquirer.prompt({
        type: 'input',
        name: 'textColor',
        message: 'Ender the text color (color keyword or hexadecimal)'
    })

    const shapes = ['circle', 'triangle', 'square']
    const { selectedShapes } = await inquirer.prompt({
        type: 'list',
        name: 'selectedShapes',
        message: 'Choose a shape',
        choices: shapes
    })

    const { shapeColor } = await inquirer.prompt({
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (color keyword or hexadecimal)'
    })

    const svgContent = svgBuilder({
        width: 300,
        height: 200,
        elements: [
            { type: 'text', content: text, x:150, y: 150, fill: textColor },
            { type: selectedShapes, x:150, y:150, size:50, fill, shapeColor }
        ]
    })

    fs.writeFileSync('dist/logo.svg', svgContent)

    console.log('Generated logo.svg')
}

generateLogo()