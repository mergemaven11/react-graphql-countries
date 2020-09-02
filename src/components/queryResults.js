import React from "react";
import Result from "../components/styled/results.jsx"

const CountryInfo = ({country}) => (

    <Result.Wrapper>
    <h1>{country.name}</h1>

     <ul>
        <li>Capital: {country.capital}</li>
        <li>Population: {country.population}</li>
     </ul>
    </Result.Wrapper>




);

export default CountryInfo;

// How to import flag image(emoji); here.
