import React from "react";

type Props = {
  region: string;
  capital: string;
  population: number;
  name: string;
  flag: string;
};

const RegionCard = (props: Props) => {
  const { region, capital, name, population, flag } = props;

  return (
    <div className="overflow-hidden rounded-lg shadow-md">
      <img src={flag} className="h-44 w-full" />

      <div className="px-4 pt-6 pb-12">
        <h3 className="mb-4 font-bold">{name}</h3>

        <p className="text-sm">
          <span className="font-semibold">Population: </span> {population}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Region: </span> {region}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Capital: </span> {capital}
        </p>
      </div>
    </div>
  );
};

export default RegionCard;
