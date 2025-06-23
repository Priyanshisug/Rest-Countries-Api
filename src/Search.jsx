import { useState } from "react";

const Search = (props) => {
    const handleInputSearch = (e) => {
        props.setInputSearchProps(e.target.value)

    }

    const handleInputCountry = (e) => {
        props.setCountryProps(e.target.value)
    }
    return(
        <div className="search-row">
           <input placeholder = "search for country"
           value={props.inputSearchProps}
           onChange={handleInputSearch}/>
           <select value={props.inputCountryProps}
      onChange={handleInputCountry}>
     <option value="">Filter by Region</option>
  <option value="Africa">Africa</option>
  <option value="Asia">Asia</option>
  <option value="Americas">America</option>
  <option value="Europe">Europe</option>
  <option value="Oceania">Oceania</option>
    </select> 
        </div>
    )
}
export default Search;