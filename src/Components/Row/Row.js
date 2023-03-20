import axios from "../../Axios/Axios";
import React, { useEffect, useState } from "react";
import { imageUrl ,API_KEY} from "../../Constants/Constants";
import "./Row.css";
import YouTube from "react-youtube";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [url,setUrl]=useState('')
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results);
    });
  },[]);

  const opts = {
    height: "440",
    width: "1440",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        if(response.data.results.length!==0){
            setUrl(response.data.results[0])
        }else{
            console.log('Array Empty');
        }
    })
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((movie, index) => {
          return (
            <div className="container" key={index}>
              <img
                onClick={() => handleMovie(movie.id)}
                className={props.isSmall ? "small" : "poster"}
                alt="poster"
                src={`${imageUrl + movie.backdrop_path}`}
              />
               <div className="centered">{movie?movie.title||movie.name:''}</div>
            </div>
          );
        })}
      </div>
      {url && <YouTube videoId={url.key} opts={opts} />}
    </div>
  );
}

export default RowPost;
