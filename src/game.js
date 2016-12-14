import Board from 'board';
import Player from 'player';

var Game = function() {
  this.gameBoard = new Board();
  this.playerX = new Player('X');
  this.playerO = new Player('O');
};

Game.prototype.switchTurn = function() {
  this.playerX.active = !(this.playerX.active);
  this.playerO.active = !(this.playerO.active);
};

// Game.prototype.isDone = function() {
//
// };


export default Game;


// NOTE: may not need this code: this.playerX.setMark(this.gameBoard, x, y);
