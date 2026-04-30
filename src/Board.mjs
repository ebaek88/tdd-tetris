export class Board {
  width;
  height;
  boardArr;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.boardArr = [];
    this.initialize();
  }

  // initialize an empty board
  initialize() {
    for (let i = 0; i < this.height; i++) {
      const row = [];
      for (let j = 0; j < this.width; j++) {
        row.push(".");
      }
      this.boardArr.push(row);
    }
  }

  // drop a block from the top middle position
  drop() {
    this.boardArr[0][Math.floor(this.width / 2)] = "X";
  }

  // string representation of the board
  toString() {
    let result = "";
    for(let i = 0; i < this.boardArr.length; i++) {
      result += this.boardArr[i].join("");
      result += "\n";
    }

    return result;
  }
}
