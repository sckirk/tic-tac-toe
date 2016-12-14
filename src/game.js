import Board from 'board';
import Player from 'player';

var Game = function() {
  this.gameBoard = new Board();
  this.playerX = new Player('X');
  this.playerO = new Player('O');
  var winner;
};

Game.prototype.switchTurn = function() {
  this.playerX.active = !(this.playerX.active);
  this.playerO.active = !(this.playerO.active);
};

Game.prototype.isDone = function() {
  var checkedMark;
  var possibleWinner;

  if (this.playerX.active === true) {
    checkedMark = this.playerX.mark;
    possibleWinner = this.playerX;
  } else {
    checkedMark = this.playerO.mark;
    possibleWinner = this.playerO;
  }

  console.log(checkedMark);

  if ((this.gameBoard.boardArray[0][0] == checkedMark && this.gameBoard.boardArray[1][0] == checkedMark && this.gameBoard.boardArray[2][0] == checkedMark) || (this.gameBoard.boardArray[0][0] == checkedMark && this.gameBoard.boardArray[1][1] == checkedMark && this.gameBoard.boardArray[2][2] == checkedMark) || (this.gameBoard.boardArray[0][0] == checkedMark && this.gameBoard.boardArray[0][1] == checkedMark && this.gameBoard.boardArray[0][2] == checkedMark) || (this.gameBoard.boardArray[0][1] == checkedMark && this.gameBoard.boardArray[1][1] == checkedMark && this.gameBoard.boardArray[2][1] == checkedMark) || (this.gameBoard.boardArray[0][2] == checkedMark && this.gameBoard.boardArray[1][2] == checkedMark && this.gameBoard.boardArray[2][2] == checkedMark) || (this.gameBoard.boardArray[0][2] == checkedMark && this.gameBoard.boardArray[1][1] == checkedMark && this.gameBoard.boardArray[2][0] == checkedMark) || (this.gameBoard.boardArray[1][0] == checkedMark && this.gameBoard.boardArray[1][1] == checkedMark && this.gameBoard.boardArray[1][2] == checkedMark) || (this.gameBoard.boardArray[2][0] == checkedMark && this.gameBoard.boardArray[2][1] == checkedMark && this.gameBoard.boardArray[2][2] == checkedMark)) {

    console.log("winner checked");

    winner = possibleWinner;
    return true;

  } else if (this.gameBoard.isFull() === true) {
    winner = "Tie";
    return true;

  } else {
    return false;
  }

};


export default Game;


// NOTE: may not need this code: this.playerX.setMark(this.gameBoard, x, y);
