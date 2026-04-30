export class Board {
  width;
  height;
  boardArr;
  posX; // X-coordinate of the block. Starts from the left with 0.
  posY; // Y-coordinate of the block. Starts from the top with 0.

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
    this.posX = Math.floor(this.width / 2);
    this.posY = 0;
    this.boardArr[this.posY][this.posX] = "X";
  }

  tick() {
    let prevY = this.posY; this.posY = this.posY + 1; this.boardArr[prevY][this.posX] = "."; this.boardArr[this.posY][this.posX] = "X";
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
