import React from "react";
import{Link} from "react-router-dom"

import "./photolibrary.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const AlbumPhoto = (props) => {
  let {match}=props

  let albumData = props.serverData;
  console.log(props.match);

  return (
    <div className="row">
      {albumData.map((arg, index) => {
        return (
          <div key={index} className=" col-sm-3 mt-4">
            <Card className="h-100 w-100">
              <CardImg
                top
                width="100%"
                src={arg.picture}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>{arg.species}</CardTitle>
                <CardSubtitle>{arg.rarity}</CardSubtitle>
                <CardText>{arg.notes}</CardText>
                <Link to ={"/picture/"+arg._id}><Button type="button">
                  photo preview
                </Button></Link>
              </CardBody>     
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default AlbumPhoto;
