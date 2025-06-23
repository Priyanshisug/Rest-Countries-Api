import { useState } from "react";
import Countries from "./Countries";
import Search from "./Search";

const Main = () => {
    const [inputSearch, setInputSearch] =useState("")
    const [inputCountry, setCountry] = useState("")

    return<main>
        <Search
        inputSearchProps={inputSearch}
        setInputSearchProps={setInputSearch}
        inputCountryProps={inputCountry}
        setCountryProps={setCountry}/>
        <Countries inputSearchProps={inputSearch}
        inputCountryProps={inputCountry}/>
    </main>
}
export default Main;