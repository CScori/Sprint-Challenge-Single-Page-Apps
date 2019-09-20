import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


export default function CharacterCard(props) {
  return (
    <div>
    <Card>
      <CardImg top width="100%" src={props.character.image} alt={props.character.name} />
      <CardBody>
        <CardTitle>{props.character.name}</CardTitle>
        <CardSubtitle>{props.character.status}</CardSubtitle>
        <CardText>{props.character.location.name}
        Episodes: {props.character.episode.length}</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  </div>
    
      
    )
  }
