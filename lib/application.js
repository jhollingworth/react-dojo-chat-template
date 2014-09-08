/** @jsx React.DOM */

var React = require("react");
var Router = require('react-router-component')

var NotFound = Router.NotFound;
var Location = Router.Location;
var Locations = Router.Locations;

var NotFoundPage = require('./components/notFound');
var DashboardPage = require('./components/dashboard');

var Application = React.createClass({
  render: function() {
    return (
      <Locations>
        <Location path="/" handler={DashboardPage} />
        <NotFound handler={NotFoundPage} />
      </Locations>
    );
  }
});

module.exports = Application;