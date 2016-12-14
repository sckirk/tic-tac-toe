var Player = function(mark) {
    this.mark = mark;

    // if the game session count is odd
    if (mark == "X") {
        this.active = true;
    } else if (mark == "O") {
        this.active = false;
    }

    // if the game session count is event
    // will do opposite of the above conditional
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
