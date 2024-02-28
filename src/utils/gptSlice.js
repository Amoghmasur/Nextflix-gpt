import { createSlice } from "@reduxjs/toolkit";



const gptSlice= createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        movieName:null,
        Movieresults:null,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch=!state.showGptSearch
        },
        addGptMovieResults:(state,action) =>{
            const {movieName,Movieresults}=action.payload
            state.movieName= movieName
            state.Movieresults=Movieresults
        },
    },
})


export const { toggleGptSearchView , addGptMovieResults}=gptSlice.actions
export default gptSlice.reducer