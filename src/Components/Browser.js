import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies.js';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browser = () => {

  useNowPlayingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      
    </div>
  )
};

export default Browser;
