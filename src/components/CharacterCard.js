import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function CharacterCard(props) {
  console.log(props)
  const {name, status, species, type, gender, image} = props
  return(
    <div> 
      <Card id={props.key}>
        <CardImg top width="100%" src={image} alt={name} />
        <CardBody>
          <CardTitle>{species}</CardTitle>
          <CardSubtitle>{status}</CardSubtitle>
          <CardText>{name} is a {male} {species} from {location} who is currently {status}. This  {gender} {type} may be armed and dangerous</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
