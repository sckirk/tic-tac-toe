import $ from 'jquery';

import GameList from 'app/collections/game_list';
import ApplicationView from 'app/views/application_view';

$(document).ready(function() {
    var gameList = new GameList();
    gameList.fetch();

    var appView = new ApplicationView({
        el: $('#application'),
        model: gameList
    });

    appView.render();
});
