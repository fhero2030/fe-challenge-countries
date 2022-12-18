import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import RegionList from "./components/RegionList";

function App() {
  const [count, setCount] = useState(0);

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
            className="sm:w-55 rounded-md border-r-[16px] border-r-transparent p-4 text-xs font-semibold shadow-md"
          >
            <option selected>Filter by Region</option>
            <option value="US">Africa</option>
            <option value="CA">Antartica</option>
            <option value="FR">Asia</option>
            <option value="DE">Oceania</option>
          </select>
        </div>

        <RegionList />
      </main>
    </>
  );
}

export default App;
