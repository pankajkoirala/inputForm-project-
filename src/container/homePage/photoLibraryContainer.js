import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../const/appConfig";
import AlbumPhoto from "../../component/homePage/photoLIbrary";
import DetailPage from "../detailPageContainer/detailPageContainet"
import Det from "../../component/detailPage/Detail";


const PhotoLibraryContainer = (props) => {
 let {match}=props

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    let serverdata = await axios.get(BASE_URL + "/api/observation", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    setData(serverdata.data);
    console.log(serverdata.data);
  };

  return (
    <div>
      <AlbumPhoto serverData={data} {...props} />      
        <Route exact path={"/picture/:id"} component={Det}></Route>       
    </div>
  );
};

export default PhotoLibraryContainer;
