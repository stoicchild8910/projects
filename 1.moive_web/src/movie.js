import React from 'react';
import propTypes from 'prop-types';
import "./App.css"

function Movie({id, title, summary, poster, year, yt_trailor, genres}) {
    console.log(id);
    console.log(genres);
    return <div className="movie_movie">
        <img src={poster} alt={title} />
        <div className="movie_data">
            <h3 className="movie_title">{title.slice(0, 22)}</h3>
            <h5 className="moive_year">In {year}</h5>
            <ul className="genres">
                {genres.map((cur, idx) =>
                    // <li className="genres_genres" key={idx}>{cur}</li>
                {
                    if(idx<3){
                        return <li className="genres_genres" key={idx}>{cur}</li>
                    }
                }
                )}
            </ul>
            <p className="moive_summary"> {summary.slice(1, 140)}... </p>
        </div>
    </div>
}

Movie.prototype = {
    id: propTypes.number.isRequired,
    // title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    year: propTypes.number.isRequired,
    yt_trailor: propTypes.string,
    genres: propTypes.arrayOf(propTypes.string).isRequired
};

export default Movie;