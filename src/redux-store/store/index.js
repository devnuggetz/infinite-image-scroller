import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import global from "../reducers/global";
import { globalSaga } from "../sagas/global";

const sagas = function* sagas() {
  yield* globalSaga();
};
const rootReducer = combineReducers({
  global: global,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

// Exports
export { store };
