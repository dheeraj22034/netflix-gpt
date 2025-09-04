import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies.js';
import MainContainer from './Maincontainer.js';
import SecondaryContainer from './SecondaryContainer.js';
import usePopularMovies from '../Hooks/usePopularMovies.js';
import useTrendingMovies from '../Hooks/useTrendingMovies.js';
import useUpcomingMovies from '../Hooks/useUpcomingMovies.js';



const Browser = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header/>
       <MainContainer/>
        <SecondaryContainer/>  
    </div>
  )
};

export default Browser;
