import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const CountryInfo = ({ country }) => (
  <div>
    <Card style={{ width: "18rem" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
      <Card.Body>
        <Card.Title>{country.name}</Card.Title>{" "}
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Capital: {country.capital} </ListGroupItem>{" "}
        <ListGroupItem>Population: {country.population}</ListGroupItem>
        <ListGroupItem>Native Name: {country.nativeName}</ListGroupItem>
      </ListGroup>
    </Card>
  </div>
);

export default CountryInfo;

// How to import flag image(emoji); here.
