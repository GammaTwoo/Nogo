// takes inputs from prompts and runs them through subclass constructors
class Shape {
    constructor(text, textColor, shapeColor) {
      this.text = text;
      this.textColor = textColor;
      this.shapeColor = shapeColor;
    }
  
    getSVG() {
      throw new Error('getSVG method must be implemented in subclasses');
    }
  }
  
  // makes a circle
  class Circle extends Shape {
    getSVG() {
      return `<svg width="300" height="200"><circle cx="150" cy="100" r="50" fill="${this.shapeColor}" /><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${this.textColor}">${this.text}</text></svg>`;
    }
  }
  

  // makes a triangle
  class Triangle extends Shape {
    getSVG() {
      return `<svg width="300" height="200"><polygon points="150,50 100,150 200,150" fill="${this.shapeColor}" /><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${this.textColor}">${this.text}</text></svg>`;
    }
  }
  

  // makes a square
  class Square extends Shape {
    getSVG() {
      return `<svg width="300" height="200"><rect width="100" height="100" x="100" y="50" fill="${this.shapeColor}" /><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${this.textColor}">${this.text}</text></svg>`;
    }
  }
  
  // exports the constructors so index can use them
  module.exports = {
    Circle,
    Triangle,
    Square,
  };

//       ____________
//      /\  ________ \
//     /  \ \______/\ \
//    / /\ \ \  / /\ \ \
//   / / /\ \ \/ / /\ \ \
//  / / /__\_\/ / /__\_\ \
// / /_/_______/ /________\
// \ \ \______ \ \______  /
//  \ \ \  / /\ \ \  / / /
//   \ \ \/ / /\ \ \/ / /
//    \ \/ / /__\_\/ / /
//     \  / /______\/ /
//      \/___________/   how about i make a constructor for this shape