import React from "react";
import { actors } from "../data";

function Actors() {
  return(
        <div>
          <h1>Actors Page</h1>
          
             { actors.map(actor=> <div key={actor.name} name={actor.name} movie={actor.movies} >
             <b>Name:</b>  {actor.name} <br/>
             <ul> <b>Movies:</b> 
              { actor.movies.map(movie=> 
              <li key={movie}>  {movie}, </li> ) }
             </ul>
            <hr></hr>
            </div>) }
         
        </div>
  )
}

export default Actors;
