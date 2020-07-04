import React from "react";
import axios from "axios";
import { BASE_URL } from "../const/appConfig";


import EntryForm from "../component/entryForm";

const EntryFormContainer = () => {
 


  const saveData = async (data) => {
    const formData = new FormData();
    formData.append("species", data.species);
    formData.append("rarity", data.rarity);
    formData.append("notes", data.notes);
    formData.append("picture", data.picture);
    console.log(data.picture);

    let p = await axios.post(BASE_URL + "/api/observation", formData, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (p) {
      return "save successfully";
    } else {
      return "err";
    }
    //      DOT THAN METHOD OF Promise
    /*axios
      .post(BASE_URL+"/api/observation", formData,{headers: {
        'Access-Control-Allow-Origin': '*',
      }}
    )
      .then((arg) => {
        console.log("save successfylly");
        window.location.href = "http://localhost:3000"
      })
      .catch((err) => {
        console.log("unsuccessful", err);
      });*/
  };

  return (
    <div>
      <EntryForm save={saveData} />
      
    </div>
  );
};
export default EntryFormContainer;
