var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
import Main from '../containers/Main';
import {Provider} from 'react-redux';
var BrowserHistory = ReactRouter.browserHistory;
import configureStore from '../store';
var FrontPageContainer = require('../containers/FrontPageContainer');
var LoginContainer = require('../containers/LoginContainer');
var RegisterContainer = require('../containers/RegisterContainer')
var ResultContainer = require('../containers/ResultContainer');
var DetailContainer = require('../containers/DetailContainer')
import {hashHistory} from 'react-router'

const store = configureStore();

var Routes = (
  <Provider store={store} >
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={FrontPageContainer} />
        <Route path='login' component={LoginContainer} />
        <Route path='register' component={RegisterContainer} />
        <Route path='result/:query' component={ResultContainer} />
        <Route path='detail' component={DetailContainer} />
      </Route>
    </Router>
  </Provider>
  )

module.exports = Routes
