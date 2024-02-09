//ask questions here
const{Triangle,Circle, Square}=require("./lib/shapes")
//objects and values
const inquirer = require('inquirer');

const fs = require('fs');

const prompts = async () => {
   
      inquirer.prompt([{
        type: 'list',
        name: 'shape',
        message: 'Choose what shape you would like for your logo:',
        choices: ['circle', 'square', 'triangle'],

      },{
        type:"input",
        name:"textColor",
        message:"what is the text color?",
      },{
        type:"input",
        name:"shapeColor",
        message:"what color do you want your shape",
      },{
        type:"input",
        name:"text",
        message:"What text do you want?",
      }])
      .then(response => {
        
        if(response.shape==="circle"){
            const circle = new Circle()
            circle.setTextColor(response.textColor)
            circle.setShapeColor(response.shapeColor)
            circle.setText(response.text)
            console.log(circle.render())
            fs.writeFileSync("./Assets/circle-local.svg",circle.render())
        }
        if(response.shape==="square"){
            const square = new Square()
            square.setTextColor(response.textColor)
            square.setShapeColor(response.shapeColor)
            square.setText(response.text)
            fs.writeFileSync("./Assets/square-local.svg",square.render())
        }
        if(response.shape==="triangle"){
            const triangle = new Triangle()
            triangle.setTextColor(response.textColor)
            triangle.setShapeColor(response.shapeColor)
            triangle.setText(response.text)
            fs.writeFileSync("./Assets/triangle-local.svg",triangle.render())
        }
      })

            
        
    
}
prompts()