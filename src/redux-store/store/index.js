import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import global from "../reducers/global";
import rootSaga from "../sagas/global";

// const sagas = function* sagas() {
//   yield* globalSaga();
// };
const rootReducer = combineReducers({
  global: global,
});

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware);
const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);

// Exports
export { store };
