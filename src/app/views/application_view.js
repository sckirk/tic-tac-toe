import Backbone from 'backbone';
import $ from 'jquery';

import BoardView from 'app/views/board_view';
import Game from 'app/models/game';

var ApplicationView = Backbone.View.extend({
    initialize: function() {
        $('#board').hide();
    },

    render: function() {
        return this;
    },

    events: {
        'click #new-button': 'newGame'
    },

    newGame: function(event) {
        this.model = new Game();
        console.log('clicked to start a new game');
        console.log(this.model.playerX);
        console.log(this.model.gameBoard);
        this.createNewBoard(this.model);
    },

    createNewBoard: function(boardViewModel) {
        var options = {
            el: $('#board'),
            model: boardViewModel // the ApplicationView and the BoardView use the same model, the GAME.
        };

        this.game = new BoardView(options);

        $('td').each(function() {
            $(this).empty();
        });

        $('#board').show();
    }

});

export default ApplicationView;

// click handler on the square class
// logic in the HTML to know which square clicked on..
