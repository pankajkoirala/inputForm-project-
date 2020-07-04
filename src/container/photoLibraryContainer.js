import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../const/appConfig";
import AlbumPhoto from "../component/photoLIbrary";

const PhotoLibraryContainer = () => {
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
      <AlbumPhoto serverData={data} />
    </div>
  );
};
export default PhotoLibraryContainer;
