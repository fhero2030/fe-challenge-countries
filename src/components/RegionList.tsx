import React from "react";
import RegionCard from "./RegionCard";

const RegionList = () => {
  return (
    <div className="mx-auto grid w-9/12 sm:w-full sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-12 lg:grid-cols-4 lg:gap-16">
      <RegionCard
        name="Japan"
        region="Asia"
        capital="Tokyo"
        population={8000000}
      />
      <RegionCard
        name="Japan"
        region="Asia"
        capital="Tokyo"
        population={8000000}
      />{" "}
      <RegionCard
        name="Japan"
        region="Asia"
        capital="Tokyo"
        population={8000000}
      />{" "}
      <RegionCard
        name="Japan"
        region="Asia"
        capital="Tokyo"
        population={8000000}
      />
    </div>
  );
};

export default RegionList;
