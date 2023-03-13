import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import AppRouter from "@configs/router";
import store from "@configs/store";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <AppRouter />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
