import "./Countries.css";
import { useState } from "react";
import Country from "../Country/Country";
import { useEffect } from "react";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCountries(data);
      });
  }, []);

  const handleVisitedCountry = (country) => {
    // const newVisitedCountries = [...visitedCountries, country];
    // setVisitedCountries(newVisitedCountries);
    setVisitedCountries([...visitedCountries, country]);
  };

  const handleVisitedFlags = (country) => {
    const newVisitedFalgs = [...visitedFlags, country];
    setVisitedCountries(newVisitedFalgs);
  };
  return (
    <div>
      <div>
        {/* countries div */}
        <h2>Visited Countries : {visitedCountries.length} </h2>
        <ol>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ol>
        {/* flags div */}
        <h2>flags</h2>
      </div>
      <div className="Countries-div">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
