import React from "react";
import axios from "axios";

import EntryForm from "../component/entryForm";

const EntryFormContainer = () => {
  const saveData = (data) => {
    const formData= new FormData();
     formData.append("species",data.species)
     formData.append("rarity",data.rarity)
     formData.append("notes",data.notes)
     formData.append("picture",data.picture)
     console.log(data.picture);
     
    axios
      .post("http://localhost:5000/api/observation", formData,{headers: {
        'Access-Control-Allow-Origin': '*',
      }}
    )
      .then((arg) => {
        console.log("save successfylly", arg);
      })
      .catch((err) => {
        console.log("unsuccessful", err);
      });
  };

  return (
    <div>
      <EntryForm save={saveData} />
    </div>
  );
};
export default EntryFormContainer;
 
