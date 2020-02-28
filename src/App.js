import React, { Component } from 'react';
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header"


class App extends Component {
  render() {
    return (
        <div className="App">
          <Header/>
          {routes}
        </div>
    );
  }
}

export default App;