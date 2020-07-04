import React from 'react';
import './App.css';
import EntryFormContainer from "../src/container/entryFormContainer"
import Home from "../src/container/homePageContainer"


function App() {
  return (
    <div className="App container ">
     <EntryFormContainer/>
      <Home/>
    </div>
  );
}

export default App;
