import React from 'react';
import { IMG_CDN_URL } from '../Utils/constants';


const Moviecard = ({poster_path}) => {
  return (
    <div className='w-40'>
     <img alt='movie card'
     src= {IMG_CDN_URL+poster_path}/>
    </div>
  )
}

export default Moviecard;
