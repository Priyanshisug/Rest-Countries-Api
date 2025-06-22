const Country = (props) => {
return (
    <div>
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
);
}
export default Country;