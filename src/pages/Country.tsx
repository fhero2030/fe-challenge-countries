import React, { useEffect, useState } from "react";

import { countries } from "country-data";

import { useParams, Link } from "react-router-dom";

type CountryDetailed = {
  nativeName: string;
  name: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  currencies: string;
  topLevelDomain: string[];
  flags: { png: string };
  languages: { name: string }[];
  borders?: string[];
};

const CountryPage = () => {
  const { countryName } = useParams();

  const [country, setCountry] = useState<CountryDetailed | undefined>();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        let query: string = `https://restcountries.com/v2/name/${countryName}?fullText=true`;

        const response = await fetch(query);
        const data: CountryDetailed[] = await response.json();

        if (data.length > 0) {
          setCountry(data[0]);
        }

        console.log(data);

        return data;
      } catch (error) {
        throw new Error("It seems like there's a problem with your request");
      }
    };

    fetchCountries();
  }, [countryName]);

  if (!country) {
    return <></>;
  }
  return (
    <div>
      <Link
        to="/"
        className="mb-10 inline-block cursor-pointer rounded-md px-8 py-2 shadow-xl hover:active:shadow-inner dark:bg-dark-element sm:mt-10 sm:mb-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className=" mr-2 inline h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        Back
      </Link>

      <div className="md:grid md:grid-cols-5 md:gap-20">
        <img
          src={country.flags.png}
          className="w-full p-6 shadow-xl md:col-span-2"
        />
        <div className="p-10 md:col-span-3">
          <h2 className="mb-6 text-2xl font-bold">{country.name}</h2>
          <div className="mb-10 grid gap-5 font-semibold md:grid-cols-2">
            <div>
              <p className="mb-2">
                Native Name:{" "}
                <span className="font-normal">{country.nativeName}</span>
              </p>
              <p className="mb-2">
                Population: <span>{country.population}</span>
              </p>
              <p className="mb-2">
                Region: <span className="font-normal">{country.region}</span>
              </p>
              <p className="mb-2">
                Sub Region:{" "}
                <span className="font-normal">{country.subregion}</span>
              </p>
              <p className="mb-2">
                Capital: <span className="font-normal">{country.capital}</span>
              </p>
            </div>
            <div>
              <p className="mb-2">
                Top Level Domain:{" "}
                <span className="font-normal">{country.topLevelDomain[0]}</span>
              </p>
              <p className="mb-2">
                Currencies: <span className="font-normal">{country.name}</span>
              </p>
              <p className="mb-2 break-normal">
                Languages:{" "}
                {country.languages.map(({ name }, i) => (
                  <span className="break-keep font-normal" key={name}>
                    {name}
                    {country.languages.length === i + 1 ? "" : ", "}
                  </span>
                ))}
              </p>
            </div>
          </div>
          {country.borders ? (
            <div className="flex flex-wrap justify-start gap-2">
              <p className="w-full font-semibold">Border Countries: </p>
              {country.borders.map((acronym) => (
                <p
                  key={acronym}
                  className="rounded-sm px-6 py-1 text-sm font-normal shadow-md dark:bg-dark-element"
                >
                  {countries[acronym].name}
                </p>
              ))}
            </div>
          ) : (
            <p className="w-full font-semibold">This country has no border</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
