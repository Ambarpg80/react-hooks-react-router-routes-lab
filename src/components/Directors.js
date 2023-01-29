import React from "react";
import { directors } from "../data";

function Directors() {
  return (
        <div>
          <h1>Directors Page</h1>
          
             { directors.map(director=> <div key={director.name} name={director.name} movie={director.movies} >
             <b>Name:</b>  {director.name} <br/>
             <ul> <b>Movies:</b> 
              { director.movies.map(movie=> 
              <li key={movie}>  {movie}, </li> ) }
             </ul>
            <hr></hr>
            </div>) }
          
        </div>
        )
}

export default Directors;
