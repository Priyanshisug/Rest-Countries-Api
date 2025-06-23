import { useEffect, useState } from "react";
import Country from "./Country";

const Countries =(props) => {
    const[countrieslist, setCountriesList] = useState([])
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all?fields=name,flag,population,capital,region,flags")
        .then((response) =>{
            return response.json();
        })
        .then((data) => {
            setCountriesList(data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

return (
<div className="countries-container">
   {countrieslist.filter((c) => {
    const name = c.name.common.toLowerCase()
    .includes(props.inputSearchProps.toLowerCase());

     const region = props.inputCountryProps
        ? c.region === props.inputCountryProps
        : true;
    return name && region

    // const search = props.inputSearchProps?.toLowerCase() || "";
    //   const selectedRegion = props.inputCountryProps;

    //   const nameMatch = search
    //     ? c.name?.common?.toLowerCase().includes(search)
    //     : true;

    //     console.log("Country Region:", c.region);
    //   const regionMatch = selectedRegion
    //     ? c.region === selectedRegion
    //     : true;

    //   return nameMatch && regionMatch;
})
   .map((c) => {
    return <Country  
    flag ={c.flags.png} 
    alt={c.flags.alt} 
    name = {c.name.common}
    population={c.population}
    region ={c.region}
    capital={c.capital}
    key={c.name.common}
    />;
    })}
</div>
);
}
export default Countries;