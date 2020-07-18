import React from 'react';
import logo from './logo.svg';
import {routerMiddleware} from "react-router-redux";
import {applyMiddleware, createStore, compose} from "redux"
import {Provider} from  'react-redux'
import AppRouter from './router/AppRouter'
import history from './router/AppRouter'
import reducers from './reducers'
import thunk from 'redux-thunk'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import ReduxToastr from 'react-redux-toastr'

const historyMiddleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// import '../public/assets/css/reset.css';

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(historyMiddleware, thunk))
);


function App() {
  return (
    <Provider store={store}>
      <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        transitionIn="bounceIn"
        transitionOut="bounceOut"
        progressBar
        closeOnToastrClick/>
        <AppRouter />
     
    </Provider>
  );
}

export default App;
