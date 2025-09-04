import { API_OPTIONS } from '../Utils/constants';
import { useDispatch } from 'react-redux';
 import { addTrendingMovies } from '../Utils/moviesslice';
 import { useEffect } from 'react';


const useTrendingMovies = () =>{

const dispatch= useDispatch();

const getNowPlayingMovies =async () =>{

    const data =await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS
    
    );
    const json =await data.json();
   
    dispatch(addTrendingMovies(json.results));
    
};
useEffect( () =>{

getNowPlayingMovies();
    
    
 } ,[]);






};

export default useTrendingMovies;