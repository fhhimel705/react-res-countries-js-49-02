import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountry }) => {
  const { name, area, capital, flags } = country;
  const [visited, setVisited] = useState(false);

  const handleVisit = () => {
    // setVisited(true);
    setVisited(!visited);
  };
  console.log(handleVisitedCountry);
  // const passWithParams = () => {
  //   handleVisitedCountry(country);
  //   handleVisit();
  // };
  return (
    <div className={`country-div ${visited ? "visited" : "non-visited"}`}>
      <h2>Name : {name.common} </h2>
      <h3>Capital : {capital} </h3>
      <h4>Area : {area} </h4>
      <img src={flags.png} alt="" />
      <button onClick={() => handleVisitedCountry(country)}>Marked</button>
      {/* <button onClick={}>Flags</button> */}
      <button onClick={handleVisit}>{visited ? "Visited" : "Visit"}</button>
      {visited ? "i have visited this country" : "i want to visit"}
    </div>
  );
};

export default Country;
