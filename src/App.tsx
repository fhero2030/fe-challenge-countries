import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import RegionList from "./components/RegionList";

type Country = {
  name: string;
  population: number;
  region: string;
  capital: string;
  flags: { png: string };
};

function App() {
  const [countries, setCountries] = useState<Country[]>([]);

  const [regionFilter, setRegionFilter] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v2/all");
        const countries: Country[] = await response.json();
        setCountries(countries);
      } catch (error) {
        throw new Error("It seems like there's a problem with your request");
      }

      return countries;
    };

    fetchCountries();
  }, []);

  console.log(regionFilter);

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-[1440px] px-4">
        <div className="mb-10 flex-row gap-10 sm:flex sm:justify-between">
          <input
            className="mb-10 block w-full px-8 py-4 text-xs shadow-md sm:m-0 sm:w-80"
            placeholder="Search for a country..."
          />

          <select
            id="region"
            className="rounded-md border-r-[16px] border-r-transparent p-4 text-xs font-semibold shadow-md sm:w-56"
            defaultValue={regionFilter}
            onChange={(e) => {
              setRegionFilter(e.target.value);
            }}
          >
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>

        {countries.length > 0 && <RegionList countries={countries} />}
      </main>
    </>
  );
}

export default App;
