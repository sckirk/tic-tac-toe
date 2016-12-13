import Board from 'board';
import Player from 'player';

var Game = function() {
    this.boardArray = new Board();
    this.playerX = new Player('X');
    this.playerO = new Player('O');
};

export default Game;
