import { createAction } from "@reduxjs/toolkit";



export const getTopMovieDataSaga = createAction("getTopMovieDataSaga")
export const setTopMovieDataFromApi =createAction<object>("setTopMovieDataFromApi")
console.log(setTopMovieDataFromApi)