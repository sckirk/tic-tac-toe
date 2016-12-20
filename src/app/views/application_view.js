import Backbone from 'backbone';
import $ from 'jquery';

import BoardView from 'app/views/board_view';
import Game from 'app/models/game';

var ApplicationView = Backbone.View.extend({
    initialize: function() {
        this.model = new Game();

        var options = {
            el: $('#board'),
            model: this.model
        };

        this.game = new BoardView(options);
        this.game.render();
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
    }

});

export default ApplicationView;

// click handler on the square class
// logic in the HTML to know which square clicked on..
