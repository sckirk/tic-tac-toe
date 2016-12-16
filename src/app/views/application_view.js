import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import BoardView from 'app/views/board_view';

var ApplicationView = Backbone.View.extend({

  events: {
    'click restart-button': 'restartGame'
  },

  restartGame: function() {
  }

});

export default ApplicationView;
