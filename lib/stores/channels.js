var R = require('ramda');
var _ = require('lodash');
var inherits = require('util').inherits;
var Dispatcher = require('../dispatcher');
var EventEmitter = require('events').EventEmitter;
var ActionTypes = require('../constants').ActionTypes;
var CHANGE_EVENT = 'change';

function ChannelsStore() {
  var channels = [];
  var dispatchToken = Dispatcher.register(_.bind(onEvent, this)); 
  
  this.load = load;
  this.getState = getState;
  this.emitChange = emitChange;
  this.addMessage = addMessage;
  this.getChannel = getChannel;
  this.addChangeListener = addChangeListener;
  this.removeChangeListener = removeChangeListener;

  function onEvent(payload) {
    var action = payload.action;

    switch(action.type) {

      case ActionTypes.ADD_MESSAGE:
        this.addMessage(action.message, action.channel);
        this.emitChange();
        break;

      default:
        // do nothing
    }
  }

  function emitChange() {
    this.emit(CHANGE_EVENT);
  }
   
  function getState() {
    return channels;
  }

  function removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  function addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  function load(sow) {
    channels = sow;
    this.emitChange();
  }

  function addMessage(message, channelName) {
    var channel = getChannel(channelName);

    if (!channel) {
      throw new Error("Cannot find channel " + channelName);
    }

    channel.messages.push(message);
    this.emitChange();
  }

  function getChannel(name) {
    return R.find(R.propEq('name', name))(channels);
  }
}

inherits(ChannelsStore, EventEmitter);

module.exports = new ChannelsStore();