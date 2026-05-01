export class RotatingShape {
  size; // size of the shape in n * n
  shapeArr; // shape in array of size * size
  numOfOrientations; // number of orientations a shape can have: can be 4, 2, 1
  currOrientation; // current orientation: from 0..numOfOrientation - 1
  strShapeMap; // a map that contains the possible orientations of the shape in string

  constructor(arrInput, currOrientation, numOfOrientations, strShapeMap) {
    this.size = arrInput.length;
    this.currOrientation = currOrientation;
    this.numOfOrientations = numOfOrientations || 1;
    this.strShapeMap = strShapeMap;
    const arr = [];
    for (let i = 0; i < this.size; i++) { 
      arr.push(arrInput[i].split("")); 
    }
    this.shapeArr = arr;
  }

  static fromString(input, currOrientation, numOfOrientations, strShapeMap) {
    const rows = input.split("\n");
    for(let i = 0; i < rows.length; i++) {
      rows[i] = rows[i].trim();
    }
    const modifiedStrShapeMap = strShapeMap || new Map().set((currOrientation || 0), input);
    return new RotatingShape(rows, currOrientation || 0, numOfOrientations || 4, modifiedStrShapeMap);
  }

  rotateRight() {
    const nextOrientation = (this.currOrientation + 1) % this.numOfOrientations;
    let nextShape = this.strShapeMap.get(nextOrientation);
    if(nextShape) {
      return RotatingShape.fromString(nextShape, nextOrientation, this.numOfOrientations, this.strShapeMap);
    } else {
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
      const addedStrShapeMap = this.strShapeMap.set(nextOrientation, rotatedString);
      return RotatingShape.fromString(rotatedString, nextOrientation, this.numOfOrientations, addedStrShapeMap);
    }
  }

  rotateLeft() {
    const nextOrientation = this.currOrientation === 0 ? this.numOfOrientations - 1 : this.currOrientation - 1;
    let nextShape = this.strShapeMap.get(nextOrientation)
    if(nextShape) {
      return RotatingShape.fromString(nextShape, nextOrientation, this.numOfOrientations, this.strShapeMap);
    } else {
      // check for the cases of 2 numOfOrientations and 1 numOfOrientations
      if (this.numOfOrientations === 1) {
        // if it is only 1 numOfOrientations, return the same shape (making a new object since RotatingShape has to be immutable)
        return RotatingShape.fromString(this.strShapeMap.get(this.currOrientation, this.numOfOrientations, this.strShapeMap));
      } else if (this.numOfOrientations === 2) {  // if it is 2 numOfOrientations, rotateLeft() should be identical to rotateRight()
        return this.rotateRight();
      }
      const rotatedArr = [];
      let rotatedString = "";
      for(let col = this.size - 1; col >= 0; col--) {
        const rowArr = [];
        for(let row = 0; row < this.size; row++) { rowArr.push(this.shapeArr[row][col]); }
        rotatedArr.push(rowArr);
      }
  
      for(let k = 0; k < rotatedArr.length; k++) { 
        rotatedString += rotatedArr[k].join(""); 
        rotatedString += (k < rotatedArr.length - 1) ? "\n" : ""; 
      }
      const addedStrShapeMap = this.strShapeMap.set(nextOrientation, rotatedString);
      return RotatingShape.fromString(rotatedString, nextOrientation, this.numOfOrientations, addedStrShapeMap);
    }
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