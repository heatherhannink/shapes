// build constructors
class Shape {
    constructor (){
      this.text=""
      this.textColor=""
      this.shapeColor=""  
    }
    setTextColor(color){
        this.textColor=color
    }
    setShapeColor(color){
        this.shapeColor=color
    }
    setText(text){
        this.text=text
    }
    render (){
        return
    }
}
class Circle extends Shape{
    constructor(){
        super()
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <circle  width="300" height="200" cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}
class Triangle extends Shape{
    constructor(){
        super()
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <polygon width="300" height="200 points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}
class Square extends Shape{
    constructor(){
        super()
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <rect x="10" y="10" width="300" height="200" stroke="black" fill="${this.shapeColor}" stroke-width="5"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    }
}
module.exports={Circle, Triangle, Square}