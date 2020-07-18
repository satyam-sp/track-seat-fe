import React from 'react';
import {connect} from 'react-redux';
import {withRouter,Link} from 'react-router-dom'
import {createMovie,getAllMovies} from '../actions/movies'
import _ from 'lodash'
import './movies.css'
import Form from './Form';
import List from './List'

//import Post from './Post'


let pstObj={}
class Dashboard extends React.Component{
	constructor(props){
		super(props);
		this.state={
			formData: {},
			tabinx: 1
		};

	}
	

	componentDidMount(){
		this.props.getAllMovies()
	}


	render(){
		let {error, success_message, posts} = this.props;
		let {tabinx} = this.state;

		return (
			<div className="container">
				<div className="col-md-12">
					<Link to={'/movies/new'} className="btn btn-primary">create movie</Link>
			 <div>
			 	 <List {...this.props} />
			 	 {_.isEmpty(this.props.movies) ? "No Record Found -create new" : null}
			 </div>
			 </div>
			</div>)
	};
}


function mapStateToProps(state) {
	return {
		movies: state.movies.movies,
		loading: state.movies.loading
	}
}



export default withRouter(connect(mapStateToProps, {createMovie,getAllMovies})(Dashboard));








