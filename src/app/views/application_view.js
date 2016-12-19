import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import BoardView from 'app/views/board_view';

var ApplicationView = Backbone.View.extend({

  events: {
    'click #restart-button': 'restartGame'
  },

  restartGame: function(event) {
      console.log('clicked restart button to start a new game');
  }

});

export default ApplicationView;
