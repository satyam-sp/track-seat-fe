import React from 'react'
import {Link} from 'react-router-dom'
export default function List(props){

	return props.movies.map((item) =>{
		return(
		<div className="list-group">
          <div className="list-group-item item-g">
            <div className="media col-md-2">
                <figure className="pull-left">
                    <img className="media-object img-rounded img-responsive"  src="http://placehold.it/350x250" alt="placehold.it/350x250" />
                </figure>
            </div>
            <div className="col-md-7">
                <h4 className="list-group-item-heading">{item.title}</h4>
                <p className="list-group-item-text">{item.summary}</p>
                <p className="list-group-item-text">{item.genre}</p>
                <a href={item.imdb_url} className="list-group-item-text">{item.imdb_url}</a>
            </div>
            <div className="col-md-3 text-center">
                
			  <Link to={'/track-seat'} className="btn btn-default btn-sm">Track Seat</Link>
			  <Link to={`/movies/${item.id}/edit`} className="btn btn-default btn-sm">Edit</Link>                
              <p className="list-group-item-text">{item.year}</p>
            </div>
          </div>
        </div>)
	})
	
} 