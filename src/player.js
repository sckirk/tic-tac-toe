var Player = function(mark) {
    this.mark = mark;

    // if (Game.sessionGameCount % 2 === 0) {
      if (mark == "X") {
          this.active = true;
          this.symbolImage = 'rosemary';
      } else if (mark == "O") {
          this.active = false;
          this.symbolImage = 'peach';
      }
    // } else {
    //   if (mark == "O") {
    //       this.active = true;
    //   } else if (mark == "X") {
    //       this.active = false;
    //   }
    // } // this will be implemented later once the player who starts switches each game.

};

Player.prototype.setMark = function(board, firstArrayIndex, secondArrayIndex) {
    if (board.boardArray[firstArrayIndex][secondArrayIndex] == ' ') {
        board.boardArray[firstArrayIndex][secondArrayIndex] = this.mark;
    } else {
        throw 'that space has already been assigned, please try again';
    }
    // console.log(board.boardArray); // comment out when finished score testing
    return board.boardArray[firstArrayIndex][secondArrayIndex]; // returned for testing purposes
};

export default Player;
