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
    return constructor(input.split("\n"));
  }

  toString() {
    let result = "";
    for (let i = 0; i < this.shapeArr.length; i++) {
      for (let j = 0; j < this.shapeArr[i].length; j++) { result += this.shapeArr[i][j]; }
      result += "\n";
    }
    return result;
  }
}