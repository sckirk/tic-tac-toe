import Backbone from 'backbone';

import Board from 'app/models/board';
import Player from 'app/models/player';

const Game = Backbone.Model.extend({
    defaults: {
        board: undefined,
        outcome: undefined,
        players: undefined
    },

    initialize: function() {
        this.gameBoard = new Board();
        this.playerX = new Player('X');
        this.playerO = new Player('O');
        // this.sessionGameCount = 0; // this will need to be made 'active' when we want to start switching which player makes the first move
        // I'll probably want a pop-up modal that tells the browser 'who' is playing the first move.

        this.currentPlayer = this.playerX; // this line will be changed later when we begin "switching" which player starts each game first within multiple sessions
    },

    switchTurn: function() {
        this.playerX.active = !(this.playerX.active);
        this.playerO.active = !(this.playerO.active);

        if (this.playerX.active === true) {
            this.currentPlayer = this.playerX;
        } else {
            this.currentPlayer = this.playerO;
        }
    },

    endGame: function() {
        this.board = [].concat.apply([], this.gameBoard.boardArray);
        this.players = [this.playerX.name, this.playerO.name];
    },

    isDone: function() {
        var checkedMark = this.currentPlayer.mark;

        if (
            // the two 'diagonal' winning possibilities:
            (this.gameBoard.boardArray[0][0] == checkedMark &&
            this.gameBoard.boardArray[1][1] == checkedMark &&
            this.gameBoard.boardArray[2][2] == checkedMark) ||

            (this.gameBoard.boardArray[0][2] == checkedMark &&
            this.gameBoard.boardArray[1][1] == checkedMark &&
            this.gameBoard.boardArray[2][0] == checkedMark) ||

            // the three 'down' winning possibilities:
            (this.gameBoard.boardArray[0][0] == checkedMark &&
            this.gameBoard.boardArray[1][0] == checkedMark &&
            this.gameBoard.boardArray[2][0] == checkedMark) ||

            (this.gameBoard.boardArray[0][1] == checkedMark &&
            this.gameBoard.boardArray[1][1] == checkedMark &&
            this.gameBoard.boardArray[2][1] == checkedMark) ||

            (this.gameBoard.boardArray[0][2] == checkedMark &&
            this.gameBoard.boardArray[1][2] == checkedMark &&
            this.gameBoard.boardArray[2][2] == checkedMark) ||

            // the three 'across' winning possibilities:
            (this.gameBoard.boardArray[0][0] == checkedMark &&
            this.gameBoard.boardArray[0][1] == checkedMark &&
            this.gameBoard.boardArray[0][2] == checkedMark) ||

            (this.gameBoard.boardArray[1][0] == checkedMark &&
            this.gameBoard.boardArray[1][1] == checkedMark &&
            this.gameBoard.boardArray[1][2] == checkedMark) ||

            (this.gameBoard.boardArray[2][0] == checkedMark &&
            this.gameBoard.boardArray[2][1] == checkedMark &&
            this.gameBoard.boardArray[2][2] == checkedMark)) { // END of LONG CONDITIONAL

            this.outcome = this.currentPlayer.mark;
            this.endGame();
            return true;

        } else if (this.gameBoard.isFull() === true) {
            this.outcome = "draw";
            this.endGame();
            return true;

        } else {
            return false;
        }
    },

});

export default Game;
