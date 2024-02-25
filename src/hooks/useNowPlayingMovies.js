import {  useDispatch } from "react-redux"
import { useEffect } from "react"
import { addNowPlayingMovies } from "../utils/movieSlice"
import { tmdb_api_options } from "../utils/constant"



const useNowPlayingMovies= ()=>{

    const dispatch=useDispatch()

    const getNowPlayingMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', tmdb_api_options)
      const json= await data.json()
      console.log(json.results)
      dispatch(addNowPlayingMovies(json.results))
    }


  useEffect(()=>{
        getNowPlayingMovies()
  },[])
}


export default useNowPlayingMovies