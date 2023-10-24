import axios from "axios";

const movieBaseUrl = 'https://api.themoviedb.org/3'

const api_key = '62a9ed50ab7f0c1585966112aa75020a'
const movieByGenreBaseURL = 'https://api.themoviedb.org/3/discover/movie?api_key=62a9ed50ab7f0c1585966112aa75020a';
//https://api.themoviedb.org/3/trending/all/day?api_key=62a9ed50ab7f0c1585966112aa75020a

const getTrendingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);
const getMovieByGenreId=(id)=>
axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default { getTrendingVideos,
    getMovieByGenreId }