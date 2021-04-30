import {
  all,
  call,
  put,
  take,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import {
  GET_INITITAL_IMAGES,
  GET_SEARCH_IMAGES,
} from "../../actionTypes/global";
import {
  getSearchImages,
  setInitialImages,
  setSearchImages,
} from "../../actions/global";
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
  const result = await fetch(
    `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e52a287d86469bf01ea901dfd92cf8a5&text=${query}&media=photos&format=json&nojsoncallback=1`
  );
  const data = await result.json();

  return data.photos.photo;
}
function* getSearchImagesSaga(action) {
  console.log(action.query);
  const result = yield call(searchImagesRequest, action.query);
  yield put(setSearchImages(result));
}

function* initialSaga() {
  yield takeEvery(GET_INITITAL_IMAGES, getInitialImagesSaga);
}
function* searchSaga() {
  yield takeEvery(GET_SEARCH_IMAGES, getSearchImagesSaga);
}

export default function* rootSaga() {
  yield all([initialSaga(), searchSaga()]);
}
