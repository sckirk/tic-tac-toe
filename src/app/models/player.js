import Backbone from 'backbone';

const Player = Backbone.Model.extend({
    initialize: function(mark) {
        this.mark = mark;

        // if (Game.sessionGameCount % 2 === 0) {
        if (mark == "X") {
            this.name = "Player Rosemary (x)";
            this.active = true;
            this.symbolImage = '<img src="imgs/rosemary.jpg" alt="X - rosemary" width="100" height="100">';
        } else if (mark == "O") {
            this.name = "Player Peach (o)";
            this.active = false;
            this.symbolImage = '<img src="imgs/peach.jpg" alt="O - peach" width="100" height="100">';
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
            alert('oops! that space has already been assigned, please try again');
            throw 'oops! that space has already been assigned, please try again';
        }
        // console.log(board.boardArray); // comment out when finished score testing
        return board.boardArray[spotRow][spotCol]; // returned purely for testing purposes
    }
});

export default Player;
