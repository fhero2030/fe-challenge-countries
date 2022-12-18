import { useEffect, useState } from "react";

import RegionList from "../components/RegionList";

type Country = {
  name: string;
  population: number;
  region: string;
  capital: string;
  flags: { png: string };
};

function HomePage() {
  const [countries, setCountries] = useState<Country[]>([]);

  const [regionFilter, setRegionFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        let query: string = "https://restcountries.com/v2/all";

        const response = await fetch(query);
        const data: Country[] = await response.json();

        setCountries(data);

        return data;
      } catch (error) {
        throw new Error("It seems like there's a problem with your request");
      }
    };

    fetchCountries();
  }, []);

  const filteredCountry =
    countryFilter && regionFilter
      ? countries.filter(({ name, region }) => {
          return (
            name.toLowerCase().includes(countryFilter) &&
            region.toLowerCase() === regionFilter
          );
        })
      : countryFilter
      ? countries.filter(({ name }) =>
          name.toLowerCase().includes(countryFilter)
        )
      : regionFilter
      ? countries.filter(({ region }) => region.toLowerCase() === regionFilter)
      : countries;

  console.log(filteredCountry);
  return (
    <>
      <div className="mb-10 flex-row gap-10 sm:flex sm:justify-between">
        <input
          className="mb-10 block w-full rounded-md px-8 py-4 text-xs shadow-md dark:bg-dark-element dark:text-dark-text sm:m-0 sm:w-80"
          placeholder="Search for a country..."
          onChange={(e) => {
            setCountryFilter(e.target.value.trim());
          }}
        />

        <select
          id="region"
          className="rounded-md border-r-[16px] border-r-dark-text p-4 text-xs font-semibold shadow-md dark:border-r-dark-element dark:bg-dark-element sm:w-56"
          defaultValue={regionFilter}
          onChange={(e) => {
            setRegionFilter(e.target.value);
          }}
        >
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>

      {filteredCountry.length > 0 && <RegionList countries={filteredCountry} />}
    </>
  );
}

export default HomePage;
