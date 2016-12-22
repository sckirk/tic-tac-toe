import $ from 'jquery';

import GameCollection from 'app/collections/game_collection';
import ApplicationView from 'app/views/application_view';

$(document).ready(function() {
    var gameCollection = new GameCollection();

    var appView = new ApplicationView({
        el: $('#application'),
        model: gameCollection
    });

    appView.render();
});
