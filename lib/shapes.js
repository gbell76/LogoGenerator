class Shape{

    constructor(shapeColor){
        this.shapeColor = shapeColor
    }

    render(){
        return 'You need to call this on Circle, Triangle, or Square'
    }

    setColor(shapeColor){
        this.shapeColor = shapeColor
    }

}

class Circle extends Shape{

    constructor(shapeColor){
        super(shapeColor)
    }

    render(){
        return `<circle cx="150" cy="100" r="88" fill="${this.shapeColor}" />`
    }

}

class Triangle extends Shape{

    constructor(shapeColor){
        super(shapeColor)
    }

    render(){
        return `<polygon points="150,18 244,182 56,182" fill="${this.shapeColor}" />`
    }

}

class Square extends Shape{

    constructor(shapeColor){
        super(shapeColor)
    }

    render(){
        return `<polygon points="238,12 238,188 62,188 62,12" fill="${this.shapeColor}" />`
    }
    
}

module.exports = {Circle, Triangle, Square}