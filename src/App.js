import React from "react";
import "./App.css";
import EntryFormContainer from "../src/container/entryFormContainer";

import PhotoLibraryContainer from "./container/photoLibraryContainer";

function App() {
  return (
    <div className="App container ">
      <EntryFormContainer />
      <PhotoLibraryContainer />
    </div>
  );
}

export default App;
