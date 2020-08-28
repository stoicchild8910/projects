import React from "react";
import axios from "axios";
import Movie from "./movie"; 
import "./App.css"

class App extends React.Component {
  state ={
    isLoading: true,
    movies : []
  };
  //wait for axios to finish and then continue
  getMovies = async() => {
    const {data: {data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    // console.log(movies);
    // {movies} === {movies:movies}
    this.setState({movies, isLoading:false});
  }
  componentDidMount(){
    this.getMovies();
  };
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading 
          ? <div className="loader">
            <span className="loader_text">Loading ... </span>
            </div>
          : <div className="movies">
              {movies.map(movie=> (
                <Movie 
                  key={movie.id}
                  id = {movie.id}
                  title={movie.title}
                  year={movie.year} 
                  summary={movie.summary} 
                  poster={movie.medium_cover_image} 
                  trailor={movie.yt_trailer_code} 
                  genres = {movie.genres}
                />
              ))}
            </div>
        }
      </section>
    );
  };
}

export default App;
