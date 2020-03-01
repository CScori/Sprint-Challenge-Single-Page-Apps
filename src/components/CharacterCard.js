import React from "react";
import {
   CardImg, CardText, CardBody,
  CardTitle, Col, Row
} from 'reactstrap';
import styled from "styled-components"
const Holder = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
width: 40%;
`
const Card = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
align-content: center;
width: 70%;
border: 1px solid gray;
border-radius: 5%;
margin: 5% 20% `

export default function CharacterCard(props) {
  // console.log('card',props)

  const {name, status, species, type, gender, image, id} = props.data
  return(
    <Holder> 
      <Row>
      <Col xs='auto'>
      <Card id={id}>
        <CardImg top width="100%" src={image} alt={name} />
        <CardBody>
          <CardTitle>{species}, {status}</CardTitle>
          <CardText>{name} is a {gender} {species} from  who is currently {status}. This  {gender} {type} may be armed and dangerous</CardText>
        </CardBody>
      </Card>
      </Col>
      </Row>
    </Holder>
  );
}
