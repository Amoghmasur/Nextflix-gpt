import {  useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { addNowPlayingMovies } from "../utils/movieSlice"
import { tmdb_api_options } from "../utils/constant"



const useNowPlayingMovies= ()=>{

    const dispatch=useDispatch()

    const nowPlayingMovies=useSelector((store)=> store.movies.nowPlayingMovies)

    const getNowPlayingMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', tmdb_api_options)
      const json= await data.json()
      dispatch(addNowPlayingMovies(json.results))
    }

    //if nowplaying is not there dont call the api , if its there then only call the api in below useeffect
    //by doing so it calls api only when its clicked/opened.... this is called MEMOIZATION

  useEffect(()=>{
     !nowPlayingMovies &&
        getNowPlayingMovies()
  },[])
}


export default useNowPlayingMovies