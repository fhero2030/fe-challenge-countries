import React from "react";

type Props = {
  region: string;
  capital: string;
  population: number;
  name: string;
};

const RegionCard = (props: Props) => {
  const { region, capital, name, population } = props;

  return (
    <div className="overflow-hidden rounded-lg shadow-md">
      <img src="https://images.unsplash.com/photo-1628825216807-441808e135b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />

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
