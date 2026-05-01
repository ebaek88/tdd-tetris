export class RotatingShape {
  size; // size of the shape in n * n
  shapeArr; // shape in array of size * size
  numOfOrientations; // number of orientations a shape can have: can be 4, 2, 1
  shapeSet; // a Set that contains the possible orientations of the shape

  constructor(arrInput, strInput, numOfOrientations) {
    this.size = arrInput.length;
    this.numOfOrientations = numOfOrientations || 0;
    this.shapeSet = new Set(strInput);
    const arr = [];
    for (let i = 0; i < this.size; i++) { 
      arr.push(arrInput[i].split("")); 
    }
    this.shapeArr = arr;
  }

  static fromString(input, numOfOrientations) {
    const rows = input.split("\n");
    for(let i = 0; i < rows.length; i++) {
      rows[i] = rows[i].trim();
    }
    return new RotatingShape(rows, input, numOfOrientations);
  }

  rotateRight() {
    const rotatedArr = [];
    let rotatedString = "";
    for(let col = 0; col < this.size; col++) {
      const rowArr = [];
      for(let row = this.size - 1; row >= 0; row--) { 
        rowArr.push(this.shapeArr[row][col]); 
      }
      rotatedArr.push(rowArr);
    }
    for(let k = 0; k < rotatedArr.length; k++) { 
      rotatedString += rotatedArr[k].join("");
      rotatedString += (k < rotatedArr.length - 1) ? "\n" : "";
    }
    return RotatingShape.fromString(rotatedString);
  }

  rotateLeft() {
    const rotatedArr = [];
    let rotatedString = "";
    for(let col = this.size - 1; col >= 0; col--) {
      const rowArr = [];
      for(let row = 0; row < this.size; row++) { rowArr.push(this.shapeArr[row][col]); }
      rotatedArr.push(rowArr);
    }

    for(let k = 0; k < rotatedArr.length; k++) { rotatedString += rotatedArr[k].join(""); rotatedString += (k < rotatedArr.length - 1) ? "\n" : ""; }
    return RotatingShape.fromString(rotatedString);
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