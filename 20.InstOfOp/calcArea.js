class Square {
    constructor(side) {
    this.side = side;
    }
}

class Rectangle {
    constructor(width, height) {
    this.width = width;
    this.height = height;
    }
}

class Circle {
    constructor(radius) {
    this.radius = radius;
    }
}

class AreaCalculator {
    static calculate (geom){
        if (geom instanceof Square){
            return geom.side*2;
        } else if (geom instanceof Rectangle){
            return geom.width*geom.height;
        } else if (geom instanceof Circle){
            return Math.PI*geom.radius*geom.radius;
        } else {
            return "error";
        }
    }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);
const triangle = 4;

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
console.log(AreaCalculator.calculate(triangle));