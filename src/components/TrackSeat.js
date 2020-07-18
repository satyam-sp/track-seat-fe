import React from 'react';
import {connect} from 'react-redux';
import {withRouter,Link} from 'react-router-dom'
import {trackSeat} from '../actions/movies'
import _ from 'lodash'
import SeatPicker from 'react-seat-picker'


class TrackSeat extends React.Component{
  constructor(props){
    super(props);
    this.state={
      formData: {},
      seats: {},
      number_of_seats: 1
    };
  }
  addSeatCallback = ({ row, number, id }, addCb) => {
    const newTooltip = `tooltip for id-${id} added by callback`
    addCb(row, number, id, newTooltip)
    this.addData(row.toLowerCase(),id)
  }

  addData = (row,id) => {
  	let seat = {id: row.toLowerCase()+id,row: row.toLowerCase(),"column": id,"status": "AVAILABLE"}
  	this.state.seats[row.toLowerCase()+id] = seat
  	this.setState({...this.state})
  }

  removeData = (row,id) => {
  	delete this.state.seats[row.toLowerCase()+id]
  	this.setState({...this.state})
  }

  removeSeatCallback = ({ row, number, id }, removeCb) => {
    const newTooltip = ''
    removeCb(row, number, newTooltip)
    this.removeData(row.toLowerCase(),id)

  }

  handleChange = (event) => {
  	this.setState({number_of_seats: event.target.value})
  }

  trackSeat=(event) =>{
  	this.props.trackSeat(this.state.seats, this.state.number_of_seats)
  }


  getRows(){
  	let row1 = Array.from(Array(50), (_, i) => i + 1).map((item)=>({id: item, number:  "A-"+item}))
  	let row2 = Array.from(Array(50), (_, i) => i + 1).map((item)=>({id: item, number: "B-"+item}))
  	let row3 = Array.from(Array(50), (_, i) => i + 1).map((item)=>({id: item, number: "C-"+item}))
  	let row4 = Array.from(Array(50), (_, i) => i + 1).map((item)=>({id: item, number: "D-"+item}))
  	let row5 = Array.from(Array(50), (_, i) => i + 1).map((item)=>({id: item, number: "E-"+item}))
  	let row6 = Array.from(Array(50), (_, i) => i + 1).map((item)=>({id: item, number: "F-"+item}))
  	let row7 = Array.from(Array(50), (_, i) => i + 1).map((item)=>({id: item, number: "G-"+item}))
  	let row8 = Array.from(Array(50), (_, i) => i + 1).map((item)=>({id: item, number: "H-"+item}))
  	let row9 = Array.from(Array(50), (_, i) => i + 1).map((item)=>({id: item, number: "I-"+item}))
  	let row10 = Array.from(Array(50), (_, i) => i + 1).map((item)=>({id: item, number: "J-"+item}))
    return [row1,row2,row3,row4,row5,row6,row7,row8,row9,row10]
  }
 

  render(){
    let {best_seats} = this.props
    return (
      <div className=" col-md-12">
      <div className="seats-section">
      <SeatPicker
        addSeatCallback={this.addSeatCallback}
        removeSeatCallback={this.removeSeatCallback}
        rows={this.getRows()}
        maxReservableSeats={4}
        alpha
        visible
        selectedByDefault
        tooltipProps={{multiline: true}}
      />
      <div className="tools">
	      <span>No of seats</span>
	      <select name="number_of_seats" onChange={this.handleChange}>
	      	{[1,2,3,4].map((opt) => <option value={opt}>{opt}</option> )}
	      </select>
	      <button onClick={this.trackSeat} className="btn btn-success">Track Best Seat</button>
      </div>
      {!_.isEmpty(best_seats) ? 
	      <div className="results">
	      	<p>Best Seats </p>
	      	<span>{best_seats.toString()}</span>
	      </div>
      : null}
    </div>    
  </div>)
  };
}


function mapStateToProps(state) {
  return {
  	best_seats: state.movies.best_seats
  }
}



export default withRouter(connect(mapStateToProps, {trackSeat})(TrackSeat));








