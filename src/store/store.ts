import { configureStore } from '@reduxjs/toolkit'
import  movieSlice  from './movieSlice'
import createSagaMiddleware from "redux-saga";
import watcherMovieSaga from './movieSaga';


const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    movie: movieSlice,
  },
  middleware: [sagaMiddleware]
})
sagaMiddleware.run(watcherMovieSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch