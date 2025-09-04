import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies= useSelector((store)=> store.movies);
  return (
    movies.NowPlayingMovies &&(
    <div className='bg-black'>
        <div className='-mt-52 relative pl-2 z-20 '>
    <MovieList title ={"Now Playing"} movies={movies.NowPlayingMovies}/>
     <MovieList title ={"Trending"} movies={movies.trendingMovies}/>
      <MovieList title ={"Popular"} movies={movies.popularMovies}/>
       <MovieList title ={"upcoming"} movies={movies.upcomingMovies}/>
       </div>
    </div>
  )
);
};

export default SecondaryContainer;
