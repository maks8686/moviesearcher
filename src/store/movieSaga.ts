import { call, put, takeEvery } from "redux-saga/effects";
import { movieApi } from "./../services/api/movieApi";
import { setTopMovieDataFromApi, getTopMovieDataSaga } from "./action";

interface IResp {
  data: {};
}

function* getMovieDataWorker() {
  try {
    const topMovieResp: IResp = yield call(
      movieApi.get,
      `/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ru-RU&page=1`
    );
    
    yield console.log(topMovieResp.data);
    yield put(setTopMovieDataFromApi(topMovieResp.data));
    console.log("сага отработала")
  } catch (error) {
    console.log("ошибка");
  }
}

export default function* watcherMovieSaga() {
  yield takeEvery(getTopMovieDataSaga, getMovieDataWorker);
}
