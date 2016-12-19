import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

var BoardView = Backbone.View.extend({

  events: {
    'click .square': 'markSpot'
  },

  markSpot: function(spot) {
      console.log(spot);
      var spotRow = spot.currentTarget.attributes.row.value;
      var spotCol = spot.currentTarget.attributes.col.value;
      console.log('spotRow is:');
      console.log(spotRow);
      console.log('spotCol is:');
      console.log(spotCol);
  }

});

export default BoardView;
