import { useEffect, useState } from "react";
import Country from "./Country";

const Countries =() => {
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
   {countrieslist.map((c) => {
    return <Country  
    flag ={c.flags.png} 
    alt={c.flags.alt} 
    name = {c.flags.name}
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