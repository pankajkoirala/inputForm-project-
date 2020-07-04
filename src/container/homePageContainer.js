import React, { useState, useEffect } from "react";
import axios from "axios";

import Home from "../component/homepage";



const HomeContainer = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios
            .get("http://localhost:5000/api/observation", {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            })
            .then((arg) => {
                console.log("fetch successfylly");
                setData(arg.data)
            })
            .catch((err) => {
                console.log("unsuccessful", err);
            });
    };

    return (
        <div>
            <Home fetchedData={data} />
        </div>
    );
};
export default HomeContainer;

