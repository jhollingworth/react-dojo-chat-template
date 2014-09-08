var _ = require('lodash');
var ServerActions = require('./actions/serverActions');

module.exports = {
  start: function(channels) {
    channels.on('message', function(e) {
      ServerActions.addMessage(e.message, e.channel);
    });
  }
};