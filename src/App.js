import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Movie from "./Movies/Movie"
import MovieList from "./Movies/MovieList"

import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies/') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movies' slice of state
          // console.log(response)
          setMovies(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
      <div>
        <SavedList list={[ /* This is stretch */]} />
          <nav>
            <Link to="/">Movies</Link>
            <Link to="/movies">MovieList</Link>
          </nav>
        <Routes>
          <Route path="/" element={<Movie movie={movies}/>}/>
          <Route path="/movies/" element={<MovieList movies={movies}/>}/>
          <Route path="movies/:itemID/*" element={<Movie movies={movies}/>}  />

        </Routes>
      </div>
  );
}
