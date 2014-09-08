/** @jsx React.DOM */

require('./styles.less');

var React = require('react');
var Application = require('./application');

require('./channels').then(function (e) {
  console.log("SOW", e.sow);
  React.renderComponent(<Application />, document.getElementById("app"));
});
