import React from "react";
import "./App.css";
import EntryFormContainer from "../src/container/formPage/entryFormContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PhotoLibraryContainer from "./container/homePage/photoLibraryContainer";
import NavBar from "./component/shared/navBar" 
import Mainpage from "./component/mainPage/mainpage" 


function App() {
  return (
    <div className="App container ">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/form" component={EntryFormContainer}></Route>
          <Route exact path="/picture" component={PhotoLibraryContainer}></Route>
          <Route exact path="/" component={Mainpage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
