import Backbone from 'backbone';
import $ from 'jquery';

// import Game from 'app/models/game';

var BoardView = Backbone.View.extend({

    events: {
        'click .square': 'playTurn'
    },

    currentPlayerImage: function() {
        if (this.model.currentPlayer.mark == "X") {
            $('#X').show();
            $('#O').hide();
        } else if (this.model.currentPlayer.mark == "O") {
            $('#X').hide();
            $('#O').show();
        }
    },

    playTurn: function(e) {
        var spotRow = e.currentTarget.attributes.row.value;
        var spotCol = e.currentTarget.attributes.col.value;
        //   will comment these next 2 lines out in wave 3:
        console.log('spotRow is: ' + spotRow);
        console.log('spotCol is: ' + spotCol);

        // console.log(this.model.currentPlayer.mark);

        if (!this.model.isDone()) {
            if (this.model.currentPlayer.setMark(this.model.gameBoard, spotRow, spotCol)) {
                $(e.target).html(this.model.currentPlayer.symbolImage);
                if (this.model.isDone()) {
                    console.log('>>>>>>>>>GAME OVER<<<<<<<<<<');
                    console.log(this.model.board);
                    console.log(this.model.outcome);
                    console.log(this.model.players);
                    alert('game over, winner is: ' + this.model.outcome);
                } else {
                    this.model.switchTurn();
                    this.currentPlayerImage();
                }
            }
        }

        // console.log(this.model.gameBoard.boardArray);
    }

});

export default BoardView;
