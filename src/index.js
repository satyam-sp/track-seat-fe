import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router,Route,Switch} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
export const history =  createHistory();


ReactDOM.render(
  <React.StrictMode>
  	<Router history={history}>
  		<Switch>
  			<Route path="/" component={App} />
  		</Switch> 
  	</Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
