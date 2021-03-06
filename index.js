// Point
function Point(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function() {
    return `${this.x}, ${this.y}`
}

// Shape
function Shape() {
}

Shape.prototype.addToPlane = function(x,y) {
  this.position = new Point(x,y)
}

Shape.prototype.move = function(x,y) {
  this.position.x = x
  this.position.y = y
  // this also passes:   this.position = new Point(x,y)
}

function Side(length) {
  this.length = length
}

// Circle
function Circle(radius) {
  this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.diameter = function () {
  return this.radius * 2
}

Circle.prototype.area = function() {
    return Math.PI * this.radius^2
}

Circle.prototype.circumference = function () {
  return 2 * Math.PI * this.radius
}

// Polygon
function Polygon(side_array) {
  //this.radius = radius
  this.sides = side_array
}

Polygon.prototype = Object.create(Shape.prototype)

Polygon.prototype.perimeter = function() {
  return this.sides.reduce((count, value) => count += value.length, 0)
}

Polygon.prototype.numberOfSides = function() {
  return this.sides.length
}

// Quadrilateral
function Quadrilateral(side1, side2, side3, side4) {
  this.sides = [new Side(side1), new Side(side2), new Side(side3), new Side(side4)]
}

Quadrilateral.prototype = Object.create(Polygon.prototype)

// Triangle
function Triangle(side1 ,side2, side3) {
  this.sides = [new Side(side1), new Side(side2), new Side(side3)]
}

Triangle.prototype = Object.create(Polygon.prototype)

// Rectangle
function Rectangle(width, height) {
  Quadrilateral.call(this, width, height, width, height)
  this.width = width
  this.height = height
  //this.sides = [new Side(width), new Side(width), new Side(length), new Side(length)]
}
Rectangle.prototype = Object.create(Quadrilateral.prototype)

Rectangle.prototype.area = function() {
  return this.height * this.width
}

// Square
function Square(length) {
  this.height = length
  this.width = length
  this.sides = [new Side(length), new Side(length), new Side(length), new Side(length)]
}

Square.prototype = Object.create(Rectangle.prototype)

Square.prototype.listProperties = function () {
  var ownProperties = ""
  for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
      ownProperties += prop
    }
  return ownProperties
  }
}
