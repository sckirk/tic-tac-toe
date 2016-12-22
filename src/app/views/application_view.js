import Backbone from 'backbone';
import $ from 'jquery';

import BoardView from 'app/views/board_view';
import Game from 'app/models/game';

var ApplicationView = Backbone.View.extend({
    initialize: function() {
        $('#board').hide();
        $('#list-games-info').empty();
        $('#X').hide();
        $('#O').hide();
    },

    render: function() {
        return this;
    },

    events: {
        'click #new-button': 'newGame',
        'click #show-games-button': 'showAllGames'
    },

    newGame: function(event) {
        this.currentGame = new Game();
        $('#list-games-info').hide();
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

    },

    showAllGames: function() {
        $('#list-games-info').show();
        $('#list-games-info').empty();
        this.model.fetch().done(function(APIdata) {
            APIdata.forEach(function(eachGame) {        console.log(eachGame);
                $('#list-games-info').append("<li>ID: " + eachGame.id);
                $('#list-games-info').append("Winner: " + eachGame.outcome + "  ~  ");
                $('#list-games-info').append("Players: " + eachGame.players + "</li>");
            });
        });
    }

});

export default ApplicationView;

// click handler on the square class
// logic in the HTML to know which square clicked on..
