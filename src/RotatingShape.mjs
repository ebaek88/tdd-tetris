export class RotatingShape {
  size; // size of the shape in n * n
  shapeArr; // shape in array of size * size

  constructor(arrInput) {
    this.size = arrInput.length;
    const arr = [];
    for (let i = 0; i < this.size; i++) { arr.push(arrInput[i].split("")); }
    this.shapeArr = arr;
  }

  static fromString(input) {
    constructor(input.split("\n"));
  }
}