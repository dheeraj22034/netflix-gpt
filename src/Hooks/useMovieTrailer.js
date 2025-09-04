import { useDispatch} from "react-redux";
import { API_OPTIONS } from '../Utils/constants';
import { addTrailerVideo } from '../Utils/moviesslice';
import { useEffect } from "react";


const useMovieTrailer =(movieId) => {

    const dispatch = useDispatch();

    const getMovieVideos = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/1007734/videos?language=en-US', API_OPTIONS)
            console.log(movieId);
        const json = await data.json();
        console.log(json);
         const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));
    };
    useEffect(() => {
        getMovieVideos();
    },[]);

};

export default useMovieTrailer;