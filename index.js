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
}