import * as actionTypes from './actionTypes'
import { appConstants } from '../constants';
import axios from 'axios';
import {history} from '../index';
import _ from 'lodash'
import {toastr} from 'react-redux-toastr'


export function getRequest(){
	return {
		type:  actionTypes.GET_REQUEST_SUCCESS,
		payload: {}
	}
}



export function createMovieSuccess(response){
  return {
      type: actionTypes.CREATE_MOVIE,
      payload: {
          response,
      }
  }
}
export function createMovie(data) {
  let _history = history
  return function (dispatch) {
    dispatch(getRequest())
  	axios.post(`${appConstants.WEB_SERVICE_URL}/api/v1/movies`,{movie: data})
  		.then(response => {
     // _this.setState({tabinx: 1})
      toastr.success("success","create movie successfully")
  		//dispatch(createMovieSuccess(response))
      _history.replace('/movies')
  	}).catch(error=> {
  		createError(error)
  	});

  };
}

export function updateMovie(id,data) {
  let _history = history
  return function (dispatch) {
    dispatch(getRequest())
    axios.patch(`${appConstants.WEB_SERVICE_URL}/api/v1/movies/${id}`,{movie: data})
      .then(response => {
     // _this.setState({tabinx: 1})
      toastr.success("success","updated movie successfully")
      //dispatch(createMovieSuccess(response))
      _history.replace('/movies')
    }).catch(error=> {
      createError(error)
    });

  };
}
export function getMovieSuccess(response){
  return {
      type: actionTypes.GET_MOVIE,
      payload: {
          response,
      }
  }
}
export function getMovie(id) {
  let _history = history
  return function (dispatch) {
    dispatch(getRequest())
    axios.get(`${appConstants.WEB_SERVICE_URL}/api/v1/movies/${id}`)
      .then(response => {
      dispatch(getMovieSuccess(response))
    }).catch(error=> {
      createError(error)
    });

  };
}


export function trackSeatSuccess(response){
  return {
      type: actionTypes.TRACK_SEATS,
      payload: {
          response,
      }
  }
}
export function trackSeat(data,no_seats) {

  let venue = {
        "layout": {
            "rows": 10,
            "columns": 50
        }
    }
  let _history = history
  return function (dispatch) {
    dispatch(getRequest())
    axios.post(`${appConstants.WEB_SERVICE_URL}/api/v1/movies/track_seats`,{venue: venue,number_of_seats: no_seats, seats: data})
      .then(response => {
      dispatch(trackSeatSuccess(response))
    }).catch(error=> {
      createError(error)
    });

  };
}
export function getAllMoviesSuccess(response){
  return {
      type: actionTypes.GET_ALL_MOVIES,
      payload: {
          response,
      }
  }
}
export function getAllMovies() {
  let _history = history
  return function (dispatch) {
    dispatch(getRequest())
    axios.get(`${appConstants.WEB_SERVICE_URL}/api/v1/movies`)
    .then(response => {
        dispatch(getAllMoviesSuccess(response))
      }).catch(error=> {
        createError(error)
      });

  };
}


export function createError(error){	
  toastr.error('Error',error && error.response.data.error)
}

