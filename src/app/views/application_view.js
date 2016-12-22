import Backbone from 'backbone';
import $ from 'jquery';

import BoardView from 'app/views/board_view';
import Game from 'app/models/game';

var ApplicationView = Backbone.View.extend({
    initialize: function() {
        $('#board').hide();
        $('#X').hide();
        $('#O').hide();
    },

    render: function() {
        return this;
    },

    events: {
        'click #new-button': 'newGame'
    },

    newGame: function(event) {
        this.currentGame = new Game();
        console.log('clicked to start a new game');
        console.log(this.model.playerX);
        console.log(this.model.gameBoard);
        this.createNewBoard(this.currentGame, this.model); //this.model is passing the collection
    },

    createNewBoard: function(mod, coll) {
        var options = {
            el: $('#board'),
            model: mod,
            collection: coll
        };

        this.game = new BoardView(options);

        $('td').each(function() {
            $(this).empty();
        });

        $('#board').show();
        this.game.currentPlayerImage();

    }

});

export default ApplicationView;

// click handler on the square class
// logic in the HTML to know which square clicked on..
