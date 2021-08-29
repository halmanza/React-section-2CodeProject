import React from 'react';
import ReviewList from './reviewComponents/ReviewList';
// Contains all that represents the movie data -- image- synopsis, rating ...  
const Movie = ({title,summary,source,Img}) => {

    
    return (
        <div className="movieItem">
            <h3>{title}</h3>
            <img src={Img}   alt="Movie Poster" />
            <p>{summary}</p>
            <small><a href={source} target="_blank" rel="noreferrer">IMDB Link to movie</a></small>
            <div className="reviewListStyle"><ReviewList/></div>
            
        </div>
    )
}

export default Movie
