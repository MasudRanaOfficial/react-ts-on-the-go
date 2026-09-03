import { use, useState } from "react";
import type { CountryType } from "../../types/type";
import Country from "../Country/Country";
import "./Countries.css";

export interface CountriesProps {
  countriesPromise: Promise<CountryType[]>;
}

export default function Countries({ countriesPromise }: CountriesProps) {
  const [countriesVisited, setCountriesVisited] = useState<CountryType[]>([]);

  const [visitedFlags, setVisitedFlags] = useState<string[]>([]);

  const countries = use(countriesPromise);

  const handleVisitedCountry = (country: CountryType): void => {
    if (countriesVisited.includes(country)) {
      const remainingCountries = countriesVisited.filter((c) => c !== country);
      setCountriesVisited(remainingCountries);
    } else {
      const newVisitedCountry = [...countriesVisited, country];
      setCountriesVisited(newVisitedCountry);
    }
  };

  const handleVisitedFlags = (flag: string): void => {
    console.log("visited flags", flag);

    if (visitedFlags.includes(flag)) {
      const remainingFlags = visitedFlags.filter((f) => f !== flag);
      setVisitedFlags(remainingFlags);
    } else {
      const newVisitedFlags = [...visitedFlags, flag];
      setVisitedFlags(newVisitedFlags);
    }
  };

  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      <h3>Countries Visited: {countriesVisited.length}</h3>
      <div>
        <ul>
          {
            countriesVisited.map(country =>  <li>{country.name.common}</li>)
          }
        </ul>
      </div>
      <h4>Visited Flags: {visitedFlags.length}</h4>
      <div className="visited-flag">
        {visitedFlags.map((flag) => (
          <img src={flag} alt="Visited Flag" />
        ))}
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
}
