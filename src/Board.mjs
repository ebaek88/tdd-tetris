export class Board {
  width;
  height;
  boardArr;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.boardArr = [];
  }

  toString() {
    return `...\n...\n...\n`;
  }
}
