import React from "react";
import { movies } from "../data";

function Movies() {

  return (
        <div>
        <h1>Movies Page</h1>
          
             { movies.map(movie=> <div key={movie.title} title={movie.title} time={movie.time}>
             <b>Title:</b>  {movie.title} <br/>
             <b>Time:</b> {movie.time} minutes <br/>
             <ul> <b>Genres:</b> 
              { movie.genres.map(genre=> 
              <li key={genre}>  {genre}, </li> ) }
             </ul>
            <hr></hr>
            </div>) }
          
        </div>
        )
}

export default Movies;
