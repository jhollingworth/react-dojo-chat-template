/** @jsx React.DOM */

var React = require('react');
var moment = require('moment');
var ChannelsStore = require('../stores/channels');

var Dashboard = React.createClass({
  render: function() {
    return (
      <div className="dashboard">
        <h1>Hello World</h1>
        <div className="messages">
          {this.state.messages.map(function(message) {
            return <div className="message">{message.text} ({moment(message.timestamp).fromNow()})</div>;
          })}
        </div>
      </div>
    );
  },
  componentDidMount: function() {
    ChannelsStore.addChangeListener(this.channelChanged);
  },
  componentWillUnmount: function() {
    ChannelsStore.removeChangeListener(this.channelChanged);
  },
  channelChanged: function(channels) {
    this.setState(this.getState());
  },
  getInitialState: function() {
    return this.getState();
  },
  getState: function() {
    return ChannelsStore.getChannel("test");
  }
});

module.exports = Dashboard;