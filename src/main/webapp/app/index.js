var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./config/routes');
var ReactRouter = require('react-router');

const render = () => {
  ReactDOM.render(
    Routes,
    document.getElementById('app')
  );
}

render();

if (module.hot){
  module.hot.accept(require('./config/routes'), () => { render() })
}
