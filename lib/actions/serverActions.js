var Dispatcher = require('../dispatcher');
var ActionTypes = require('../constants').ActionTypes;

module.exports = {

  addMessage: function(message, channel) {
    Dispatcher.handleServerAction({
      type: ActionTypes.ADD_MESSAGE,
      message: message, 
      channel: channel
    });
  }
};
