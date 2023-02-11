import React from "react"

export default function Card(props){
    
    let poster = ""
    
    if (props.poster != null){
        poster = <img src={`https://image.tmdb.org/t/p/w500${props.poster}`} alt={props.title + ' poster'} className = 'card--image'/>
    } else {
        poster = <img src='../poster-not-found.png' alt={props.title + ' poster'} className = 'card--image'/>
    }
 
    return(
            <div className='card'>
                {poster}
                <div>
                    <h3 className='card--title'>{props.title}</h3>
                    <p><small> RELEASE DATE: {props.release}</small></p>
                    <p><small> RATING: {props.rating}/10</small></p>
                    <p className="card--description"> {props.description}</p>
                </div>
            </div>
    )
}