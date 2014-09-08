/** @jsx React.DOM */

var React = require('react');
var Dashboard = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello {this.state.message}</h1>
      </div>
    );
  },
  getInitialState: function() {
    return {
      message: "world"
    };
  }
});

module.exports = Dashboard;