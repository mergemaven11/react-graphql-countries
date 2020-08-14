import React, { useState } from "react";
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks'
import CountryInfo from '../components/queryResults'
import Loader from '../components/Loader'


const countryQuery = gql`
    query getQuery($filter: _CountryFilter!) {
        Country(filter: $filter) {
            _id
            name
            capital
            population
            nativeName
        }
    }

`

// https://countries-274616.ew.r.appspot.com/?query=query%20getQuery%28%24filter%3A%20_CountryFilter%21%29%20%7B%0A%20%20%20%20%20%20%20%20Country%28filter%3A%20%24filter%29%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20_id%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20capital%0A%20%20%20%20%20%20%20%20%20%20%20%20population%0A%20%20%20%20%20%20%20%20%20%20%20%20nativeName%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%0A%60

// Write a function to handle the search; Second way to execute search below



export default function Search() {
    const [filter, setFilter] = useState({ name: 'Hungary' })
    const { data, loading, error } = useQuery(countryQuery, {
            variables: { filter },}) 
   
        if (loading){ 
          return <Loader />;
        }
        if (error) return <p>Error</p>;            

  return (
    <div className="body">
      <h1>
        Get Information
        <br /> about Countries!
      </h1>
      <div className="wrapper">
        <input 
        className="search" 
        type="text" 
        id="search" 
        placeholder='Enter a Country'
        />

        <button 
        className="submit" 
        type="submit" 
        value=" "
        onClick={e => setFilter({ name: e.target.value })}
        onBlur={e => setFilter({ name: e.target.value })} 
        >
            Search
        </button>
        

        {/* below will be falsy unless there is an actual country in the first element of the array. */}
        { data?.Country?.[0] && <CountryInfo country={data?.Country[0]} /> }        


      </div>
      {/* <h2>Click search to reset</h2> */}
    </div>
  );
}


// Second way to handle search

//   _executeSearch = async () => {
//     const { filter } = this.state
//     const result = await this.props.client.query({
//       query: countryQuery,
//       variables: { filter },
//     })
//     const country = result.data.Country
//     this.setState({ country })
//   }


