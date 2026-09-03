import { useState } from "react";
import type { CountryType } from "../../types/type";
import "./Country.css";

export interface CountryProps {
  country: CountryType;
  handleVisitedCountry: (country: CountryType) => void;
  handleVisitedFlags: (flags: string) => void;
}

export default function Country({ country, handleVisitedCountry, handleVisitedFlags }: CountryProps) {
  const [visited, setVisited] = useState<boolean>(false);

  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountry(country);
  };

  return (
    <div className={`country ${visited ? "country-visited" : ""}`}>
      <h3>{country.name.common}</h3>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <p>Capital: {country.capital.capital}</p>
      <p>Population: {country.population.population}</p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Mark as Visited"}
      </button>
      <button 
      onClick={() => handleVisitedFlags(country.flags.flags.png)}
      >Add Flag as Visited</button>
    </div>
  );
}
