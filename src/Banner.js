import React, {useState, useEffect} from 'react';
import axios from "./axios";
import requests from "./request";
import "./Banner.css"
function Banner(){
    const [movie,setMovie] = useState([]);
    useEffect(()=> {
        async function fetchData(){
            const request=await axios.get(requests.fetchTopRated)
            setMovie(
                request.data.results[Math.floor(Math.random()*request.data.results.length-1)
                    ]
            );
            return request;
        }
        fetchData();
    },[]);
        return (
            <header className="banner"
                style = {{
                    backgroundSize:"cover",
                    backgroundImage:`url("https://image.tmdb.org/t/p/original///4tphk3VbqoRtCVuOzlEQxUrpR6c.jpg")`,
                    backgroundPosition:"center center",

            }}
                    >
                <div className="banner__contents">
                    <h1 className="banner__title">  {movie?.title|| movie?.name}</h1>
                    <div className="banner__buttons">
                        <button className="banner__buttons"> Play </button>
                        <button className="banner__buttons"> My List </button>
                    </div>

                    <h1 className="banner__description"> {movie?.overview}</h1>

                </div>
            </header>
        );

}

export default Banner ;