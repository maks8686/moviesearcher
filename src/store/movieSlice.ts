import { createSlice,PayloadAction } from "@reduxjs/toolkit"

interface IMovies{
  results:[{
    id:number,
    title:string,
    overview:string,
    release_date:string,
    poster_path:string
  },] | null,
  loadingStatus: boolean,
  error: null | string
  
}
const initialState:IMovies={
  results:null,
  loadingStatus: true,
  error: null 
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setTopMovieDataFromApi:(state,action:PayloadAction<IMovies>)=>{
      state.results=action.payload.results
      state.loadingStatus=false
      console.log("в слайсе отработало")
    }
}
})

export const { setTopMovieDataFromApi } = movieSlice.actions
export default movieSlice.reducer
