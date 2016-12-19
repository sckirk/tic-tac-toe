import Backbone from 'backbone';
import $ from 'jquery';

import BoardView from 'app/views/board_view';

var ApplicationView = Backbone.View.extend({
    initialize: function() {
        var options = {
            el: $('#board')
        };

        this.game = new BoardView(options);
    },

    render: function() {
        this.game.render();

        return this;
    },

    events: {
        'click #restart-button': 'restartGame'
    },

    restartGame: function(event) {
        console.log('clicked restart button to start a new game');
    }

});

export default ApplicationView;

// click handler on the square class
// logic in the HTML to know which square clicked on..
