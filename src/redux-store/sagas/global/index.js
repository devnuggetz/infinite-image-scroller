import { call, put, take, takeEvery } from "redux-saga/effects";
import {
  GET_INITITAL_IMAGES,
  GET_SEARCH_IMAGES,
} from "../../actionTypes/global";
import { setInitialImages, setSearchImages } from "../../actions/global";
import { URL } from "../../../constants";

async function initialImagesRequest() {
  const result = await fetch(URL.initialImage);
  const data = await result.json();
  return data.photos.photo;
}
function* getInitialImagesSaga() {
  const result = yield call(initialImagesRequest);

  yield put(setInitialImages(result));
}
async function searchImagesRequest(query) {
  const result = await fetch(`${URL.searchImage}${query}`);
  const data = await result.json();
  return data;
}
function* getSearchImagesSaga({ query }) {
  const result = yield call(searchImagesRequest, query);
  yield put(setSearchImages(result));
}

export function* globalSaga() {
  yield takeEvery(GET_INITITAL_IMAGES, getInitialImagesSaga);
  yield takeEvery(GET_SEARCH_IMAGES, getSearchImagesSaga);
}
