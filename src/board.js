var Board = function() {
    this.boardArray =  [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
};

Board.prototype.isFull = function() {
    // console.log(this.boardArray);
    // console.log(this.boardArray[0].includes(' '));
    if (this.boardArray[0].includes(' ') || this.boardArray[1].includes(' ') || this.boardArray[2].includes(' ')) {
        return false;
    } else {
        return true;
    }

};

export default Board;
