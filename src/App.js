import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/navbar";
import Index from "./components/layout/Index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <switch>
              <Route exact path="/" Component={Index} />
            </switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
