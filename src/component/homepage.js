import React from "react";
import "../assets/css/homepage.css";
import { Table } from 'reactstrap';
import moment from "moment";



const Homepage = (props) => {
    const { fetchedData } = props
    console.log(fetchedData);

    return (
        <div className="container">
            <div className="d-flex justify-content-around flex-wrap">
                {fetchedData.map((eachData) => {
                    return (
                        <div key={eachData._id} className="card-container">
                            <div className="image-wrapper">
                            <div className="image" className="image" style={{ backgroundImage: `url(${eachData.picture})` }}></div>

                            </div>
                            <Table striped>
                                <tbody>
                                    <tr>
                                        <td>{"Date"}</td>
                                        <td>{moment(eachData.publishedDate).format("MMM Do YY")}</td>
                                    </tr>
                                    <tr>
                                        <td>Rarity</td>
                                        <td>{eachData.rarity}</td>
                                    </tr>
                                    <tr>
                                        <td>Species</td>
                                        <td>{eachData.species}</td>
                                    </tr>
                                    <tr>
                                        <td>Notes</td>
                                        <td>{eachData.notes}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
export default Homepage;

