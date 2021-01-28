import React from "react";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <div className="app__body">
          <Menu />
          <Cart />
        </div>
      </Provider>
    </div>
  );
}

export default App;
