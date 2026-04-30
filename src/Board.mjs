export class Board {
  width;
  height;
  boardArr;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.boardArr = [];
  }

  initialize() {
    for (let i = 0; i < this.height; i++) {
      const row = [];
      for (let j = 0; j < this.width; j++) {
        row.push(".");
      }
      this.boardArr.push(row);
    }
  }

  toString() {
    return `...\n...\n...\n`;
  }
}
