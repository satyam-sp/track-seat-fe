import React from 'react';
import { Router, Link, Route, Switch, NavLink,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import Movie from '../components/Movie'
import Form from '../components/Form'
import NotFound from '../components/NotFound'
import TrackSeat from '../components/TrackSeat'
// import ListOrganizers from '../components/Organizers/List'

class AppRouter extends React.Component{
  constructor(props){
    super(props)
    this.state = { 
    }
  }

 render(){
  let props = this.props;
  global.RG ={currentUser: sessionStorage.user && JSON.parse(sessionStorage.user)}
  return (

      <Switch>
        <Route exact path="/" render={(props) =>  <Redirect to='/movies'/>} />
        <Route path="/movies" exact component={(Movie)}/>
        <Route path="/movies/new" exact component={(Form)}/>
        <Route path="/movies/:id/edit" exact component={(Form)}/>
        <Route path="/track-seat" exact component={TrackSeat} />
    
        <Route component={NotFound}/>
      </Switch>

)};

}

function mapStateToProps(state) {
  return {
   // error: state.users.error,
  }
}

export default withRouter(connect(mapStateToProps, {})(AppRouter));


