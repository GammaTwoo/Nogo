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
  
  class Circle extends Shape {
    getSVG() {
      return `<svg width="300" height="200"><circle cx="150" cy="100" r="50" fill="${this.shapeColor}" /><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${this.textColor}">${this.text}</text></svg>`;
    }
  }
  
  class Triangle extends Shape {
    getSVG() {
      return `<svg width="300" height="200"><polygon points="150,50 100,150 200,150" fill="${this.shapeColor}" /><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${this.textColor}">${this.text}</text></svg>`;
    }
  }
  
  class Square extends Shape {
    getSVG() {
      return `<svg width="300" height="200"><rect width="100" height="100" x="100" y="50" fill="${this.shapeColor}" /><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="${this.textColor}">${this.text}</text></svg>`;
    }
  }
  
  module.exports = {
    Circle,
    Triangle,
    Square,
  };