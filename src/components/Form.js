import React from 'react';
import {connect} from 'react-redux';
import {withRouter,Link} from 'react-router-dom'
import {createMovie,getMovie,updateMovie} from '../actions/movies'
import _ from 'lodash'
import {toastr} from 'react-redux-toastr'

let obj={}
class Form extends React.Component{
  constructor(props){
    super(props);
    
    this.state={
      formData: {},
      id: props.match.params.id


    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  

  componentDidMount(){
    if(this.state.id)
    this.props.getMovie(this.state.id)
  }

  handleChange(event) {
    obj[event.target.name] = event.target.value;
    this.setState({formData: obj});
  }
  validForm = (data) =>{

    if(!(data.year.match(/^-{0,1}\d+$/) && data.year.length == 4)){
      toastr.error("year is not valid")
      return false
    }
    
    if(!data.imdb_url.match(/(http|https):\/\/(?:.*\.|.*)imdb.com\/(?:t|T)itle(?:\?|\/)(..\d+)/i)){
      toastr.error("url is not valid")
      return false
    }

    return true
  }
  handleSubmit(e){
    e.preventDefault();
    let data = _.merge(this.props.movie,this.state.formData)
    
    if(this.validForm(data)){
      this.state.id ? this.props.updateMovie(this.state.id, data) : this.props.createMovie(data);
    }
  }

  render(){
    let {error, success_message, movie} = this.props
    return (
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Create Movie</div>
            <div className="card-body">
              <form onSubmit={(event) => this.handleSubmit(event)} className="form-horizontal" method="post" >
                <div className="form-group">
                  <label for="title" className="cols-sm-2 control-label">Title</label>
                  <div className="cols-sm-10">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                      <input type="text" defaultValue={movie && movie.title} onChange={this.handleChange} className="form-control" name="title" id="title" placeholder="Enter Title" required/>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label for="year" className="cols-sm-2 control-label">Year</label>
                  <div className="cols-sm-10">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                      <input type="text" defaultValue={movie && movie.year}  onChange={this.handleChange} className="form-control" name="year" id="year" placeholder="Enter Year" required/>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label for="genre" className="cols-sm-2 control-label">Genre</label>
                  <div className="cols-sm-10">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                      <input type="text" defaultValue={movie && movie.genre} onChange={this.handleChange} className="form-control" name="genre" id="genre" placeholder="Enter Genre" required/>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label for="summary" className="cols-sm-2 control-label">Summary</label>
                  <div className="cols-sm-10">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                      <textarea className="form-control" defaultValue={movie && movie.summary} name="summary" onChange={this.handleChange} id="summary" placeholder="Enter summary" required />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label for="imdb_url" className="cols-sm-2 control-label">IMDB URL</label>
                  <div className="cols-sm-10">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
                      <input type="text" className="form-control" defaultValue={movie && movie.imdb_url} name="imdb_url" onChange={this.handleChange} id="imdb_url" placeholder="Enter imdb url" required />
                    </div>
                  </div>
                </div>
               
                <div className="form-group ">
                  <button type="submit" className="btn btn-primary btn-lg btn-block login-button">{this.state.id ? "Update Movie" : "Create Movie"}</button>
                </div>
               
              </form>
            </div>
          </div>
        </div>
      </div>)
  };
}


function mapStateToProps(state) {
  return {
    loading: state.movies.loading,
    movie: state.movies.movie
  }
}



export default withRouter(connect(mapStateToProps, {createMovie,getMovie,updateMovie})(Form));








