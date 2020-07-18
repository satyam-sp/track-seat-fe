import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import movies from './movies';
import {reducer as toastrReducer} from 'react-redux-toastr'

export default combineReducers({
  movies: movies,
  toastr: toastrReducer,
  router: routerReducer
})

