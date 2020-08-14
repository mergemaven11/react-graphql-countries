import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

const CountryInfo = ({country}) => (
<div> 
<Card style={{ width: '18rem' }}>
    {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
    <Card.Body>
        <Card.Title>{country.name}</Card.Title> {' '}
    </Card.Body>
    <ListGroup className="list-group-flush">
        <ListGroupItem>Capital: {country.capital} </ListGroupItem> {' '}
        <ListGroupItem>Population: {country.population}</ListGroupItem>
        <ListGroupItem>Native Name: {country.nativeName}</ListGroupItem>
    </ListGroup>
    </Card>
</div>
)

export default CountryInfo;

// How to inport flag image(emoji); here. 

// Look in to TypeError: Uncaught TypeError: Cannot read property 'name' of undefined
// https://stackoverflow.com/questions/56199798/how-to-fix-react-dom-development-js287-uncaught-typeerror-cannot-read-propert
// https://www.reddit.com/r/graphql/comments/e4veky/i_cannot_figure_out_why_i_am_getting_a_typeerror/
// https://stackoverflow.com/questions/56007720/how-to-pass-data-from-graphql-when-in-a-react-component