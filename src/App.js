import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import store from "./store";

import NavBar from "./NavBar";
import Details from "./Details";
import Results from "./Results";
import SearchParams from "./SearchParams";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Provider store={store}>
          <Router>
            <Results path="/" />
            <Details path="/details/:id" />
            <SearchParams path="/search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
