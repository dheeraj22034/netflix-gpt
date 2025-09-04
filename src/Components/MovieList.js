import React from 'react';
import Moviecard from './Moviecard';

const MovieList = ({title, movies}) => {
    console.log(movies);
  return (
    <div className='px-6 '>
       
            <h1 className='text-white text-3xl font-bold px-12 py-8'>{title}</h1>   
        
        <div className='flex overflow-x-scroll p-6'>
        <div className='flex  gap-3 '> 
            {movies?.map((movie) => (<Moviecard key={movie.id} poster_path={movie.poster_path}/> ))}
          
        </div>
     </div>
    </div>
  )
}

export default MovieList;
