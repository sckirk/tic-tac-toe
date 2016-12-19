import Backbone from 'backbone';

const Player = Backbone.Model.extend({
    initialize: function(mark) {
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
    },

    setMark: function(board, spotRow, spotCol) {
        if (board.boardArray[spotRow][spotCol] == ' ') {
            board.boardArray[spotRow][spotCol] = this.mark;
            // THIS IS WHERE I'M GOING TO NEED TO ADD the image into the corresponding spot square into my HTML... I think. :)
        } else {
            throw 'oops! that space has already been assigned, please try again';
        }
        // console.log(board.boardArray); // comment out when finished score testing
        return board.boardArray[spotRow][spotCol]; // returned purely for testing purposes
    }    
});

export default Player;
