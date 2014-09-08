var loadChannels = require('../channels');
var Dispatcher = require('../dispatcher');
var ActionTypes = require('../constants').ActionTypes;
var MessageStore = require('../stores/MessageStore');

module.exports = {
  addMessage: function(message, channel) {
    Dispatcher.handleViewAction({
      type: ActionTypes.ADD_MESSAGE,
      message: message, 
      channel: channel
    });

    emit('message', message, channel);
  }
};


function emit() {
  var args = arguments;

  loadChannels.then(function(e) {
    e.channels.emit.apply(e.channels, args);
  });
}