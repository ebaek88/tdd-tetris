export class Board {
  width;
  height;
  boardArr;
  posX; // X-coordinate of the block. Starts from the left with 0.
  posY; // Y-coordinate of the block. Starts from the top with 0.
  block; // shape of the block in string

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
  drop(block) {
    if (this.hasFalling()) {
      throw new Error("already falling");
    }
    this.posX = Math.floor(this.width / 2);
    this.posY = 0;
    this.block = block;
    this.boardArr[this.posY][this.posX] = this.block;      
  }

  tick() {
    let prevY = this.posY; 
    this.posY = this.posY + 1; 
    if (this.posY < this.height) {
      this.boardArr[prevY][this.posX] = ".";
      this.boardArr[this.posY][this.posX] = this.block;
    } 
  }

  hasFalling() {
    return this.posY < this.height;
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
