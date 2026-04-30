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
    let result = "";
    for(let i = 0; i < this.boardArr.length; i++) {
      result += this.boardArr[i].join("");
      result += "\n";
    }

    return result;
  }
}
