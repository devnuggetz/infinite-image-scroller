import {
  all,
  call,
  debounce,
  put,
  take,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import {
  GET_INITITAL_IMAGES,
  GET_SEARCH_IMAGES,
  GET_SEARCH_NEXT_IMAGES,
} from "../../actionTypes/global";
import {
  getSearchImages,
  setInitialImages,
  setSearchImages,
  setSearchNextImages,
} from "../../actions/global";
import { URL } from "../../../constants";

async function initialImagesRequest(page) {
  const result = await fetch(
    `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=e52a287d86469bf01ea901dfd92cf8a5&per_page=15&page=${page}&format=json&nojsoncallback=1`
  );
  const data = await result.json();
  return data.photos.photo;
}
function* getInitialImagesSaga(action) {
  const result = yield call(initialImagesRequest, action.page);

  yield put(setInitialImages(result));
}
async function searchImagesRequest(query, page) {
  const result = await fetch(
    `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e52a287d86469bf01ea901dfd92cf8a5&text=${query}&media=photos&per_page=15&page=${page}&format=json&nojsoncallback=1`
  );
  const data = await result.json();

  return data.photos.photo;
}
function* getSearchImagesSaga(action) {
  console.log(action);
  const result = yield call(searchImagesRequest, action.query, action.page);
  yield put(setSearchImages(result, action.query));
}

async function searchNextImagesRequest(query, page) {
  const result = await fetch(
    `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e52a287d86469bf01ea901dfd92cf8a5&text=${query}&media=photos&per_page=15&page=${page}&format=json&nojsoncallback=1`
  );
  const data = await result.json();
  return data.photos.photo;
}
function* getSearchNextImagesSaga(action) {
  console.log("Saga called for next", action);
  const result = yield call(searchNextImagesRequest, action.query, action.page);
  yield put(setSearchNextImages(result, action.query));
}

function* initialSaga() {
  yield takeEvery(GET_INITITAL_IMAGES, getInitialImagesSaga);
}
function* searchSaga() {
  yield debounce(1000, GET_SEARCH_IMAGES, getSearchImagesSaga);
  yield debounce(1000, GET_SEARCH_NEXT_IMAGES, getSearchNextImagesSaga);
}

export default function* rootSaga() {
  yield all([initialSaga(), searchSaga()]);
}
