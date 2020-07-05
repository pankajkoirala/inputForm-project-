import React from "react";
import "./App.css";
import EntryFormContainer from "../src/container/entryFormContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PhotoLibraryContainer from "./container/photoLibraryContainer";
import NavBar from "./component/navBar" 

function App() {
  return (
    <div className="App container ">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/form" component={EntryFormContainer}></Route>
          <Route exact path="/" component={PhotoLibraryContainer}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
