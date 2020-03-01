import React from "react";
import {
   CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import styled from "styled-components"

const Card = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
align-items: center;
width: 30%;
border: 1px solid gray;
border-radius: 5%;
margin: 5% 20% `

export default function CharacterCard(props) {
  // console.log('card',props)

  const {name, status, species, type, gender, image, id} = props.data
  return(
    <div> 
      <Card id={id}>
        <CardImg top width="100%" src={image} alt={name} />
        <CardBody>
          <CardTitle>{species}, {status}</CardTitle>
          <CardText>{name} is a {gender} {species} from  who is currently {status}. This  {gender} {type} may be armed and dangerous</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
