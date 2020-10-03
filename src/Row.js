import React, {useState,useEffect} from 'react';
import axios from "axios";
import "./Row.css"



function Row({title,fetchURL,isLargeRow}) {
     const [movies,setMovies] =useState([]);
     useEffect(()=>{
     async function fetchData(){
      const request= await axios.get(fetchURL);


      setMovies(request.data.results);
         return request;
     }
     fetchData();


     },[fetchURL]);
     console.log(movies);
        return (
            <div className="row">
                <h1> {title} </h1>
                <div className="row__posters">

                    {movies.map(movie=> (


                        <img
                            key={movie.id}
                            className='row__poster ${isLargeRow && "row__posterLarge"}'
                            src={`https://image.tmdb.org/t/p/original/${isLargeRow?movie.backdrop_path:movie.poster_path}`} alt={movie.name}/>

                    ))
                    }
                </div>
            </div>
        );

}

export default Row;
