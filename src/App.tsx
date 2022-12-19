import { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/Home";
import CountryPage from "./pages/Country";

function App() {
  return (
    <>
      <NavBar />
      <main className="mx-auto w-11/12 max-w-[1440px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:countryName" element={<CountryPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
