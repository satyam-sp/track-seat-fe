import * as actionTypes from '../actions/actionTypes'

const initialState = {
  loading: false,
  movies: [], 
  movie: {},
  best_seats: [],
  success_message: undefined,
  success: false,
  error: undefined 
}

const movies = (state=initialState,action) => {

  switch(action.type){
  	case actionTypes.GET_REQUEST_SUCCESS:
  	  return {...state, loading: true}
    case actionTypes.CREATE_MOVIE:
      let movie = action.payload.response.data.movie
      state.movies.push(movie)
      return {...state, movies: state.movies,loading: false}
    case actionTypes.GET_MOVIE:
      return {...state, movie: action.payload.response.data.movie} 
    case actionTypes.TRACK_SEATS:
      return {...state, best_seats: action.payload.response.data.response}
    case actionTypes.GET_ALL_MOVIES:
      return {...state, loading: false, movies: action.payload.response.data.movies}
    default: 
      return {...state, loading: false} 
  }  
}

export default movies;

