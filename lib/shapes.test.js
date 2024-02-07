const {Triangle, Square, Circle} = require('./shapes')

describe('Square class', () => {
    describe('render method', () => {
        it('should return a string describing a green square', () => {
            const shape = new Square()
            shape.setColor('green')
            expect(shape.render()).toEqual(`<polygon points="238,12 238,188 62,188 62,12" fill="green" />`)
        })
        it('should return a string describing a green square', () => {
            const shape = new Square()
            shape.setColor('#00ff00')
            expect(shape.render()).toEqual(`<polygon points="238,12 238,188 62,188 62,12" fill="#00ff00" />`)
        })
    })
})

describe('Circle class', () => {
    describe('render method', () => {
        it('should return a string describing a yellow circle', () => {
            const shape = new Circle()
            shape.setColor('yellow')
            expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="88" fill="yellow" />`)
        })
        it('should return a string describing a yellow circle', () => {
            const shape = new Circle()
            shape.setColor('#ffff00')
            expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="88" fill="#ffff00" />`)
        })
    })
})

describe('Triangle class', () => {
    describe('render method', () => {
        it('should return a string describing a blue triangle', () => {
            const shape = new Triangle()
            shape.setColor('blue')
            expect(shape.render()).toEqual(`<polygon points="150,18 244,182 56,182" fill="blue" />`)
        })
        it('should return a string describing a blue triangle', () => {
            const shape = new Triangle()
            shape.setColor('#0000ff')
            expect(shape.render()).toEqual(`<polygon points="150,18 244,182 56,182" fill="#0000ff" />`)
        })
    })
})