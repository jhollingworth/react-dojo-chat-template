/** @jsx React.DOM */

require('./styles.less');

var React = require('react');
var Router = require('./router');
var ChannelsSync = require('./channelsSync');
var ChannelsStore = require('./stores/channels');

require('./channels').then(function (e) {
  ChannelsStore.load(e.sow);
  ChannelsSync.start(e.channels);

  React.renderComponent(<Router />, document.getElementById("app"));
});
