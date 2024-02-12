const {Triangle, Square, Circle} = require('./lib/shapes')
const inquierer = require('inquirer')
const fs = require('fs')

const getInput = async() => {

    let logo = await inquierer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Which characters would you like your logo to use (up to 3 characters)?'
        }
    ])
    while(logo.text.length > 3){
        logo = await inquierer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Your logo contained too many characters. Please use up to 3 characters.'
            }
        ])
    }

    let textColor = await inquierer.prompt([
        {
            type: 'input',
            name: 'color',
            message: 'What color would you like your logo to be (please use valid color name or hex value ex. green or #00ff00)?'
        }
    ])

    const shape = await inquierer.prompt([
        {
            type: 'list',
            message: 'Which shape would you like your logo to use?',
            name: 'shapeChoice',
            choices: ['Triangle', 'Circle', 'Square']
        }
    ])

    let shapeColor = await inquierer.prompt([
        {
            type: 'input',
            name: 'color',
            message: 'What color would you like that shape to be (please use valid color name or hex value ex. green or #00ff00)?'
        }
    ])
    
    let newShape
    if(shape.shapeChoice === 'Triangle'){
        newShape = new Triangle()
    }else if(shape.shapeChoice === 'Square'){
        newShape = new Square()
    }else{
        newShape = new Circle()
    }
    newShape.setColor(shapeColor.color)

    const svg = `
    <svg width="300" height="200">
        ${newShape.render()}
        <text x="150" y="100" font-size="60" text-anchor="middle" fill="${textColor.color}">${logo.text}</text>
    </svg>`

    fs.writeFile('./examples/logo.svg', svg, function(err){
        if(err){
            throw err
        }else{
            console.log('Generated logo.svg')
        }
    })

}

getInput()