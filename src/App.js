import React from "react";
import { Provider } from "react-redux";
import Page from "./components/page";
import { store } from "./redux-store/store";

function App() {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
}

export default App;
