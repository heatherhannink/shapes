// Jest tests for shapes
const { Triangle, Circle, Square } = require("./shapes")
describe('Shape', () => {
  describe('Triangle', () => {
    describe('properties and methods', () => {
      test('textColor', () => {
        const shape = new Triangle();
        shape.setTextColor("orange");
        shape.setShapeColor("black");
        shape.setText("HMH");
        expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon width="300" height="200" points="150, 18 244, 182 56, 182" fill="${shape.shapeColor}" /><text x="150" y="125" font-size="40" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text></svg>`);
      })
    })
    
  })
  describe('Circle', () => {
    describe('properties and methods', () => {
      test('textColor', () => {
        const shape = new Circle ();
        shape.setTextColor("blue");
        shape.setShapeColor("purple");
        shape.setText("lol");
        expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle  width="300" height="200" cx="150" cy="100" r="80" fill="${shape.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text></svg>`)
      })
    })

  })
  describe('Square', () => {
    describe('properties and methods', () => {
      test('textColor', () => {
        const shape = new Square ();
        shape.setTextColor("red");
        shape.setShapeColor("fuschia");
        shape.setText("qwe");
        expect(shape.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200" height="200"><rect x="10" y="10" width="200" height="200" stroke="black" fill="${shape.shapeColor}" stroke-width="5"/><text x="110" y="125" font-size="60" text-anchor="middle" fill="${shape.textColor}">${shape.text}</text></svg>`)
      })
    })
  })
})