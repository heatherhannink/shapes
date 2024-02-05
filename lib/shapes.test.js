// Jest tests for shapes
const {Triangle, Circle, Square} = require("./shapes")
describe ('Shape', () => {
  describe ('Triangle', () =>{
    describe ('properties',() => {
      test ('textColor', () => {
        const shape = new Triangle();
        shape.setTextColor("orange");
        shape.setShapeColor("Black");
        shape.setText("Heather");
        expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon width="300" height="200" points ="150, 18 244, 182 56, 182" fill="${shape.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text></svg>`);
      })
    })
    describe ('methods', () => {
    })
  } )
  describe ('Circle', () =>{
  } )
  describe ('Square', () =>{
  } )
})