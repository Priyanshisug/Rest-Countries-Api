const Country = (props) => {
return (
    <div className="card">
        <div className="card-flag-container">
        <img src = {props.flag} alt = {props.alt}/>
         <div>{props.name}</div>
         <div>
        Population:<span>{props.population}</span>
        </div>
       <div>Region : <span>{props.region}</span></div>
       <div>
        Capital: <span>{props.capital[0]}</span>
       </div>
       </div>
    </div>
);
}
export default Country;