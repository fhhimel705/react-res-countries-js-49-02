import "./Countries.css";
import { useState } from "react";
import Country from "../Country/Country";
import { useEffect } from "react";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCountries(data);
      });
  }, []);

  const [visitedCountries, setVisitedCountries] = useState([]);
  const handleVisitedCountry = (country) => {
    console.log(country);
    console.log("visited country");
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  return (
    <div>
      <div>
        <h2>Visited Countries :</h2>
      </div>
      <div className="Countries-div">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountry={handleVisitedCountry}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
